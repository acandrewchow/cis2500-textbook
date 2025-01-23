const fs = require("fs").promises;
const { execFile } = require("child_process");
const path = require("path");
const os = require("os");

const compileProgram = (cFilePath, executablePath) => {
  return new Promise((resolve, reject) => {
    execFile(
      "gcc",
      [cFilePath, "-o", executablePath, "-std=c99", "-Wall"],
      (err, stdout, stderr) => {
        if (err) {
          reject(stderr || err.message);
        } else {
          resolve();
        }
      }
    );
  });
};

const runValgrind = (executablePath) => {
  return new Promise((resolve, reject) => {
    /* Valgrind Flags */
    execFile(
      "valgrind",
      [
        "--leak-check=full",
        "--show-leak-kinds=all",
        "--track-origins=yes",
        executablePath,
      ],
      (err, stdout, stderr) => {
        if (err && !stderr) {
          reject(err.message); 
        } else {
          resolve({ stdout, stderr }); 
        }
      }
    );
  });
};

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  const tempDir = path.join(os.tmpdir(), "valgrind_temp");
  const cFilePath = path.join(tempDir, "example.c");
  const executablePath = path.join(tempDir, "example");

  try {
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(cFilePath, code);

    try {
      await compileProgram(cFilePath, executablePath);
    } catch (compileError) {
      return res
        .status(500)
        .json({ error: `Compilation failed: ${compileError}` });
    }

    try {
      const { stdout, stderr } = await runValgrind(executablePath);
      res.status(200).json({ valgrindOutput: stderr, programOutput: stdout });
    } catch (valgrindError) {
      res.status(500).json({ error: `Valgrind failed: ${valgrindError}` });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};

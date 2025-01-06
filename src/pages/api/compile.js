const fs = require('fs').promises;
const { execFile } = require('child_process');
const path = require('path');
const os = require('os');

/**
 * API endpoint to compile, run C source code, and run test cases
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, testCases } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  const tempDir = path.join(os.tmpdir(), 'compile_temp');
  const cFilePath = path.join(tempDir, 'example.c');
  const executablePath = path.join(tempDir, 'example');

  try {
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(cFilePath, code);

    execFile('gcc', [cFilePath, '-o', executablePath, '-std=c99', '-Wall'], async (compileErr, stdout, stderr) => {
      if (compileErr) {
        return res.status(500).json({ error: stderr || compileErr.message });
      }

      // If test cases are provided, validate them
      if (Array.isArray(testCases) && testCases.length > 0) {
        const results = [];
        for (const testCase of testCases) {
          const { input, expectedOutput } = testCase;

          try {
            const runResult = await new Promise((resolve, reject) => {
              const child = execFile(executablePath, { timeout: 5000 }, (runErr, runStdout, runStderr) => {
                if (runErr) {
                  reject(runStderr || runErr.message);
                } else {
                  resolve(runStdout.trim());
                }
              });

              if (input) {
                child.stdin.write(input);
                child.stdin.end();
              }
            });

            results.push({
              input,
              expectedOutput,
              actualOutput: runResult,
              passed: runResult === expectedOutput,
            });
          } catch (runError) {
            results.push({
              input,
              expectedOutput,
              actualOutput: null,
              error: runError,
              passed: false,
            });
          }
        }

        return res.status(200).json({ results });
      } else {
        // No test cases provided - default run code sample
        execFile(executablePath, (runErr, runStdout, runStderr) => {
          if (runErr) {
            return res.status(500).json({ error: runStderr || runErr.message });
          }

          res.status(200).json({ output: runStdout });
        });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};
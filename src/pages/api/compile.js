const fs = require('fs').promises;
const { execFile } = require('child_process');
const path = require('path');

/**
 * API endpoint to compile and run C source code.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  const tempDir = path.join(__dirname, '../../.next/server/pages/api/temp');
  const cFilePath = path.join(tempDir, 'example.c');
  const executablePath = path.join(tempDir, 'example');

  try {
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(cFilePath, code);

    execFile('gcc', [cFilePath, '-o', executablePath, '-std=c99', '-Wall'], async (compileErr, stdout, stderr) => {
      if (compileErr) {
        return res.status(500).json({ error: compileErr.message });
      }

      try {
        const compiledCode = await fs.readFile(cFilePath, 'utf8');

        execFile(executablePath, (runErr, runStdout, runStderr) => {
          if (runErr) {
            return res.status(500).json({ error: runErr.message });
          }

          res.status(200).json({ output: runStdout, error: runStderr, compiledCode });
        });
      } catch (readErr) {
        console.error('Error reading file:', readErr);
        res.status(500).json({ error: 'An error occurred while reading the file.' });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};
import fs from "fs";
import path from "path";

/*
    /api/saveQuiz endpoint that saves a given quiz to a JSON file used to render within the Quiz content
*/
export default function handler(req, res) {
  if (req.method === "POST") {
    const quizzesDir = path.join(process.cwd(), "src/data/quizzes");

    if (!fs.existsSync(quizzesDir)) {
      fs.mkdirSync(quizzesDir, { recursive: true });
    }

    // Name the file with a timestamp (Subject to change)
    const timestamp = Date.now();
    const filePath = path.join(quizzesDir, `quiz_${timestamp}.json`);

    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));

    res.status(200).json({ message: "Quiz saved!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

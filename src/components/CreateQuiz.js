import { useState } from "react";

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    questions: [],
  });

  const [editingIndex, setEditingIndex] = useState(null); 

  const [question, setQuestion] = useState({
    text: "",
    code: "", // Optional choice for questions that contain code
    choices: [
      { label: "A", text: "" },
      { label: "B", text: "" },
      { label: "C", text: "" },
      { label: "D", text: "" },
    ],
    correctAnswer: "",
    explanation: "",
  });

  const handleQuestionChange = (field, value) => {
    setQuestion((prev) => ({ ...prev, [field]: value }));
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...question.choices];
    updatedChoices[index].text = value;
    setQuestion((prev) => ({ ...prev, choices: updatedChoices }));
  };

  const addOrUpdateQuestion = () => {
    if (!question.text || !question.correctAnswer || !question.explanation) {
      alert("Please fill out all fields before adding the question.");
      return;
    }

    const updatedQuestions = [...quiz.questions];

    if (editingIndex !== null) {
      // Update an existing question
      updatedQuestions[editingIndex] = { ...question, id: editingIndex + 1 };
      setEditingIndex(null);
    } else {
      // Add a new question
      const newQuestion = {
        ...question,
        id: updatedQuestions.length + 1, 
      };
      updatedQuestions.push(newQuestion);
    }

    setQuiz({ ...quiz, questions: updatedQuestions });

    setQuestion({
      text: "",
      code: "",
      choices: [
        { label: "A", text: "" },
        { label: "B", text: "" },
        { label: "C", text: "" },
        { label: "D", text: "" },
      ],
      correctAnswer: "",
      explanation: "",
    });
  };

  const editQuestion = (index) => {
    setQuestion(quiz.questions[index]);
    setEditingIndex(index);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = quiz.questions.filter((_, i) => i !== index);
    setQuiz({ ...quiz, questions: updatedQuestions.map((q, i) => ({ ...q, id: i + 1 })) }); 
  };

  const saveQuiz = async () => {
    if (quiz.questions.length === 0) {
      alert("Please add at least one question before saving.");
      return;
    }

    const response = await fetch("/api/saveQuiz", {
      method: "POST",
      body: JSON.stringify(quiz.questions),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) alert("Quiz saved successfully!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Quiz Creator</h1>
      <h2 className="text-xl mt-4">{editingIndex !== null ? "Edit Question" : "Add a Question"}</h2>
      <input
        type="text"
        placeholder="Question"
        className="border p-2 w-full my-2 bg-zinc-800"
        value={question.text}
        onChange={(e) => handleQuestionChange("text", e.target.value)}
      />

      <textarea
        placeholder="Enter code (optional)"
        className="border p-2 w-full my-2 bg-zinc-800"
        rows={6}
        value={question.code}
        onChange={(e) => handleQuestionChange("code", e.target.value)}
      />

      {question.choices.map((choice, index) => (
        <input
          key={choice.label}
          type="text"
          placeholder={`Option ${choice.label}`}
          className="border p-2 w-full my-1 bg-zinc-800"
          value={choice.text}
          onChange={(e) => handleChoiceChange(index, e.target.value)}
        />
      ))}

      <input
        type="text"
        placeholder="Correct Answer (A, B, C, D)"
        className="border p-2 w-full my-2 bg-zinc-800"
        value={question.correctAnswer}
        onChange={(e) => handleQuestionChange("correctAnswer", e.target.value)}
      />
      <textarea
        placeholder="Explanation"
        className="border p-2 w-full my-2 bg-zinc-800"
        value={question.explanation}
        onChange={(e) => handleQuestionChange("explanation", e.target.value)}
      />

      <button onClick={addOrUpdateQuestion} className="bg-blue-500 text-white p-2 rounded-lg">
        {editingIndex !== null ? "Update Question" : "Add Question"}
      </button>

      {quiz.questions.length > 0 && (
        <>
          <h2 className="text-xl mt-6">Questions Added</h2>
          <ul className="list-disc pl-5">
            {quiz.questions.map((q, index) => (
              <li key={q.id} className="border p-2 my-2 flex justify-between items-center">
                <div>
                  <strong>{q.id}. {q.text}</strong> <br />
                  {q.code && <pre className="bg-gray-800 text-white p-2 mt-2">{q.code}</pre>}
                  <span className="text-green-500">Answer: {q.correctAnswer}</span>
                </div>
                <div>
                  <button onClick={() => editQuestion(index)} className="bg-purple-500 text-white px-3 py-1 mr-2 rounded-lg">
                    Edit
                  </button>
                  <button onClick={() => deleteQuestion(index)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <button onClick={saveQuiz} className="bg-green-500 text-white p-2 mt-4 ml-2 rounded-lg">
        Save Quiz
      </button>
    </div>
  );
}
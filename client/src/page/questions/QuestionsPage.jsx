import React from "react";
function QuestionsPage({ questions }) {
  return (
    <div>
      {questions &&
        questions.map((question) => (
          <QuestItem key={question.id} question={question} />
        ))}
    </div>
  );
}

export default QuestionsPage;

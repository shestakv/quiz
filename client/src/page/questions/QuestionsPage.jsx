import React from'react';
function QuestionsPage({ questions, setQuestions, answers, setAnswers }) {


  return (
      <div>

        {questions && questions.map((question) => (
            <QuestItem 
                key={question.id}
                setQuestions={setQuestions}
                question={question}
                setAnswers={setAnswers}
                answers={answers}
            />
        ))}

      </div>
  );
}

export default QuestionsPage;
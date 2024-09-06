import React from'react';
function QuestItem({ question, setQuestions, answers, setAnswers }) {
    
    const onHandleGet = async () => {
        const response = await axiosRequest.get(`/themes/${theme.id}/questions/${questions.id}`)
        if(response.status === 200){
            question = questions.find(() => )
        }
    }

    // setAnswers((prev) => prev.filter((answer) => answer.id === question.id))

  return (
      <div><h1>Question</h1></div>
  );
}

// 1 ансвер, выцепляем по квестайди, который совпадает с квестионАйди

export default QuestItem;
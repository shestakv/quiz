import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosRequest } from "../../services/axiosInstance";
function QuestItem() {
  const { themeId, questionId } = useParams();
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);

    const onHandleShow = () => {
        setShow((prev) => !prev)
    }


  const getQuestionByQuestionId = async () => {
    try {
      const response = await axiosRequest.get(
        `/themes/${+themeId}/questions/${+questionId}`
      );
      if (response.status === 200) {
        setQuestion(response.data.question);
        setAnswers(response.data.answers);
      }
    } catch (error) {
      console.log(error);
    }
  };
console.log(question)
console.log(answers)
  useEffect(() => {
    getQuestionByQuestionId();
  }, []);

  return (
    <div>
      <h2>{question.title}</h2>
       <button onClick={onHandleShow}>{answers[0].title}</button>
       <button onClick={onHandleShow}>{answers[1].title}</button>
       <button onClick={onHandleShow}>{answers[2].title}</button>
       <button onClick={onHandleShow}>{answers[3].title}</button>
    </div>
  );
}

export default QuestItem;

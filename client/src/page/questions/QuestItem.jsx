import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosRequest } from "../../services/axiosInstance";
import AnswerItem from "./AnswerItem";
import "./AnswerItem.css";
function QuestItem() {
  const { themeId, questionId } = useParams();
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [lastQuestion, setLastQuestions] = useState([]);

  const getAllQuestionsByThemeId = async () => {
    try {
      const response = await axiosRequest.get(`/themes/${+themeId}/questions`);
      if (response.status === 200) {
        setLastQuestions(response.data.questions.at(-1));
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  const navigate = useNavigate();

  const getQuestionByQuestionId = async (currentUrl) => {
    try {
      const response = await axiosRequest.get(currentUrl);
      if (response.status === 200) {
        setQuestion(response.data.question);
        setAnswers(response.data.answers);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const currentUrl = `/themes/${+themeId}/questions/${+questionId}`;
    getAllQuestionsByThemeId();
    getQuestionByQuestionId(currentUrl);
  }, [themeId, questionId]);

  const handleNextQuestion = () => {
    const nextQuestionId = +questionId + 1;
    navigate(`/themes/${+themeId}/questions/${nextQuestionId}`);
  };

  return (
    <div className="main-block">
      <h2 className="question__title">{question.title}</h2>
      <div className="answer-block">
        {answers &&
          answers.map((answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
              setShowButton={setShowButton}
            />
          ))}
      </div>
      {showButton &&
        (+questionId === +lastQuestion.id ? (
          <button
            onClick={() => {
              navigate(`/themes`);
            }}
          >
            Go to Themes
          </button>
        ) : (
          <button
            onClick={() => {
              handleNextQuestion();
              setShowButton(false);
            }}
          >
            Next Question
          </button>
        ))}
    </div>
  );
}

export default QuestItem;

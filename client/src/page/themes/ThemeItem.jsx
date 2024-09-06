import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import { Link, NavLink } from "react-router-dom";

function ThemeItem({ theme }) {
  const [questions, setQuestions] = useState([]);
  const [firstQuestion, setFirstQuestion] = useState(0);
  const getAllQuestionsByThemeId = async () => {
    try {
      const response = await axiosRequest.get(`/themes/${theme.id}/questions`);
      if (response.status === 200) {
        setQuestions(response.data.questions);
        setFirstQuestion(response.data.questions[0].id);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllQuestionsByThemeId();
  }, []);

  return (
    <>
      <Link to={`/themes/${theme.id}/questions/${firstQuestion}`}>
        {theme.title}
      </Link>
      <br />
    </>
  );
}

export default ThemeItem;

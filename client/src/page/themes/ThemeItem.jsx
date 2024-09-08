import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import { Link, NavLink } from "react-router-dom";
import "./ThemePage.css";

function ThemeItem({ theme }) {
  const [firstQuestion, setFirstQuestion] = useState(0);
  const getAllQuestionsByThemeId = async () => {
    try {
      const response = await axiosRequest.get(`/themes/${theme.id}/questions`);
      if (response.status === 200) {
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
      <Link
        to={`/themes/${theme.id}/questions/${firstQuestion}`}
        className="theme__title"
      >
        {theme.title}
      </Link>
      <br />
    </>
  );
}

export default ThemeItem;

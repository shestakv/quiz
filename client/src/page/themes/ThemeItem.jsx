import React from "react";
import { axiosRequest } from "../../services/axiosInstance";
import { Link, NavLink } from "react-router-dom";

const [questions, setQiestions] = useSate([]);
let firstElement;

const getAllQuestionsByThemeId = async () => {
  try {
    const response = await axiosRequest.get(`/themes/${theme.id}/questions`);
    if (response.status === 200) {
      setQiestions(response.data.questions);
      firstElement = questions[0].id;
    }
  } catch ({ response }) {
    console.log(response.data.message);
  }
};

useEffect(() => {
  getAllQuestionsByThemeId();
}, []);

function ThemeItem({ theme, questions }) {
  return (
    <>
      <Link to={`/themes/${theme.id}/question/${firstElement}`}>
        {theme.title}
      </Link>
    </>
  );
}

export default ThemeItem;

import React from "react";
import { axiosRequest } from "../../services/axiosInstance";

function ThemeItem({ theme, setThemes, setQuestions }) {
  const onHandleOpenQuestion = async () => {
    try {
      const response = await axiosRequest.get(
        `/themes/${theme.id}`
        if (response.status === 200) {
            setQuestions((prev)=> prev.filter((quest)=>quest.themeId === theme.id ))
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={onHandleOpenQuestion}>{theme.title}</button>
    </>
  );
}

export default ThemeItem;

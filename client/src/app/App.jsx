import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../widgets/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ThemesPage from "../page/themes/ThemesPage";
import ThemeItem from "../page/themes/ThemeItem";
import WelcomePage from "../page/welcome/WelcomePage";
import { axiosRequest } from "../services/axiosInstance";
import QuestItem from "../page/questions/QuestItem";

function App() {
  const [themes, setThemes] = useState([]);

  const getAllThemes = async () => {
    try {
      const response = await axiosRequest.get("/themes");
      if (response.status === 200) {
        setThemes(response.data.themes);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllThemes();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/themes"
          element={<ThemesPage themes={themes} setThemes={setThemes} />}
        />
        <Route path="/themes/:id" element={<ThemeItem />} />
        <Route path="/themes/:themeId/questions/:questionId" element={<QuestItem/>}/>
      </Routes>
    </>
  );
}

export default App;

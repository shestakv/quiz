const router = require("express").Router();
const ThemeServices = require("../services/ThemeServices");
const QuestionServices = require("../services/QuestionServices");
const AnswerServices = require("../services/AnswerServices");

router.get("/", async (req, res) => {
  try {
    const themes = await ThemeServices.getAllThemes();
    res.status(200).json({ message: "success", themes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const theme = await ThemeServices.getThemeById(id);
    if (theme) {
      res.status(200).json({ message: "success", theme });
      return;
    }
    res.status(400).json({ message: "theme is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:id/questions", async (req, res) => {
  try {
    const { id } = req.params;
    const theme = await ThemeServices.getThemeById(id);
    const questions = await QuestionServices.getQuestionsByTheme(id);
    if (theme) {
      res.status(200).json({ message: "success", theme, questions });
      return;
    }
    res.status(400).json({ message: "theme is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:id/questions/:idQuest", async (req, res) => {
  try {
    const { id, idQuest } = req.params;
    const theme = await ThemeServices.getThemeById(id);
    const question = await QuestionServices.getQuestionById(idQuest);
    const answers = await AnswerServices.getAnswersByQuestionId(idQuest)
    if (theme) {
      res.status(200).json({ message: "success", theme, question, answers});
      return;
    }
    res.status(400).json({ message: "theme is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;

const { Question } = require("../db/models");

class QuestionServices {
  static async getAllQuestions() {
    try {
      const questions = (await Question.findAll()).map((el) => el.get());
      return questions;
    } catch ({ message }) {
      console.log(message);
    }
  }
  static async getQuestionById(id) {
    try {
      const question = (await Question.findOne({ where: { id } })).get();
      return question;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getQuestionsByTheme(themeId) {
    try {
      const questions = (await Question.findAll({ where: { themeId } })).map(
        (el) => el.get()
      );
      return questions;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = QuestionServices;

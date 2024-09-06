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
}

module.exports = QuestionServices;

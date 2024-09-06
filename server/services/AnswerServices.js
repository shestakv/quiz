const { Answer } = require("../db/models");

class AnswerServices {
  static async getAllAnswers() {
    try {
      const answers = (await Answer.findAll()).map((el) => el.get());
      return answers;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = AnswerServices;

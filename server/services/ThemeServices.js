const { Theme } = require("../db/models");

class ThemeServices {
  static async getAllThemes() {
    try {
      const themes = (await Theme.findAll()).map((el) => el.get());
      return themes;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = ThemeServices;

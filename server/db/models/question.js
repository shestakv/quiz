"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: "themeId" });
      this.hasMany(Answer, { foreignKey: "questionId" });
    }
  }
  Question.init(
    {
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Themes",
        },
        onDelete: "cascade",
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};

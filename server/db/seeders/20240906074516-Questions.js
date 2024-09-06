"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          themeId: 1,
          title: "Какой язык программирования наиболее высокооплачиваемый?",
        },
        {
          themeId: 1,
          title:
            "В Windows 10 было найдено рекордное количество багов за всю историю существования этой операционной системы. В чем причина?",
        },
        {
          themeId: 1,
          title:
            "В каком году было отправлено первое коммерческое SMS-сообщение?",
        },
        {
          themeId: 1,
          title: "Сколько поисковых запросов Google получает в секунду?",
        },
        {
          themeId: 1,
          title: "Логотип браузера Firefox – это...",
        },
        {
          themeId: 2,
          title: "Кто был другом Гарри Поттера?",
        },
        {
          themeId: 2,
          title:
            "Какая русская фамилия больше подошла бы Гарри Поттеру, если исходить из дословного перевода?",
        },
        {
          themeId: 2,
          title:
            "Кто написал книги о Гарри Поттере?",
        },
        {
          themeId: 2,
          title: "На каком факультете Хогвартса учился юный маг Гарри Поттер?",
        },
        {
          themeId: 2,
          title: "Как называется седьмой фильм о Гарри Поттере?",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};

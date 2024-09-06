"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Answers",
      [
        {
          questionId: 1,
          status: false,
          title: 'JavaScript'
        },
        {
          questionId: 1,
          status: false,
          title: 'Python'
        },
        {
          questionId: 1,
          status: true,
          title: 'Solidity'
        },
        {
          questionId: 1,
          status: false,
          title: 'Java'
        },
        {
          questionId: 2,
          status: false,
          title: 'У офиса Microsoft перевернулся грузовик с багами'
        },
        {
          questionId: 2,
          status: true,
          title: 'Незадолго до релиза Microsoft передал тестирование пользователям'
        },
        {
          questionId: 2,
          status: false,
          title: 'Билл Гейтс объявил, что покидает Microsoft'
        },
        {
          questionId: 2,
          status: false,
          title: 'Разработчики Windows 10 решили использовать в качестве основного языка программирования Perl'
        },
        {
          questionId: 3,
          status: true,
          title: '1992'
        },
        {
          questionId: 3,
          status: false,
          title: '1999'
        },
        {
          questionId: 3,
          status: false,
          title: '1987'
        },
        {
          questionId: 3,
          status: false,
          title: '2001'
        },
        {
          questionId: 4,
          status: false,
          title: '50000'
        },
        {
          questionId: 4,
          status: true,
          title: '100000'
        },
        {
          questionId: 4,
          status: false,
          title: '10000'
        },
        {
          questionId: 4,
          status: false,
          title: '1000000'
        },
        {
          questionId: 5,
          status: true,
          title: 'Красная Панда'
        },
        {
          questionId: 5,
          status: false,
          title: 'Огненная лиса'
        },
        {
          questionId: 5,
          status: false,
          title: 'Артур после тенниса'
        },
        {
          questionId: 5,
          status: false,
          title: 'Белка'
        },
        {
          questionId: 6,
          status: false,
          title: 'Железный Дровосек'
        },
        {
          questionId: 6,
          status: false,
          title: 'Ивашка из Дворца пионеров'
        },
        {
          questionId: 6,
          status: false,
          title: 'Карлсон, который живёт на крыше'
        },
        {
          questionId: 6,
          status: true,
          title: 'Рон Уизли'
        },
        {
          questionId: 7,
          status: false,
          title: 'Васечкин'
        },
        {
          questionId: 7,
          status: false,
          title: 'Колокольчиков'
        },
        {
          questionId: 7,
          status: false,
          title: 'Сыроежкин'
        },
        {
          questionId: 7,
          status: true,
          title: 'Горшков'
        },
        {
          questionId: 8,
          status: true,
          title: 'Джоан Роулинг'
        },
        {
          questionId: 8,
          status: false,
          title: 'Жюль Верн'
        },
        {
          questionId: 8,
          status: false,
          title: 'Гермиона Грейнджер'
        },
        {
          questionId: 8,
          status: false,
          title: 'Дмитрий Емец'
        },
        {
          questionId: 9,
          status: false,
          title: 'Пуффендуй'
        },
        {
          questionId: 9,
          status: true,
          title: 'Гриффиндор'
        },
        {
          questionId: 9,
          status: false,
          title: 'Когтевран'
        },
        {
          questionId: 9,
          status: false,
          title: 'Слизерин'
        },
        {
          questionId: 10,
          status: false,
          title: 'Гарри Поттер и Тайная Комната'
        },
        {
          questionId: 10,
          status: false,
          title: 'Гарри Поттер и Роковые Мощи'
        },
        {
          questionId: 10,
          status: true,
          title: 'Гарри Поттер и Дары Смерти'
        },
        {
          questionId: 10,
          status: false,
          title: 'Гарри Поттер и Смертельные Гробницы'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};

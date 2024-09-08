const express = require("express");
const removeHeader = require("../middleware/removeHeader");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(removeHeader);
};

module.exports = serverConfig;

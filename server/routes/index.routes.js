const router = require("express").Router();
const themesRouter = require("./themes.routes");
const errorRouter = require("./error.routes");

router.use("/themes", themesRouter);
router.use("*", errorRouter);


module.exports = router;

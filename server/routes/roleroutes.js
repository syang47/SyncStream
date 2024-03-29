const checkAuth = require("../middlewares/checkAuth");
const controller = require("../actions/user-actions");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [checkAuth.checkToken], controller.userAccess);
    app.get('/api/test/mod', [checkAuth.checkToken, checkAuth.checkMod], controller.moderatorAccess);
    app.get('/api/test/admin', [checkAuth.checkToken, checkAuth.checkAdmin], controller.adminAccess);
};
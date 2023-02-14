import express from "express";
import HomeController from '../controllers/HomeController'
let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    router.get('/', HomeController.getPage);
    return app.use('/', router);
}
export default initWebRouter
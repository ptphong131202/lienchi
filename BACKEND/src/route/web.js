import express from "express";
import user from "../controllers/userController";
import category from "../controllers/categoryController";

let router = express.Router();

let initWebRoutes = ( app ) =>
{

    // login
    router.post( '/api/login', user.handleLogin ); // login

    // category
    router.post( '/api/post-category', category.handlePostCategory ); // add category
    router.get( '/api/get-category', category.getCategory ); // get category
    router.delete( '/api/delete-category', category.deleteCategory ); // delete

    return app.use( "/", router );
}

module.exports = initWebRoutes;
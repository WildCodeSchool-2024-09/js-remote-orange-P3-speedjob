import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import userActions from "./modules/user/userActions";

router.get("/api/user", userActions.browse);
router.get("/api/user/:id([0-9]+)", userActions.read);
router.post("/api/user", userActions.add);
router.put("/api/user/:id([0-9]+)", userActions.edit);
router.delete("/api/user/:id([0-9]+)", userActions.destroy);

import favoriteActions from "./modules/favorite/favoriteActions";

router.get("/api/favorite", favoriteActions.browse);
router.get("/api/favorite/:id([0-9]+)", favoriteActions.read);
router.post("/api/favorite", favoriteActions.add);
router.put("/api/favorite/:id([0-9]+)", favoriteActions.edit);
router.delete("/api/favorite/:id([0-9]+)", favoriteActions.destroy);

import companyActions from "./modules/company/companyActions";

router.get("/api/company", companyActions.browse);
router.get("/api/company/:id", companyActions.read);
router.post("/api/company", companyActions.add);
router.put("/api/company/:id", companyActions.edit);
router.delete("/api/company/:id", companyActions.destroy);

import roleActions from "./modules/role/roleActions";

router.get("/api/role", roleActions.browse);
router.get("/api/role/:id", roleActions.read);
router.post("/api/role", roleActions.add);
router.put("/api/role/:id", roleActions.edit);
router.delete("/api/role/:id", roleActions.destroy);

import adminActions from "./modules/admin/adminActions";

router.get("/api/admin", adminActions.browse);
router.get("/api/admin/:id", adminActions.read);
router.post("/api/admin", adminActions.add);
router.put("/api/admin/:id", adminActions.edit);
router.delete("/api/admin/:id", adminActions.destroy);

import annoncesActions from "./modules/annonces/annoncesActions";

router.get("/api/annonces", annoncesActions.browse);
router.get("/api/annonces/:id([0-9]+)", annoncesActions.read);
router.get("/api/annonces/search", annoncesActions.search);
router.post("/api/annonces", annoncesActions.add);
router.put("/api/annonces/:id([0-9]+)", annoncesActions.edit);
router.delete("/api/annonces/:id([0-9]+)", annoncesActions.destroy);

import articlesActions from "./modules/articles/articlesActions";

router.get("/api/articles", articlesActions.browse);
router.get("/api/articles/:id", articlesActions.read);
router.post("/api/articles", articlesActions.add);
router.put("/api/articles/:id", articlesActions.edit);
router.delete("/api/articles/:id", articlesActions.destroy);

import SignIn from "./modules/auth/auth";

router.post("/api/auth/signin", SignIn.SignIn);
router.post("/api/auth/signup", SignIn.SignUp);
router.get("/api/auth/check", SignIn.Check);

/* ************************************************************************* */

export default router;

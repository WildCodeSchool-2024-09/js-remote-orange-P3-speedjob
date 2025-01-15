import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import userActions from "./modules/user/userActions";

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);
router.post("/api/user", userActions.add);

import companyActions from "./modules/company/companyActions";

router.get("/api/company", companyActions.browse);
router.get("/api/company/:id", companyActions.read);
router.post("/api/company", companyActions.add);

import roleActions from "./modules/role/roleActions";

router.get("/api/role", roleActions.browse);
router.get("/api/role/:id", roleActions.read);
router.post("/api/role", roleActions.add);

import adminActions from "./modules/admin/adminActions";

router.get("/api/admin", adminActions.browse);
router.get("/api/admin/:id", adminActions.read);
router.post("/api/admin", adminActions.add);

import annoncesActions from "./modules/annonces/annoncesActions";

router.get("/api/annonces", annoncesActions.browse);
router.get("/api/annonces/:id", annoncesActions.read);
router.post("/api/annonces", annoncesActions.add);

import articlesActions from "./modules/articles/articlesActions";

router.get("/api/articles", articlesActions.browse);
router.get("/api/articles/:id", articlesActions.read);
router.post("/api/articles", articlesActions.add);

/* ************************************************************************* */

export default router;

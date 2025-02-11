import express from "express";
import multer from "multer";
const router = express.Router();

import annoncesActions from "./modules/annonces/annoncesActions";
import articlesActions from "./modules/articles/articlesActions";
import SignIn from "./modules/auth/auth";
import favoriteActions from "./modules/favorite/favoriteActions";

// Import des actions
import userActions from "./modules/user/userActions";

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (
  req: express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

// Définition des routes
router.get("/api/user", userActions.browse);
router.get("/api/user/:id([0-9]+)", userActions.read);
router.post("/api/user", userActions.add);
router.put("/api/user/:id([0-9]+)", userActions.edit);
router.delete("/api/user/:id([0-9]+)", userActions.destroy);

router.get("/api/favorite", favoriteActions.browse);
router.get("/api/favorite/:id([0-9]+)", favoriteActions.read);
router.post("/api/favorite/", favoriteActions.add);
router.put("/api/favorite/:id([0-9]+)", favoriteActions.edit);
router.delete("/api/favorite/:id([0-9]+)", favoriteActions.destroy);

router.get("/api/annonces", annoncesActions.browse);
router.get("/api/annonces/:id([0-9]+)", annoncesActions.read);
router.get("/api/annonces/search", annoncesActions.search);
router.post("/api/annonces", annoncesActions.add);
router.put("/api/annonces/:id([0-9]+)", annoncesActions.edit);
router.delete("/api/annonces/:id([0-9]+)", annoncesActions.destroy);

router.get("/api/articles", articlesActions.browse);
router.get("/api/articles/:id", articlesActions.read);
router.post("/api/articles", articlesActions.add);
router.put("/api/articles/:id", articlesActions.edit);
router.delete("/api/articles/:id", articlesActions.destroy);

router.post("/api/auth/signin", SignIn.SignIn);
router.post("/api/auth/signup", SignIn.SignUp);
router.get("/api/auth/check", SignIn.Check);

/* ************************************************************************* */

export default router;

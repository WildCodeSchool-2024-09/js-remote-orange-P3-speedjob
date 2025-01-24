import express from "express";
import multer from "multer";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";
import fs from "node:fs";
import databaseClient from "../database/client";
import { format } from "date-fns";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

interface CustomRequest extends express.Request {
  files?:
    | { [fieldname: string]: Express.Multer.File[] }
    | Express.Multer.File[];
}

router.post(
  "/",
  upload.fields([{ name: "cv" }, { name: "lm" }]),
  async (req: CustomRequest, res: express.Response): Promise<void> => {
    res.setHeader("X-Powered-By", "Express"); // Ajouter l'en-tête X-Powered-By
    try {
      const {
        birthdate,
        phoneNumber,
        streetNumber,
        streetName,
        postCode,
        city,
      } = req.body;

      if (
        !req.files ||
        (Array.isArray(req.files) && req.files.length === 0) ||
        (!Array.isArray(req.files) && (!req.files.cv || !req.files.lm))
      ) {
        res.status(400).json({ message: "Fichiers manquants" });
        return;
      }

      let cvFile: Express.Multer.File;
      let lmFile: Express.Multer.File;

      if (Array.isArray(req.files)) {
        cvFile = req.files.find(
          (file) => file.fieldname === "cv",
        ) as Express.Multer.File;
        lmFile = req.files.find(
          (file) => file.fieldname === "lm",
        ) as Express.Multer.File;
      } else {
        cvFile = (req.files.cv as Express.Multer.File[])[0];
        lmFile = (req.files.lm as Express.Multer.File[])[0];
      }

      const cvPath = path.join(
        "uploads",
        uuidv4() + path.extname(cvFile.originalname),
      );
      const lmPath = path.join(
        "uploads",
        uuidv4() + path.extname(lmFile.originalname),
      );

      // Move files to the final destination
      fs.renameSync(cvFile.path, cvPath);
      fs.renameSync(lmFile.path, lmPath);

      // Format the birthdate to YYYY-MM-DD
      const formattedBirthDate = format(new Date(birthdate), "yyyy-MM-dd");

      // Insert data into the database
      await databaseClient.query(
        "INSERT INTO candidate (birthdate, phone_number, street_number, street_name, postcode, city, cv_link, lm_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          formattedBirthDate,
          phoneNumber,
          streetNumber,
          streetName,
          postCode,
          city,
          cvPath,
          lmPath,
        ],
      );

      res.status(201).json({ message: "Fichiers téléchargés avec succès" });
    } catch (error) {
      console.error("Erreur lors du téléchargement des fichiers:", error);
      res
        .status(500)
        .json({ message: "Erreur lors du téléchargement des fichiers" });
    }
  },
);

export default router;

-- SQLBook: Code
-- MySQL Script generated by MySQL Workbench
-- Wed Jan 15 16:22:21 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `light_description` VARCHAR(100) NOT NULL,
  `complete_description` VARCHAR(250) NOT NULL,
  `siret_number` INT NOT NULL,
  `phone_number` INT NOT NULL,
  `street_number` INT NOT NULL,
  `street_name` VARCHAR(45) NOT NULL,
  `postcode` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `cedex_number` VARCHAR(45) NOT NULL,
  `raison_social` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `mydb`.`annonces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`annonces` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `creation_date` VARCHAR(45) NULL,
  `modification_date` VARCHAR(45) NULL,
  `light_description` VARCHAR(250) NOT NULL,
  `complete_description` VARCHAR(250) NOT NULL,
  `remuneration` VARCHAR(45) NOT NULL,
  `experience` VARCHAR(45) NOT NULL,
  `work` VARCHAR(45) NOT NULL,
  `field` VARCHAR(45) NOT NULL,
  `compagny_id` int unsigned null,
  foreign key (compagny_id) references compagny(id),
  `is_apply` TINYINT  NULL,
  `title` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Insert `mydb`.`annonces`
-- -----------------------------------------------------
INSERT INTO annonces
  (
    title,
    creation_date,
    light_description,
    complete_description,
    remuneration,
    experience,
    work,
    field,
    is_apply) 
VALUES
  (
    "Développeur Frontend React",
    "2025-01-10",
    "Développement d'interfaces utilisateur modernes.",
    "Nous recherchons un développeur frontend spécialisé en React pour concevoir et maintenir des interfaces utilisateur performantes et ergonomiques.",
    "45000-55000",
    "2-3 ans",
    "Temps plein",
    "Informatique et technologie",
    "0"
  ),
  (
    "Consultant en stratégie",
    "2025-01-09",
    "Accompagnement des entreprises dans leur transformation stratégique.",
    "Le consultant aura pour mission d'identifier les opportunités de croissance, d'optimiser les processus existants et de proposer des solutions innovantes.",
    "60000-80000",
    "5 ans",
    "Temps plein",
    "Conseil",
    "0"
  ),
  (
    "Designer UX/UI",
    "2025-01-08",
    "Conception d'expériences utilisateur engageantes.",
    "Vous collaborerez avec l'équipe produit pour concevoir des interfaces intuitives et visuellement attrayantes, en mettant l'accent sur l'utilisateur final.",
    "40000-50000",
    "3 ans",
    "Temps plein",
    "Design",
    "0"
  ),
  (
    "Chef de projet marketing",
    "2025-01-07",
    "Gestion de campagnes marketing multi-canaux.",
    "En tant que chef de projet, vous serez responsable de la planification, de l'exécution et de l'analyse des campagnes marketing pour divers clients.",
    "50000-65000",
    "4 ans",
    "Temps plein",
    "Marketing",
    "0"
  ),
  (
    "Technicien support informatique",
    "2025-01-06",
    "Assistance technique pour utilisateurs finaux.",
    "Nous recherchons un technicien pour résoudre les problèmes techniques des utilisateurs et maintenir le parc informatique de l'entreprise.",
    "30000-35000",
    "1-2 ans",
    "Temps plein",
    "Informatique et technologie",
    "0"
  ),
  (
    "Data Analyst",
    "2025-01-05",
    "Analyse de données pour la prise de décision.",
    "Votre rôle sera de collecter, analyser et interpréter des données pour aider à la prise de décision stratégique de l'entreprise.",
    "40000-60000",
    "2 ans",
    "Temps plein",
    "Analyse de données",
    "0"
  ),
  (
    "Ingénieur DevOps",
    "2025-01-04",
    "Automatisation et optimisation des processus de développement.",
    "Vous serez chargé de créer des pipelines CI/CD, d'améliorer l'infrastructure cloud et d'assurer la stabilité des applications déployées.",
    "55000-70000",
    "3-4 ans",
    "Temps plein",
    "Informatique et technologie",
    "0"
  ),
  (
    "Responsable des ressources humaines",
    "2025-01-03",
    "Gestion des talents et développement organisationnel.",
    "Vous serez responsable de la gestion des recrutements, de la formation et du développement des employés.",
    "50000-65000",
    "5 ans",
    "Temps plein",
    "Ressources humaines",
    "0"
  ),
  (
    "Comptable senior",
    "2025-01-02",
    "Gestion des finances et rapports financiers.",
    "Le comptable senior sera chargé de superviser les opérations comptables, de préparer les rapports financiers et d'assurer la conformité fiscale.",
    "45000-55000",
    "5 ans",
    "Temps plein",
    "Finance",
    "0"
  ),
  (
    "Responsable logistique",
    "2025-01-01",
    "Optimisation de la chaîne d'approvisionnement.",
    "Vous gérerez les opérations logistiques, planifierez les approvisionnements et optimiserez les coûts liés à la chaîne logistique.",
    "50000-60000",
    "4 ans",
    "Temps plein",
    "Logistique",
    "0"
  );
-- -----------------------------------------------------
-- Table `mydb`.`candidate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`candidate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `birthdate` DATETIME NOT NULL,
  `street_number` VARCHAR(250) NOT NULL,
  `street_name` VARCHAR(250) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `postcode` VARCHAR(45) NOT NULL,
  `cv_link` VARCHAR(255) NOT NULL,
  `lm_link` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(45) NOT NULL,
  `function` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `light_description` VARCHAR(100) NOT NULL,
  `compl_description` VARCHAR(255) NOT NULL,
  `picture` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `creation_date` DATETIME NOT NULL,
  `modification_date` DATETIME NULL,
  `isAdmin` TINYINT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

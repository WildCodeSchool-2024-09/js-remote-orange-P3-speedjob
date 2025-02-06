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
-- Table `mydb`.`annonces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`annonces` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `creation_date` VARCHAR(45) NOT NULL,
  `modification_date` VARCHAR(45) NULL,
  `light_description` VARCHAR(250) NOT NULL,
  `complete_description` VARCHAR(250) NOT NULL,
  `remuneration` VARCHAR(45) NOT NULL,
  `experience` VARCHAR(45) NOT NULL,
  `work` VARCHAR(45) NOT NULL,
  `field` VARCHAR(45) NOT NULL,
  `company` VARCHAR(45) NULL,
  `title` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `date` DATETIME NULL,
  `light_description` TEXT NOT NULL,
  `compl_description` TEXT NOT NULL,
  `picture` TEXT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `creation_date` DATETIME NULL,
  `modification_date` DATETIME NULL,
  `isAdmin` VARCHAR(45) NULL,
  `role`VARCHAR(45) NULL,
  `street_number` INT NULL,
  `street_name` VARCHAR(250) NULL,
  `postcode` INT NULL,
  `city` VARCHAR(45) NULL,
  `phone_number` INT NULL,
  `cv_link` VARCHAR(255) NULL,
  `lm_link` VARCHAR(255) NULL,
  `light_description` VARCHAR(100) NULL,
  `complete_description` VARCHAR(250) NULL,
  `siret_number` INT NULL,
  `cedex_number` VARCHAR(45) NULL,
  `raison_social` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table mydb.favorite
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.favorites (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  annonce_id INT NOT NULL,
  is_apply BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id));

-- -----------------------------------------------------
-- Table mydb.candidatures
-- -----------------------------------------------------
CREATE TABLE candidatures (
    user_id INT NOT NULL,
    annonce_id INT NOT NULL,
    PRIMARY KEY (user_id, annonce_id),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (annonce_id) REFERENCES annonces(id) ON DELETE CASCADE
);


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
    field)
VALUES
  (
    "Développeur Frontend React",
    "2025-01-10",
    "Développement d'interfaces utilisateur modernes.",
    "Nous recherchons un développeur frontend spécialisé en React pour concevoir et maintenir des interfaces utilisateur performantes et ergonomiques.",
    "45000-55000",
    "2-3 ans",
    "Temps plein",
    "Informatique et technologie"
  ),
  (
    "Consultant en stratégie",
    "2025-01-09",
    "Accompagnement des entreprises dans leur transformation stratégique.",
    "Le consultant aura pour mission d'identifier les opportunités de croissance, d'optimiser les processus existants et de proposer des solutions innovantes.",
    "60000-80000",
    "5 ans",
    "Temps plein",
    "Conseil"
  ),
  (
    "Designer UX/UI",
    "2025-01-08",
    "Conception d'expériences utilisateur engageantes.",
    "Vous collaborerez avec l'équipe produit pour concevoir des interfaces intuitives et visuellement attrayantes, en mettant l'accent sur l'utilisateur final.",
    "40000-50000",
    "3 ans",
    "Temps plein",
    "Design"
  ),
  (
    "Chef de projet marketing",
    "2025-01-07",
    "Gestion de campagnes marketing multi-canaux.",
    "En tant que chef de projet, vous serez responsable de la planification, de l'exécution et de l'analyse des campagnes marketing pour divers clients.",
    "50000-65000",
    "4 ans",
    "Temps plein",
    "Marketing"
  ),
  (
    "Technicien support informatique",
    "2025-01-06",
    "Assistance technique pour utilisateurs finaux.",
    "Nous recherchons un technicien pour résoudre les problèmes techniques des utilisateurs et maintenir le parc informatique de l'entreprise.",
    "30000-35000",
    "1-2 ans",
    "Temps plein",
    "Informatique et technologie"
  ),
  (
    "Data Analyst",
    "2025-01-05",
    "Analyse de données pour la prise de décision.",
    "Votre rôle sera de collecter, analyser et interpréter des données pour aider à la prise de décision stratégique de l'entreprise.",
    "40000-60000",
    "2 ans",
    "Temps plein",
    "Analyse de données"
  ),
  (
    "Ingénieur DevOps",
    "2025-01-04",
    "Automatisation et optimisation des processus de développement.",
    "Vous serez chargé de créer des pipelines CI/CD, d'améliorer l'infrastructure cloud et d'assurer la stabilité des applications déployées.",
    "55000-70000",
    "3-4 ans",
    "Temps plein",
    "Informatique et technologie"
  ),
  (
    "Responsable des ressources humaines",
    "2025-01-03",
    "Gestion des talents et développement organisationnel.",
    "Vous serez responsable de la gestion des recrutements, de la formation et du développement des employés.",
    "50000-65000",
    "5 ans",
    "Temps plein",
    "Ressources humaines"
  ),
  (
    "Comptable senior",
    "2025-01-02",
    "Gestion des finances et rapports financiers.",
    "Le comptable senior sera chargé de superviser les opérations comptables, de préparer les rapports financiers et d'assurer la conformité fiscale.",
    "45000-55000",
    "5 ans",
    "Temps plein",
    "Finance"
  ),
  (
    "Responsable logistique",
    "2025-01-01",
    "Optimisation de la chaîne d'approvisionnement.",
    "Vous gérerez les opérations logistiques, planifierez les approvisionnements et optimiserez les coûts liés à la chaîne logistique.",
    "50000-60000",
    "4 ans",
    "Temps plein",
    "Logistique"
  );

  -- -----------------------------------------------------
-- Insert `mydb`.`articles`
-- -----------------------------------------------------
INSERT INTO articles
  (title, date, light_description, compl_description, picture)
VALUES
(    
 "Les compétences clés en 2025",
 "2025-01-09",
 "Découvrez les compétences les plus recherchées par les employeurs dans un marché du travail en constante évolution.",
 "Alors que le marché du travail évolue rapidement, les compétences techniques et les compétences humaines sont de plus en plus valorisées. Les employeurs recherchent des talents capables de s'adapter, de collaborer efficacement et de maîtriser des outils technologiques avancés. Cet article explore les tendances et les besoins futurs du marché.",
 "https://img.freepik.com/photos-gratuite/femmes-affaires-travaillant_23-2148461377.jpg?t=st=1736455763~exp=1736459363~hmac=487e1cc25e4901769763f1ab02b2db9a7d45e6a070669e6862f90258600a7037&w=996"
),
(
 "Le télétravail : une révolution durable",
 "2024-12-15",
 "Analyse de l'impact du télétravail sur l'organisation des entreprises et les carrières professionnelles.",
 "Depuis la pandémie, le télétravail s'est imposé comme une solution viable pour de nombreuses entreprises. Cet article explore les avantages, les défis et les stratégies pour maximiser l'efficacité tout en maintenant un équilibre travail-vie personnelle.",
 "https://img.freepik.com/photos-gratuite/femmes-souriantes-coup-moyen-travaillant-ensemble_23-2149871321.jpg?t=st=1736455991~exp=1736459591~hmac=765605cc2586808f9c30bd67cd57406fd2e4243cb390559d10cc984a0766863c&w=996"
),
(
 "L'importance du bien-être au travail",
 "2024-11-20",
 "Pourquoi le bien-être au travail est-il devenu une priorité pour les entreprises modernes ?",
 "Le bien-être des employés est directement lié à leur productivité et à leur engagement. De nombreuses entreprises investissent dans des programmes de santé mentale, des espaces de travail ergonomiques et des politiques de flexibilité pour créer un environnement de travail sain et attractif.",
 "https://img.freepik.com/photos-gratuite/employe-bureau-africain-chemise-carreaux-debout-bras-croises-regardant-directeur-asiatique-portrait-interieur-developpeurs-web-independants-discutant-quelque-chose-utilisant-ordinateurs-portables_197531-3848.jpg?t=st=1736456009~exp=1736459609~hmac=0b7573e315ddcbca08bea015e8fe223cf02d597ad263992b922d090db40f62f4&w=996"
),
(
 "L'impact de l'intelligence artificielle sur l'emploi",
 "2025-01-05",
 "L'IA transforme les métiers et crée de nouvelles opportunités, mais soulève également des défis.",
 "L'intelligence artificielle modifie profondément le paysage professionnel. Cet article examine les secteurs les plus touchés, les emplois émergents et les compétences nécessaires pour rester pertinent dans un monde automatisé.",
 "https://img.freepik.com/photos-gratuite/personnes-utilisant-appareil-numerique-lors-reunion_23-2149085935.jpg?t=st=1736456029~exp=1736459629~hmac=58dfa19a8f6b1e4ac5c3648c98cea16e6c43c41f15b3a4efd1db300cc90f601c&w=996"
),
(
 "Les métiers de demain : tendances émergentes",
 "2025-01-02",
 "Quels seront les métiers les plus demandés dans les prochaines années ?",
 "Avec l'évolution technologique et les changements sociétaux, de nouveaux métiers apparaissent. Cet article explore les secteurs porteurs et les opportunités pour ceux qui souhaitent anticiper ces transformations.",
 "https://img.freepik.com/photos-gratuite/entreprise-concept-entrevue-emploi_1421-77.jpg?t=st=1736456041~exp=1736459641~hmac=1986a1bd4a6bb1993231763308101b36b2ef94e8b74ab2fd6a5b04233220cbc3&w=996"
),
(
 "La reconversion professionnelle : réussir son changement de carrière",
 "2024-12-30",
 "De plus en plus de personnes osent changer de voie professionnelle. Voici comment s'y préparer.",
 "La reconversion professionnelle peut être un défi, mais aussi une opportunité de croissance. Cet article offre des conseils pratiques pour identifier vos nouvelles aspirations et réussir cette transition avec succès.",
 "https://img.freepik.com/photos-gratuite/gros-plan-mains-masculines-feminines-tenant-table-feuilles-bureau-pour-smartphone-pour-ordinateur-portable_155003-36358.jpg?t=st=1736456072~exp=1736459672~hmac=97fa9672124f66001563b96bb8b81d7cd1cc041b2b5bad1673c0f1592e9a1845&w=996"
),
(
 "Le rôle des soft skills dans l'embauche",
 "2025-01-08",
 "Pourquoi les compétences interpersonnelles sont-elles devenues indispensables ?",
 "Dans un marché du travail compétitif, les soft skills jouent un rôle crucial. Cet article détaille pourquoi des qualités comme la communication, l'empathie et la créativité sont recherchées par les recruteurs.",
 "https://img.freepik.com/photos-gratuite/femme-affaires-africaine-tenue-decontractee-recherche-suite-tout-parlant-collegue-blonde-dans-verres-portrait-programmeur-asiatique-travaillant-ordinateur-portable-fille-bouclee-noire_197531-3702.jpg?t=st=1736456090~exp=1736459690~hmac=517245b9965ae69a3b5b9fe646b45399cc69b7b2582f07620ca6a2e505a37658&w=996"
),
(
 "L'influence de la diversité en entreprise",
 "2024-12-25",
 "Comment la diversité peut-elle renforcer la performance des équipes et l'innovation ?",
 "Les entreprises qui adoptent des politiques inclusives bénéficient souvent d'une meilleure performance globale. Cet article explore l'impact positif de la diversité et les moyens de la favoriser au sein des organisations.",
 "https://img.freepik.com/photos-gratuite/gros-plan-travail-equipe-o-nouveau-projet-dans-espace-coworking-redaction-idees-recherche-graphiques-tablette-ordinateur-portable-travail-equipe-concept-entreprise_176420-8307.jpg?t=st=1736456107~exp=1736459707~hmac=41675c0526d86b254bd70926bd8c12d61c02fbad0304d9e9d70f12f044925951&w=996"
),
(
 "La gestion des conflits au travail",
 "2024-12-20",
 "Des solutions pratiques pour résoudre les différends en milieu professionnel.",
 "Les conflits peuvent perturber la productivité et le moral des équipes. Cet article propose des stratégies éprouvées pour prévenir et gérer efficacement les désaccords au sein de l'entreprise.",
 "https://img.freepik.com/photos-gratuite/groupe-personnes-preparant-plan-affaires-dans-bureau_1303-15879.jpg?t=st=1736456123~exp=1736459723~hmac=f9187454e4d069414b24c571b037e14f12626a3578f3e518710c0765a0903312&w=996"
);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

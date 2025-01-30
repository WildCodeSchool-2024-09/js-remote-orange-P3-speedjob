function Blog() {
  const articles = [
    {
      id: 1,
      titre: "Les compétences clés en 2025",
      date: "2025-01-09",
      petiteDescription:
        "Découvrez les compétences les plus recherchées par les employeurs dans un marché du travail en constante évolution.",
      descriptionComplete:
        "Alors que le marché du travail évolue rapidement, les compétences techniques et les compétences humaines sont de plus en plus valorisées. Les employeurs recherchent des talents capables de s'adapter, de collaborer efficacement et de maîtriser des outils technologiques avancés. Cet article explore les tendances et les besoins futurs du marché.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/femmes-affaires-travaillant_23-2148461377.jpg?t=st=1736455763~exp=1736459363~hmac=487e1cc25e4901769763f1ab02b2db9a7d45e6a070669e6862f90258600a7037&w=996",
    },
    {
      id: 2,
      titre: "Le télétravail : une révolution durable",
      date: "2024-12-15",
      petiteDescription:
        "Analyse de l'impact du télétravail sur l'organisation des entreprises et les carrières professionnelles.",
      descriptionComplete:
        "Depuis la pandémie, le télétravail s'est imposé comme une solution viable pour de nombreuses entreprises. Cet article explore les avantages, les défis et les stratégies pour maximiser l'efficacité tout en maintenant un équilibre travail-vie personnelle.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/femmes-souriantes-coup-moyen-travaillant-ensemble_23-2149871321.jpg?t=st=1736455991~exp=1736459591~hmac=765605cc2586808f9c30bd67cd57406fd2e4243cb390559d10cc984a0766863c&w=996",
    },
    {
      id: 3,
      titre: "L'importance du bien-être au travail",
      date: "2024-11-20",
      petiteDescription:
        "Pourquoi le bien-être au travail est-il devenu une priorité pour les entreprises modernes ?",
      descriptionComplete:
        "Le bien-être des employés est directement lié à leur productivité et à leur engagement. De nombreuses entreprises investissent dans des programmes de santé mentale, des espaces de travail ergonomiques et des politiques de flexibilité pour créer un environnement de travail sain et attractif.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/employe-bureau-africain-chemise-carreaux-debout-bras-croises-regardant-directeur-asiatique-portrait-interieur-developpeurs-web-independants-discutant-quelque-chose-utilisant-ordinateurs-portables_197531-3848.jpg?t=st=1736456009~exp=1736459609~hmac=0b7573e315ddcbca08bea015e8fe223cf02d597ad263992b922d090db40f62f4&w=996",
    },
    {
      id: 4,
      titre: "L'impact de l'intelligence artificielle sur l'emploi",
      date: "2025-01-05",
      petiteDescription:
        "L'IA transforme les métiers et crée de nouvelles opportunités, mais soulève également des défis.",
      descriptionComplete:
        "L'intelligence artificielle modifie profondément le paysage professionnel. Cet article examine les secteurs les plus touchés, les emplois émergents et les compétences nécessaires pour rester pertinent dans un monde automatisé.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/personnes-utilisant-appareil-numerique-lors-reunion_23-2149085935.jpg?t=st=1736456029~exp=1736459629~hmac=58dfa19a8f6b1e4ac5c3648c98cea16e6c43c41f15b3a4efd1db300cc90f601c&w=996",
    },
    {
      id: 5,
      titre: "Les métiers de demain : tendances émergentes",
      date: "2025-01-02",
      petiteDescription:
        "Quels seront les métiers les plus demandés dans les prochaines années ?",
      descriptionComplete:
        "Avec l'évolution technologique et les changements sociétaux, de nouveaux métiers apparaissent. Cet article explore les secteurs porteurs et les opportunités pour ceux qui souhaitent anticiper ces transformations.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/entreprise-concept-entrevue-emploi_1421-77.jpg?t=st=1736456041~exp=1736459641~hmac=1986a1bd4a6bb1993231763308101b36b2ef94e8b74ab2fd6a5b04233220cbc3&w=996",
    },
    {
      id: 6,
      titre:
        "La reconversion professionnelle : réussir son changement de carrière",
      date: "2024-12-30",
      petiteDescription:
        "De plus en plus de personnes osent changer de voie professionnelle. Voici comment s'y préparer.",
      descriptionComplete:
        "La reconversion professionnelle peut être un défi, mais aussi une opportunité de croissance. Cet article offre des conseils pratiques pour identifier vos nouvelles aspirations et réussir cette transition avec succès.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/gros-plan-mains-masculines-feminines-tenant-table-feuilles-bureau-pour-smartphone-pour-ordinateur-portable_155003-36358.jpg?t=st=1736456072~exp=1736459672~hmac=97fa9672124f66001563b96bb8b81d7cd1cc041b2b5bad1673c0f1592e9a1845&w=996",
    },
    {
      id: 7,
      titre: "Le rôle des soft skills dans l'embauche",
      date: "2025-01-08",
      petiteDescription:
        "Pourquoi les compétences interpersonnelles sont-elles devenues indispensables ?",
      descriptionComplete:
        "Dans un marché du travail compétitif, les soft skills jouent un rôle crucial. Cet article détaille pourquoi des qualités comme la communication, l'empathie et la créativité sont recherchées par les recruteurs.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/femme-affaires-africaine-tenue-decontractee-recherche-suite-tout-parlant-collegue-blonde-dans-verres-portrait-programmeur-asiatique-travaillant-ordinateur-portable-fille-bouclee-noire_197531-3702.jpg?t=st=1736456090~exp=1736459690~hmac=517245b9965ae69a3b5b9fe646b45399cc69b7b2582f07620ca6a2e505a37658&w=996",
    },
    {
      id: 8,
      titre: "L'influence de la diversité en entreprise",
      date: "2024-12-25",
      petiteDescription:
        "Comment la diversité peut-elle renforcer la performance des équipes et l'innovation ?",
      descriptionComplete:
        "Les entreprises qui adoptent des politiques inclusives bénéficient souvent d'une meilleure performance globale. Cet article explore l'impact positif de la diversité et les moyens de la favoriser au sein des organisations.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/gros-plan-travail-equipe-o-nouveau-projet-dans-espace-coworking-redaction-idees-recherche-graphiques-tablette-ordinateur-portable-travail-equipe-concept-entreprise_176420-8307.jpg?t=st=1736456107~exp=1736459707~hmac=41675c0526d86b254bd70926bd8c12d61c02fbad0304d9e9d70f12f044925951&w=996",
    },
    {
      id: 9,
      titre: "La gestion des conflits au travail",
      date: "2024-12-20",
      petiteDescription:
        "Des solutions pratiques pour résoudre les différends en milieu professionnel.",
      descriptionComplete:
        "Les conflits peuvent perturber la productivité et le moral des équipes. Cet article propose des stratégies éprouvées pour prévenir et gérer efficacement les désaccords au sein de l'entreprise.",
      sourceImage:
        "https://img.freepik.com/photos-gratuite/groupe-personnes-preparant-plan-affaires-dans-bureau_1303-15879.jpg?t=st=1736456123~exp=1736459723~hmac=f9187454e4d069414b24c571b037e14f12626a3578f3e518710c0765a0903312&w=996",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nos articles</h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez nos dernièrs articles pour vous accompagner:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={article.sourceImage}
                alt={article.titre}
                className="w-full h-48 object-cover"
              />
              <p>{article.descriptionComplete}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

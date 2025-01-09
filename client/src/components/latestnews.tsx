function Latestnews() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Nos Articles</h2>

            {/* Article 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Article Image"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Titre de l'article 1
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac libero non neque fringilla interdum et eu justo.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire plus
              </a>
            </div>

            {/* Article 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Article Image"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Titre de l'article 2
              </h3>
              <p className="text-gray-600 mb-4">
                Vestibulum auctor nulla et purus convallis, ac malesuada neque
                volutpat. Etiam sed dui a arcu lobortis fermentum.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire plus
              </a>
            </div>

            {/* Article 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Article Image"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Titre de l'article 3
              </h3>
              <p className="text-gray-600 mb-4">
                Maecenas tempus felis at arcu suscipit, ac ullamcorper nunc
                tincidunt. Sed hendrerit justo et ante egestas aliquet.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire plus
              </a>
            </div>
          </div>

          {/* Section Dernières Nouvelles */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Dernières Nouvelles</h2>

            {/* News 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Nouvelle 1</h3>
              <p className="text-gray-600 mb-4">
                Nulla scelerisque nisi at dui posuere, sit amet pretium augue
                aliquet. Curabitur vitae mauris eget neque auctor luctus.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire la suite
              </a>
            </div>

            {/* News 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Nouvelle 2</h3>
              <p className="text-gray-600 mb-4">
                Vivamus efficitur eros quis nisl sollicitudin, vel efficitur
                augue egestas. Mauris consequat ipsum ut nisi feugiat facilisis.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire la suite
              </a>
            </div>

            {/* News 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Nouvelle 3</h3>
              <p className="text-gray-600 mb-4">
                Aliquam erat volutpat. Quisque suscipit, lacus eget tincidunt
                pharetra, augue arcu pretium eros, a tincidunt sapien nunc nec
                odio.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestnews;

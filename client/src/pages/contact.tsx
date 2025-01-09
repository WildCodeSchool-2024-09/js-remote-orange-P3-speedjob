import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  let handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      fName: "",
      lName: "",
      email: "",
      message: "",
    });
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col align-center py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Contactez-nous</h2>
          <p className="mt-4 text-xl text-gray-600">
            Vous n'avez pas trouver les réponses à vos questions sur notre site
            ou vous souhaitez nous contacter pour collaborer avec nous ?
            Ecrivez-nous:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Votre prénom:
                </label>
                <input
                  type="text"
                  id="fName"
                  name="fNname"
                  value={formData.fName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="lName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Votre nom:
                </label>
                <input
                  type="text"
                  id="lName"
                  name="lNname"
                  value={formData.lName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  votre Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Votre message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

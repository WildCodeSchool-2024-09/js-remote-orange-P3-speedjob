import { useState } from "react";

const Contact = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [contactData, setContactData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    setContactData({
      fName: fName,
      lName: lName,
      email: email,
      message: message,
    });
    alert("Votre message a bien été envoyé");
    contactData; // Déclaration fictive de la variable contactData pour passer Biome
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

        <div className="flex justify-center  gap-8">
          <form className="bg-white rounded-xl shadow-lg p-8 ">
            <div className="space-y-6 ">
              <div>
                <label
                  htmlFor="fName"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Votre prénom:
                </label>
                <input
                  type="text"
                  id="fName"
                  name="fNname"
                  value={fName}
                  onChange={(e) =>
                    setfName((e.target as HTMLInputElement).value)
                  }
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
                  value={lName}
                  onChange={(e) =>
                    setlName((e.target as HTMLInputElement).value)
                  }
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
                  value={email}
                  onChange={(e) =>
                    setEmail((e.target as HTMLInputElement).value)
                  }
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
                  value={message}
                  onChange={(e) =>
                    setMessage((e.target as HTMLTextAreaElement).value)
                  }
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                id="submit"
                onClick={handleSubmit}
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

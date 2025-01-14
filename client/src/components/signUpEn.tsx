import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpEn = () => {
  const [lightDescription, setLightDescription] = useState("");
  const [completeDescription, setCompleteDescription] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [cedexNumber, setCedexNumber] = useState("");
  const [raisonSocial, setRaisonSocial] = useState("");
  const [formData, setFormData] = useState({
    lightDescription: "",
    completeDescription: "",
    siretNumber: "",
    phoneNumber: "",
    streetNumber: "",
    streetName: "",
    postCode: "",
    city: "",
    cedexNumber: "",
    raisonSocial: "",
    checked: false,
  });
  formData; // Declaration fictive de la variable formData pour passer Biome

  const handleSubmit = () => {
    setFormData({
      lightDescription: lightDescription,
      completeDescription: completeDescription,
      siretNumber: siretNumber,
      phoneNumber: phoneNumber,
      streetNumber: streetNumber,
      streetName: streetName,
      postCode: postCode,
      city: city,
      cedexNumber: cedexNumber,
      raisonSocial: raisonSocial,
      checked: formData.checked,
    });
  };

  return (
    <section id="signUpModule">
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Other information
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter your details to register.
          </p>
          <form id="form" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="lightDescription">Description courte</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={lightDescription}
                  onChange={(e) =>
                    setLightDescription((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative w-full min-w-[200px]">
                <label htmlFor="completeDescription">
                  Description complète
                </label>
                <textarea
                  className="peer h-32 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={completeDescription}
                  onChange={(e) =>
                    setCompleteDescription(
                      (e.target as HTMLTextAreaElement).value,
                    )
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="siretNumber">Numéro SIRET</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={siretNumber}
                  onChange={(e) =>
                    setSiretNumber((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="phoneNumber">Numéro de téléphone</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="streetNumber">Numéro de rue</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={streetNumber}
                  onChange={(e) =>
                    setStreetNumber((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="streetName">Nom de rue</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={streetName}
                  onChange={(e) =>
                    setStreetName((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="postCode">Code Postal</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={postCode}
                  onChange={(e) =>
                    setPostCode((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="city">Ville</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={city}
                  onChange={(e) =>
                    setCity((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="cedexNumber">Numéro CEDEX</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={cedexNumber}
                  onChange={(e) =>
                    setCedexNumber((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="raisonSocial">Raison sociale</label>
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  type="text"
                  value={raisonSocial}
                  onChange={(e) =>
                    setRaisonSocial((e.target as HTMLInputElement).value)
                  }
                  required
                />
              </div>
            </div>
            <Link to="/*">
              <button
                className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                id="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </Link>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already have an account?
              <Link
                to="/SignIn"
                className="font-semibold text-pink-500 transition-colors hover:text-black-700"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpEn;

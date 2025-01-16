const Admin = () => {
  return (
    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
      <button
        type="button"
        className="py-1 px-4 bg-indigo-500 text-white focus:outline-none"
      >
        Utilisateur
      </button>
      <button type="button" className="py-1 px-4 focus:outline-none">
        Offres
      </button>
      <button type="button" className="py-1 px-4 focus:outline-none">
        Articles
      </button>
    </div>
  );
};

export default Admin;

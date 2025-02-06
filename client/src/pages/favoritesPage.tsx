import { useEffect, useState } from "react";
import SignInModule from "../components/register/signInModule";
import { useAuth } from "../hooks/useAuth";

type FavorisProps = {
  id: number;
  user_id: number;
  annonce_id: number;
};

function FavoritePage() {
  const { isAuth } = useAuth();
  const [favoris, setFavoris] = useState([] as FavorisProps[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/favorite`)
      .then((response) => response.json())
      .then((data: FavorisProps[]) => {
        setFavoris(data);
      });
  }, []);

  return isAuth ? (
    <section className="flex flex-col gap-8 align-center">
      <div>Here are your favorites:</div>
      {favoris.map((favori) => (
        <div id="Favorite" key={favori.id} className="flex flex-col gap-4">
          ID de l'annonce:
          <div>{favori?.user_id}</div>
          <div>{favori?.annonce_id}</div>
        </div>
      ))}
    </section>
  ) : (
    <div>
      <h1>Vous devez être connecté pour accéder à cette page</h1>
      <h1>Vous allez être redirigé vers la page de connexion</h1>
      <SignInModule />
    </div>
  );
}

export default FavoritePage;

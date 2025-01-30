import SignInModule from "../components/register/signInModule";
import { useAuth } from "../hooks/useAuth";

function FavoritePage() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      <div>Here are your favorites</div>
    </div>
  ) : (
    <div>
      <h1>Vous devez être connecté pour accéder à cette page</h1>
      <h1>Vous allez être redirigé vers la page de connexion</h1>
      <SignInModule />
    </div>
  );
}

export default FavoritePage;

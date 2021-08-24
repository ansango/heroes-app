import { useMemo } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroesById(heroId)[0], [heroId]);
  const router = useHistory();

  if (!hero) {
    return <Redirect to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (router.length <= 2) {
      router.push("/");
      return;
    }
    router.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="w-100 animate__animated animate__fadeInLeft"
          src={`../assets/heroes/${heroId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Alter ego: {alter_ego}</li>
          <li className="list-group-item">Publisher: {publisher}</li>
          <li className="list-group-item">
            First Appearance: {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-success" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

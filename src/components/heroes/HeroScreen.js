import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";
export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroesById(heroId);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div>
      <h1>HeroScreen</h1>
    </div>
  );
};

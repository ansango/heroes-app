import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Hero } from "./Hero";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="row">
      {heroes.map((hero) => (
        <div className="col-lg-6" key={hero.id}>
          <Hero {...hero} />
        </div>
      ))}
    </div>
  );
};

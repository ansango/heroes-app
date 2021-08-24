import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Hero } from "./Hero";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <div className="col-lg-6" key={hero.id}>
          <Hero {...hero} />
        </div>
      ))}
    </div>
  );
};

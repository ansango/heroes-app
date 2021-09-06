import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hook/useForm";
import { Hero } from "../heroes/Hero";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

export const SearchScreen = () => {
  const router = useHistory();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`?q=${searchText}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-lg-5 py-3">
          <form onSubmit={handleSearch} className="row">
            <div className="col-12">
              <input
                type="text"
                placeholder="Find a hero"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
            <div className="12">
              <button
                type="submit"
                className="btn btn-block btn-outline-primary my-2 w-100"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-7 py-3">
          {q === "" && (
            <div className="alert alert-info animate__animated animate__fadeIn">
              Search a Hero
            </div>
          )}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              Not Hero Found
            </div>
          )}
          {heroesFiltered.map((hero) => (
            <div className="animate__animated animate__fadeIn" key={hero.id}>
              <Hero {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

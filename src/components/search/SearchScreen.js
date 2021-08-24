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
        <div className="col-4">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-8">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <Hero key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import "./App.css";
import data from "./data.json";
function App() {
  const [countries, setCountries] = useState([data]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filterCountry = (e) => {
    const filter = e.target.value;
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    setCountries([filteredCountries]);
  };

  const filterRegion = (e) => {
    const filter = e.target.value;
    const filteredCountries = data.filter(
      (country) => country.region === filter
    );
    setCountries([filteredCountries]);
  }

  return (
    <>
      <header className="flex flex-row justify-between items center bg-very-dark-blue px-4 py-8">
        <h1 className="text-2xl text-white font-bold ml-5">
          Where in the world?
        </h1>
        <h1 className="text-md text-white font-semibold mr-5">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </h1>
      </header>
      <main className="bg-very-dark-blue-bg w-full  min-h-screen px-10">
        {/* filters */}
        <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:mb-0">
          <input
            type="text"
            name="country"
            id="country"
            className=" mt-10 h-14 sm:w-96 w-full rounded-md pl-10 bg-very-dark-blue text-white"
            placeholder="Search for a country"
            onKeyDown={filterCountry}
          />
          <select
            name="filter"
            id=""
            className="my-10 w-80 h-14 bg-very-dark-blue text-white"
            onChange={filterRegion}
          >
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        {/* countries */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {countries[0].map((country, index) => {
            return (
              <div
                key={index}
                className="bg-very-dark-blue rounded-md shadow-md mb-5"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-56 object-cover rounded-t-md"
                />
                <div className="p-6">
                  <h1 className="text-white font-bold text-lg mb-5">
                    {country.name}
                  </h1>
                  <p className="text-white">
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p className="text-white">
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </p>
                  <p className="text-white">
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;

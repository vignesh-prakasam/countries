import { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import iconArrow from "./assets/images/icon-down-arrow.svg";
function App() {
  const [countries, setCountries] = useState([data]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [currentRegion, setCurrentRegion] = useState("Filter by Region");
  const [currentCountry, setCurrentCountry] = useState(false);

  const showCountry = () => {
    return (
      <>
        <button
          className={`my-10 px-2 py-1 shadow-lg rounded-md w-20 ${
            isDarkMode ? "bg-very-dark-blue text-white" : "bg-white text-very-dark-blue-text"
          }`}
          onClick={() => {
            setCurrentCountry(false);
          }}
        >
          Back
        </button>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
          <div>
            <img
              src={currentCountry.flag}
              alt={currentCountry.name}
              className="w-full h-80 object-cover rounded-md"
            />
          </div>
          <div>
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-very-dark-blue-text"
              } font-bold text-2xl mb-5`}
            >
              {currentCountry.name}
            </h1>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Native Name:</span>{" "}
                  {currentCountry.nativeName}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Population:</span>{" "}
                  {currentCountry.population}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Region:</span>{" "}
                  {currentCountry.region}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {currentCountry.subregion}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Capital:</span>{" "}
                  {currentCountry.capital}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {currentCountry.topLevelDomain}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Currencies:</span>{" "}
                  {currentCountry.currencies[0].name}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-very-dark-blue-text"
                  }`}
                >
                  <span className="font-semibold">Languages:</span>{" "}
                  {currentCountry.languages.map((language) => language.name).join(", ")}
                </p>
              </div>
            </div>
            <div className="mt-10 flex sm:flex-row flex-col justify-start items-center gap-4">
              <p
                className={`text-left ${
                  isDarkMode ? "text-white" : "text-very-dark-blue-text"
                }`}
              >
                <span className="font-semibold text-left">Border Countries:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {currentCountry.borders.map((border, index) => {
                  return (
                    <button
                      key={index}
                      className={`${
                        isDarkMode ? "bg-very-dark-blue text-white" : "bg-white text-very-dark-blue-text"
                      } shadow-md px-4 py-1 rounded-md`}
                      onClick={() => {setCurrentCountry(data.find((country) => country.alpha3Code == border))}}
                    >
                      {data.find((country) => country.alpha3Code == border) ? data.find((country) => country.alpha3Code == border).name : ""}
                    </button>
                  );
                })}
                
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  const showCountries = () => {
    return (
      <>
        <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:mb-0">
          <div className="relative">
            <i className=" absolute top-12 left-4 fa-solid fa-magnifying-glass text-gray-400"></i>
            <input
              type="text"
              name="country"
              id="country"
              className={`shadow-lg mt-7 h-14 sm:w-96 w-full rounded-md pl-10 ${
                isDarkMode
                  ? "bg-very-dark-blue text-white"
                  : "text-very-dark-blue-text"
              }`}
              placeholder="Search for a country..."
              onKeyDown={filterCountry}
            />
          </div>
          <div
            onClick={() => setShowRegion(!showRegion)}
            className={`relative ${
              isDarkMode ? "bg-very-dark-blue" : "bg-white"
            } rounded-md p-5 w-60 h-14 my-7 flex items-center justify-between cursor-pointer`}
          >
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-very-dark-blue-text"
              } `}
            >
              {currentRegion}
            </h1>
            {isDarkMode ? (
              <img
                src={iconArrow}
                className="size-5"
                alt="arrow"
                style={{ filter: "invert(1)" }}
              />
            ) : (
              <img src={iconArrow} className="size-5" alt="arrow" />
            )}

            <div
              className={`${showRegion ? "" : "hidden"} absolute top-5 left-0 ${
                isDarkMode
                  ? "text-white bg-very-dark-blue"
                  : "bg-white text-very-dark-blue-text"
              }  rounded-lg my-10  w-60`}
            >
              <ul className="py-2 px-2 cursor-pointer ">
                <li
                  className={`py-2 pl-2 ${
                    isDarkMode
                      ? "hover:bg-very-dark-blue-bg"
                      : "hover:bg-very-light-gray"
                  }`}
                  onClick={() => setCurrentRegion("Africa")}
                >
                  Africa
                </li>
                <li
                  className={`py-2 pl-2 ${
                    isDarkMode
                      ? "hover:bg-very-dark-blue-bg"
                      : "hover:bg-very-light-gray"
                  }`}
                  onClick={() => setCurrentRegion("America")}
                >
                  America
                </li>
                <li
                  className={`py-2 pl-2 ${
                    isDarkMode
                      ? "hover:bg-very-dark-blue-bg"
                      : "hover:bg-very-light-gray"
                  }`}
                  onClick={() => setCurrentRegion("Asia")}
                >
                  Asia
                </li>
                <li
                  className={`py-2 pl-2 ${
                    isDarkMode
                      ? "hover:bg-very-dark-blue-bg"
                      : "hover:bg-very-light-gray"
                  }`}
                  onClick={() => setCurrentRegion("Europe")}
                >
                  Europe
                </li>
                <li
                  className={`py-2 pl-2 ${
                    isDarkMode
                      ? "hover:bg-very-dark-blue-bg"
                      : "hover:bg-very-light-gray"
                  }`}
                  onClick={() => setCurrentRegion("Oceania")}
                >
                  Oceania
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 ">
          {countries[0].map((country, index) => {
            return (
              <div
                onClick={() => {
                  setCurrentCountry(country);
                }}
                key={index}
                className={`${
                  isDarkMode ? "bg-very-dark-blue" : "bg-white"
                } rounded-md shadow-md mb-5 hover:cursor-pointer`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-56 object-cover rounded-t-md"
                />
                <div className="p-6">
                  <h1
                    className={`${
                      !isDarkMode ? "text-very-dark-blue-text" : "text-white"
                    } font-bold text-lg mb-5`}
                  >
                    {country.name}
                  </h1>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-very-dark-blue-text"
                    }`}
                  >
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-very-dark-blue-text"
                    }`}
                  >
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-very-dark-blue-text"
                    }`}
                  >
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const filterCountry = (e) => {
    const filter = e.target.value;
    setCurrentRegion("Filter by Region");
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    setCountries([filteredCountries]);
  };

  const filterRegion = () => {
    const filter =
      currentRegion == "Filter by Region"
        ? ""
        : currentRegion == "America"
        ? "Americas"
        : currentRegion;
    const filteredCountries = data.filter(
      (country) => country.region === filter || filter === ""
    );
    setCountries([filteredCountries]);
  };

  useEffect(() => {
    filterRegion();
  }, [currentRegion]);

  return (
    <>
      <header
        className={`drop-shadow-md  flex flex-row justify-between items-center  ${
          isDarkMode
            ? "bg-very-dark-blue text-white"
            : "bg-white text-very-dark-blue"
        } px-4 py-8`}
      >
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-very-dark-blue-text"
          } text-2xl font-bold ml-5`}
        >
          Where in the world?
        </h1>
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
          className={`text-md ${
            isDarkMode ? "text-white" : "text-very-dark-blue-text"
          } font-semibold mr-5`}
        >
          {isDarkMode ? (
            <i className="fa-solid fa-moon mr-1 px-1"></i>
          ) : (
            <i className="fa-regular fa-moon mr-1 px-1"></i>
          )}
          Dark Mode
        </button>
      </header>
      <main
        className={`${
          isDarkMode ? "bg-very-dark-blue-bg" : "bg-very-light-gray"
        }  w-full  min-h-screen px-10`}
      >
        {/* filters */}

        {currentCountry ? showCountry() : showCountries()}
      </main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import iconArrow from "./assets/images/icon-down-arrow.svg";
function App() {
  const [countries, setCountries] = useState([data]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [currentRegion, setCurrentRegion] = useState('Filter by Region');

  const filterCountry = (e) => {
    const filter = e.target.value;
    setCurrentRegion('Filter by Region');
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    setCountries([filteredCountries]);
  };

  const filterRegion = () => {
    const filter = currentRegion == 'Filter by Region' ? '' : (currentRegion == 'America' ? 'Americas' : currentRegion);
    const filteredCountries = data.filter(
      (country) => ((country.region === filter) || filter === '') 
    );
    setCountries([filteredCountries]);
  };

  useEffect(() => {
    filterRegion();
  },[currentRegion])

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
           <div onClick={() => setShowRegion(!showRegion)}  className="relative bg-very-dark-blue rounded-md p-5 w-60 h-14 my-10 flex items-center justify-between cursor-pointer">
            <h1 className="text-white font-semibold">{currentRegion}</h1>
            <img src={iconArrow} className={`size-5 ${ showRegion ? 'rotate-180' : ''}`} alt="arrow" style={{ filter: 'invert(1)', transition: 'transform 0.2s ease' }} />
            
            <div className={`${showRegion ? '' : 'hidden'} absolute top-5 left-0  text-white rounded-lg my-10 bg-very-dark-blue w-60`}>
              <ul className="pt-2  cursor-pointer ">
                <li className="py-2 pl-4 hover:bg-very-dark-blue-bg" onClick={() => setCurrentRegion("Africa")}>Africa</li>
                <li className="py-2 pl-4 hover:bg-very-dark-blue-bg" onClick={() => setCurrentRegion("America")}>America</li>
                <li className="py-2 pl-4 hover:bg-very-dark-blue-bg" onClick={() => setCurrentRegion("Asia")}>Asia</li>
                <li className="py-2 pl-4 hover:bg-very-dark-blue-bg" onClick={() => setCurrentRegion("Europe")}>Europe</li>
                <li className="py-2 pl-4 hover:bg-very-dark-blue-bg hover:rounded-b-lg" onClick={() => setCurrentRegion("Oceania")}>Oceania</li>
              </ul>
            </div>
          </div>

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

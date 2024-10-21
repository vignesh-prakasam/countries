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
      <header className={`flex flex-row justify-between items-center border-b-[1px] shadow-black ${isDarkMode ? 'bg-very-dark-blue text-white' : 'bg-white text-very-dark-blue'} px-4 py-8`}>
        <h1 className={`${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'} text-2xl font-bold ml-5`}>
          Where in the world?
        </h1>
        <button onClick={() => {setIsDarkMode(!isDarkMode)}} className={`text-md ${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'} font-semibold mr-5`}> {isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <main className={`${isDarkMode ? 'bg-very-dark-blue-bg': 'bg-very-light-gray'}  w-full  min-h-screen px-10`}>
        {/* filters */}
        <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:mb-0">
          <input
            type="text"
            name="country"
            id="country"
            className={`shadow-lg mt-10 h-14 sm:w-96 w-full rounded-md pl-10 ${isDarkMode ? 'bg-very-dark-blue text-white' : 'text-very-dark-blue-text'}`}
            placeholder="Search for a country"
            onKeyDown={filterCountry}
          />
          <div onClick={() => setShowRegion(!showRegion)}  className={`relative ${isDarkMode ? 'bg-very-dark-blue' : 'bg-white' } rounded-md p-5 w-60 h-14 my-10 flex items-center justify-between cursor-pointer`}>
            <h1 className={`${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'} `}>{currentRegion}</h1>
            {
              isDarkMode ?  <img src={iconArrow} className="size-5" alt="arrow" style={{ filter: 'invert(1)' }} />
              : <img src={iconArrow} className="size-5" alt="arrow"  />
            }
            
            
            <div className={`${showRegion ? '' : 'hidden'} absolute top-5 left-0 ${isDarkMode ? 'text-white bg-very-dark-blue' : 'bg-white text-very-dark-blue-text'}  rounded-lg my-10  w-60`}>
              <ul className="py-2 px-2 cursor-pointer ">
                <li className={`py-2 pl-2 ${isDarkMode ? 'hover:bg-very-dark-blue-bg' : 'hover:bg-very-light-gray'}`} onClick={() => setCurrentRegion("Africa")}>Africa</li>
                <li className={`py-2 pl-2 ${isDarkMode ? 'hover:bg-very-dark-blue-bg' : 'hover:bg-very-light-gray'}`} onClick={() => setCurrentRegion("America")}>America</li>
                <li className={`py-2 pl-2 ${isDarkMode ? 'hover:bg-very-dark-blue-bg' : 'hover:bg-very-light-gray'}`} onClick={() => setCurrentRegion("Asia")}>Asia</li>
                <li className={`py-2 pl-2 ${isDarkMode ? 'hover:bg-very-dark-blue-bg' : 'hover:bg-very-light-gray'}`} onClick={() => setCurrentRegion("Europe")}>Europe</li>
                <li className={`py-2 pl-2 ${isDarkMode ? 'hover:bg-very-dark-blue-bg' : 'hover:bg-very-light-gray'}`} onClick={() => setCurrentRegion("Oceania")}>Oceania</li>
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
                className={`${isDarkMode ? 'bg-very-dark-blue' : 'bg-white'} rounded-md shadow-md mb-5`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-56 object-cover rounded-t-md"
                />
                <div className="p-6">
                  <h1 className={`${!isDarkMode ? 'text-very-dark-blue-text' : 'text-white'} font-bold text-lg mb-5`}>
                    {country.name}
                  </h1>
                  <p className={`${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}`}>
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p className={`${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}`}>
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </p>
                  <p className={`${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}`}>
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

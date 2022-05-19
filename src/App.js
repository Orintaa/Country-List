import { useState, useEffect } from "react";
import Button from "./components/button/Button";
import CountryList from "./components/countryList/CountryList";
import "./App.css";
import {
  sortAscByName,
  sortDescByName,
} from "./components/functions/sortByName";

function App() {
  const LT_AREA = 65300;
  const OCEANIA_REGION = "Oceania";

  const [countryList, setCountryList] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [orderType, setOrderType] = useState("default");

  const fetchData = () => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortClickHandler = () => {
    console.log("old", sortType);
    let sortedCountryList = [];
    if (sortType === "") {
      setSortType("asc");
      setOrderType(sortType);
    }
    if (sortType === "asc") {
      setSortType("desc");
      setOrderType(sortType);
      sortedCountryList = sortAscByName(countryList);
    } else {
      setSortType("asc");
      setOrderType(sortType);
      sortedCountryList = sortDescByName(countryList);
    }

    setCountryList(sortedCountryList);
  };

  const filterAreaHandler = () => {
    const newCountryListByArea = countryList.filter(
      (country) => country.area < LT_AREA
    );
    setCountryList(newCountryListByArea);
  };

  const filterRegionHandler = () => {
    const newCountryListByRegion = countryList.filter(
      (country) => country.region === OCEANIA_REGION
    );
    setCountryList(newCountryListByRegion);
  };

  return (
    <div className="App">
      {console.log("return", sortType)}
      <h1>Country List</h1>
      <div className="button-block">
        <Button onClick={filterRegionHandler}>Oceania region</Button>
        <Button onClick={filterAreaHandler}>Smaller than Lithuania</Button>
        <Button onClick={sortClickHandler}>
          Sort by name: {`${orderType}`}
        </Button>
      </div>
      <CountryList countryList={countryList} />
    </div>
  );
}

export default App;

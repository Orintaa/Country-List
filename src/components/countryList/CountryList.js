import ListItem from "../listItem/ListItem";

const CountryList = (props) => {
  return props.countryList.map((country, index) => (
    <ListItem country={country} key={index} />
  ));
};

export default CountryList;

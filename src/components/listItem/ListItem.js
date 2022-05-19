import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="country-block">
      <div>
        <b>Country name:</b> {` ${props.country.name}`}
      </div>
      <div>
        <b>Country region:</b> {` ${props.country.region}`}
      </div>
      <div>
        <b>Country area:</b> {` ${props.country.area} km²`}
      </div>
    </div>
  );
};

export default ListItem;

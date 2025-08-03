import "./main.css";
const Main = ({
  name,
  email,
  phone,
  picture,
  location,
  registered,
  getData,
}) => {
  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div className="cardHeader">
          <img src={picture?.large} alt={name?.first} />
          <h1>
            {name?.first} {name?.last}
          </h1>
        </div>
        <div className="cardMiddle">
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>
            Location: {location?.city}, {location?.country}
          </h3>
        </div>
        <div className="cardFooter">
          <p> Age: {registered?.age}</p>
          <p>{new Date(registered?.date).toLocaleDateString()}</p>
        </div>
      </div>
      <button className="getData" onClick={getData}>
        Get New User{" "}
      </button>
    </div>
  );
};
export default Main;

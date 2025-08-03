import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
const PersonnelDetails = () => {
  /* const { first_name, last_name, avatar, email } = useLocation().state || {};*/
  const navigate = useNavigate();
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`, {
      headers: {
        "x-api-key": " reqres-free-v1",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setLoading(false)
          setError(true);
          throw new error("Somthing went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)})
      .catch((err) => setError(true));
  });
  if (error) {
    return <NotFound />;
  } 
  if (loading) {
    return <h3>Data Loading</h3>;
  } 
  if(!error && !loading) {
    return (
      <div className="personnelDetailsWrapper">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img src={person?.avatar} alt={id} />
        <p>{person?.email}</p>
        <div className="btnWrapper">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default PersonnelDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personnel = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const getPeople = async () => {
    try {
      const response = await axios("https://reqres.in/api/users", {
        headers: {
          "x-api-key": " reqres-free-v1",
        },
      });
      setPeople(response.data.data);
    } catch (error) {
      navigate("/not-found");    }
  };
  useEffect(() => {
    getPeople();
  });
  return (
    <div className="personnelWrapper">
      <h1>Personnel</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, avatar, first_name, last_name } = person;
          return (
            <div className="personnelCard" key={id}>
              <img src={avatar} alt={`${first_name} ${last_name}`} />
              <h2>{`${first_name} ${last_name}`}</h2>
              <button onClick={() => navigate(`/personnel/${id}`/*,{state:person}*/)}>
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;

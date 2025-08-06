import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const navigate = useNavigate();

  const { id, first_name, last_name, avatar, email } = user;
  //   const UserDetailNavigate = () => {
  //   navigate(`/user/${id}`);
  // };
  return (
    <div className="cardWrapper" onClick={() => navigate(`/user/${id}`)}>
      <h3>
        {first_name}
        {last_name}
      </h3>
      <img src={avatar} alt="avatar" />
      <p>{email}</p>
    </div>
  );
};

export default Card;

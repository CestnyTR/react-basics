import "./header.css"
const Header = ({ user }) => {
  return (
    <header className="headerWrapper">
      <img src={user?.picture?.large} alt={user?.name?.first} />
      <p>
        {user?.name?.first} {user?.name?.last}
      </p>
    </header>
  );
};
export default Header;

import Cards from "./Cards";
import langData from "../data/data";
const Main = () => {
  return (
    <main className="mainWrapper">
      {langData.map((lang) => (
        <Cards langObj={lang} key={lang.id} />
      ))}
    </main>
  );
};
export default Main;

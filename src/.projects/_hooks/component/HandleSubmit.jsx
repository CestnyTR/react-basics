import { useEffect, useRef } from "react";

const HandleSubmit = () => {
  const inputEl = useRef(null);

  const handleSubmit = () => {
    console.log(inputEl.current.value);
    inputEl.current.value = "";
    inputEl.current.focus();
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <form className="Form" onClick={handleSubmit}>
      <input
        type="text"
        className="searchBar"
        placeholder="Search..."
        ref={inputEl}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default HandleSubmit;

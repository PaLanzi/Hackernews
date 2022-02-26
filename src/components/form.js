import React from "react";
import { useRef } from "react";

function Form({ searchValue }) {
  const searchInput = useRef();
  const searchIt = (e) => {
    e.preventDefault();
    searchValue(searchInput.current.value);
  };
  return (
    <div>
      <form onSubmit={searchIt}>
        <label></label>
        <input
          ref={searchInput}
          type="text"
          placeholder="What you are looking for... press Enter"
        ></input>
      </form>
    </div>
  );
}

export default Form;

import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label>
          <b>==></b>
        </label>
        <input type="text" placeholder="What you are looking for..."></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;

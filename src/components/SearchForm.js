import React from "react";

function SearchForm(props) {
  console.log (props)
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <button onClick={props.handleClick}>
          Sort
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
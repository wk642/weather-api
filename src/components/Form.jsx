import React from "react";

function Form({ city, onChangeCity, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Please enter a city"
        type="text"
        value={city}
        onChange={onChangeCity}
        required
      />
      <br />
      <button type="submit">Submit</button>
      <br />
    </form>
  );
}

export default Form;
import React from "react";

function DsiplayJokesData({ joke }) {
  // checking to see if there is joke data
  // if there is no data then return null
  if (!joke) {
    return null;
  }
  return (
    <div>
      <h3>Joke</h3>
      <p>{joke}</p>
    </div>
  );
}

export default DsiplayJokesData;
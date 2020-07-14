import React from "react";

function Title() {
  console.log("Rendering Title");

  return (
    <div style={{ backgroundColor: 'beige'}}>
      <h2>Title component</h2>
      <p>Title component is wrapped in React.memo(Title)</p>
    </div>
  );
}

export default React.memo(Title);

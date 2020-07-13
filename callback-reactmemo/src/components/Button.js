import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);

  return (
    <div style={{ backgroundColor: 'aqua'}}>
      <h3>Button component</h3>
      <p>Button component is wrapped in React.memo(Button)</p>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);

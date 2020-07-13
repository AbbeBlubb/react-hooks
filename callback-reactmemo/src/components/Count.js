import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <>
			<h3>Count component</h3>
			<p>Count component is wrapped in React.memo(Count)</p>
      {text} - {count}
    </>
  );
}

export default React.memo(Count);

import React from "react";
import ComponentE from "./ComponentE";

function ComponentC() {
  return (
    <>
			<p>ComponentC, renders ComponentE:</p>
      <ComponentE />
    </>
  );
}

export default ComponentC;

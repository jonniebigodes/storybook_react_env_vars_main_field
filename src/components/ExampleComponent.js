import React from "react";

export const ExampleComponent = ({ secret, anotherSecret }) => {
  return (
    <div>
      <h1>I'm the Example Component</h1>
      <p>I have the following value in the env var: {secret}</p>
      <p>
        I have the following value in the the other env var: {anotherSecret}
      </p>
    </div>
  );
};

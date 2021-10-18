import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const naKlik = () => {
    title = "novo";
    console.log(title);
    title = "novo";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={naKlik}>
        Klikni me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

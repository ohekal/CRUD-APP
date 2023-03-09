import React, { cloneElement } from "react";

const Loading = ({ loading, error, children }) => {
  const cloneButton = cloneElement(children, { disabled: true }, "loading....");
  const typeButton = children?.type?.render?.displayName;
  if (typeButton === "Button") {
    return (
      <>
        {loading ? (
          cloneButton
        ) : error ? (
          <>
            children
            <br />
            <p>{error}</p>
          </>
        ) : (
          children
        )}
      </>
    );
  }
  return (
    <>
      {loading ? (
        <p>loading please wait...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;

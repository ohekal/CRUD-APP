import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <div id="error-page " className="mt-5 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Button
          variant="link"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Go back{" "}
        </Button>
      </div>
    </Container>
  );
}

export default Error;

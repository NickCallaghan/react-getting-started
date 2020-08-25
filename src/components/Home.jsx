import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Home = (props) => {
  const user = props.user;
  return (
    <div>
      <Alert variant="success">Welcome to the site, {user}</Alert>
      <Button>Log Out</Button>
    </div>
  );
};
export default Home;

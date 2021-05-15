import React from "react";

function Table(props) {
  const userData = props.users.map((user) => {
    return <div>{user.name.first}</div>;
  });
  console.log("This is the userData after returning as a div", userData);
  return <div className="container"></div>;
}

export default Table;
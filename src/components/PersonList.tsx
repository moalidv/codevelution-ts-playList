import React from "react";
type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = ({ names }: personListProps) => {
  return (
    <div>
      {names.map((name) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;

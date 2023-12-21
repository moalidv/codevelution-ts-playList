import React from "react";

type personProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = ({ name: { first, last } }: personProps) => {
  return (
    <div>
      {first} {last}
    </div>
  );
};

export default Person;

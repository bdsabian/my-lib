import * as React from "react";

interface GreeterProps {
  name: string;
}
const Greeter = ({ name }: GreeterProps) => {
  return <span>Hello {name}</span>;
};

export default Greeter;

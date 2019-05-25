import * as React from "react";
import * as renderer from "react-test-renderer";

import Counter from "./Counter";

test("Counter shows the count", () => {
  const component = renderer.create(<Counter initialCount={2} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

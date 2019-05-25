import * as React from "react";
import * as renderer from "react-test-renderer";

import Greeter from "./Greeter";

test("Greeter shows the name", () => {
  const component = renderer.create(<Greeter name="Brendon" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import Button from "../src/Button";
import renderer from "react-test-renderer";

describe("Button", () => {
  describe("Button Component rendered", () => {
    it("should match to snapshot", () => {
      const testcomponent = renderer.create(<Button text={"="} />).toJSON();
      expect(testcomponent).toMatchSnapshot();
    });
  });
});

import React from "react";
import Screen from "../src/Screen";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({ dispatchReducer: { output: "0" } });

describe("Screen Component", () => {
  describe("Screen Rendered", () => {
    it("should match to snapshot", () => {
      const testcomponent = renderer
        .create(
          <Provider store={store}>
            <Screen />
          </Provider>
        )
        .toJSON();
      expect(testcomponent).toMatchSnapshot();
    });
  });
});

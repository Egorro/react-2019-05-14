import React from "react";
import Restaurant from "./restaurant";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Restaurant/>", () => {
  it("open review list", () => {
    const wrapper = mount(<Restaurant />);
    console.log(
      wrapper.find(
        'data-automation-id="toggle-reviews-a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"'
      )
    );
  });
});

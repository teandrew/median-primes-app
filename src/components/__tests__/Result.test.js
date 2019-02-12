import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Result from "../Result";

const mockPrimes = [2, 3];

describe("Results Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Result medianPrimes={mockPrimes} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

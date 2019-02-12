import React from "react";
import App from "../App";
import axios from "axios";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

jest.mock("axios");

describe("App Component", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should respond to change event and change state", () => {
    const wrapper = shallow(<App />);

    wrapper.find("#limit").simulate("change", {
      target: { name: "limit", value: "10" }
    });

    expect(wrapper.state("limit")).toEqual("10");
  });

  it("renders Results when medianPrimes change", () => {
    const wrapper = mount(<App />);

    wrapper.setState({
      medianPrimes: [2]
    });

    expect(wrapper.find("p").text()).toEqual("The median prime(s): 2");
  });

  it("should change median primes state", () => {
    const wrapper = shallow(<App />);

    axios.get.mockImplementation(() => Promise.resolve({ data: [2, 3] }));

    return wrapper
      .instance()
      .getMedianPrimes(3)
      .then(() => {
        expect(wrapper.state("medianPrimes")).toEqual([2, 3]);
      });
  });

  it("should set error message on error", () => {
    const wrapper = shallow(<App />);

    axios.get.mockImplementation(() =>
      Promise.reject({
        response: { data: { message: "Limit must be a number" } }
      })
    );

    return wrapper
      .instance()
      .getMedianPrimes("abcd")
      .then(() => {
        expect(wrapper.state("error")).toEqual("Limit must be a number");
      });
  });
});

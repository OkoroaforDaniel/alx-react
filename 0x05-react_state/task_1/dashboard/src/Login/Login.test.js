import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should disable the submit button by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toEqual(true);
  });

  it("should enable the submit button after changing email and password inputs", () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[name="email"]').simulate("change", {
      target: { name: "email", value: "test@example.com" },
    });
    wrapper.find('input[name="password"]').simulate("change", {
      target: { name: "password", value: "testpassword" },
    });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toEqual(false);
  });
});
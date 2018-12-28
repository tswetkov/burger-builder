import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("Should render two <NavigationItems /> elements if not authentificated ", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("Should render three <NavigationItems /> elements if authentificated ", () => {
    wrapper.setProps({
      isAuthenticated: true
    });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should an exact logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavigationItem link="/logout">Выйти</NavigationItem>)).toEqual(true);
  });
});
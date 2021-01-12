import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Button from "components/Button";

Enzyme.configure({ adapter: new Adapter() });

it("renders the heading", () => {
    const result = shallow(<Button name="name" />);
    expect(result).toBeTruthy();
});

let test = "name"
console.log(test)
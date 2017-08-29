import React from 'react';
//import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Time from "../src/Time";


describe('<Time />', () => {
  //sinon.spy(Time.prototype, 'componentDidMount');
  it('Component has class "Timer"', () => {
    //const wrapper = mount(<Time name="GOT"/>);
    const wrapper = shallow(<Time name="GOT" />);
    expect(wrapper.hasClass("timer")).to.equal(true);
    //expect(test.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Time from "../../src/component/Time";

describe('<Time />', () => {
  //Shallow rendering Test
  it('Component has class "Timer"', () => {
    const wrapper = shallow(<Time name="GOT" />);
    expect(wrapper.hasClass("timer")).to.equal(true);
  });

  //Full DOM rendering Test
  it('calls componentDidMount"', () => {
    sinon.spy(Time.prototype, 'componentDidMount');
    const wrapper = mount(<Time name="GOT"/>); 
    const component: any = Time.prototype;
    expect(component.componentDidMount.calledOnce).to.equal(true);
    //expect(wrapper.find('.timer').length).to.equal(1);
  });
});

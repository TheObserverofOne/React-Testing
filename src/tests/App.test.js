import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it(`renders a div with the className 'component-app'`, () => {
    const component = shallow(<App />);
    expect(component.find('.component-app')).toHaveLength(1);
  });
  it(`has two elements in the '.component-app' div`, () => {
    const component = shallow(<App />);
        expect(component.find('.component-app').children()).toHaveLength(2);
  });
  it(`has a state with properties 'total', 'next', 'none' which values are all 'null'`, () => {
    const component = shallow(<App />);
    expect(component.state().total).toEqual("0");
    expect(component.state().next).toEqual(null);
    expect(component.state().operation).toEqual(null);
  });
});
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should show all 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("div").children("Button")).toHaveLength(19);
  });
   it(`renders a div with the className 'component-panel'`, () => {
    const component = shallow(<Panel />);
    expect(component.find('.component-panel')).toHaveLength(1);
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import { MDBDataTable } from 'mdbreact';

configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('renders the Users list Table', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(MDBDataTable)).to.have.length(1);
  });
});
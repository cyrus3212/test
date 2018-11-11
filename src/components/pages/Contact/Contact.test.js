import React from 'react';
import { expect } from 'chai';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';
import ContactInfo from './widgets/ContactInfo';
import ContactForm from './widgets/ContactForm';

configure({ adapter: new Adapter() });

describe('Contact Component', () => {
  it('renders the Contact Form', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(ContactForm)).to.have.length(1);
  });

  it('renders the Contact Information', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(ContactInfo)).to.have.length(1);
  });
});
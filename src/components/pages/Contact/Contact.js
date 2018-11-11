import React, { Component } from 'react';
import { Card } from 'mdbreact';

// Widgets
import ContactInfo from './widgets/ContactInfo';
import ContactForm from './widgets/ContactForm';

// Reusable components
import BlockText from '../../reusable/BlockText';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="container">
            <BlockText
                title="Contact Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing"
            />
            <Card>
                <div className="row">
                    <div className="col-8 contact-form">
                        <ContactForm />
                    </div>
                    <div className="col-4 contact-info">
                        <ContactInfo/>
                    </div>
                </div>
            </Card>
        </div>
    );
  }
}

export default Contact;

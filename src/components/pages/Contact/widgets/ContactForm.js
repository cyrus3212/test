import React from 'react';
import { Button, Input } from 'mdbreact';
import '../_contact.css';

const ContactInfo = () => {
    return (
        <div className="contact-form">
            <h4 className="card-title"><strong>Please provide these informations</strong></h4>
            <Input label="Enter Name" icon="user" />
            <Input label="Enter Email" icon="envelope" />
            <Input type="textarea" rows="2" label="Your message" icon="pencil"/>
            <Button href="#">Send</Button>
        </div>
    );
}

export default ContactInfo;

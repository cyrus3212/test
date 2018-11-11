import React from 'react';
import '../_contact.css';

const ContactInfo = () => {
    return (
        <div className="card-body card-body-cascade text-center">
            <div className="upper-contact-info">
                <h4 className="card-title"><strong>John Doe</strong></h4>
                <h5 className="blue-text pb-2"><strong>CEO</strong></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
            </div>
            <div className="lower-contact-info">
                <span className="px-2 fa-lg li-ic"><i className="fa fa-linkedin"></i></span>
                <span className="px-2 fa-lg tw-ic"><i className="fa fa-twitter"></i></span>
                <span className="px-2 fa-lg fb-ic"><i className="fa fa-facebook"></i></span>
            </div>
        </div>
    );
}

export default ContactInfo;

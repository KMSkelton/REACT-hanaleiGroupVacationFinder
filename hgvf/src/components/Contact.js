import React from 'react';

const Contact = (props) => (
    <div className="contact">
      <div className="container">
        <h1 className="contact_title">{props.title}</h1>
        <p>This will be the contact form</p>
      </div>
    </div>
  )

Contact.defaultProps = {
  title: 'Contact Form',
  subtitle: "Large Group Vacation Rentals in the land called Hanalei"
}


export default Contact
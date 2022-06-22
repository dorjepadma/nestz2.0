import React from 'react';

import { Button } from 'react-bootstrap'




const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent('Inquiring about Nestz')}`;
  // if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)} ${window.location.href}}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Mailer = () => {
  
  return (

    <Mailto
      className='emailLink'
      variant="contained"
      size="large"
      color="primary"
      target="_top"
      rel="noopener noreferrer"
      email="NestzInc@gmail.com"
      subject='Nestz Inquiry '
      body=' '
    >
      <Button variant="primary" className='emailLink' style={{ fontSize: '1rem' }}>
        Email Nestz
                  </Button>
    </Mailto>
  )
}

export default Mailer;

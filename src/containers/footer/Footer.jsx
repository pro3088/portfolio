import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div className='portf__footer'>
      <div className='portf__footer-info'>
        <h2>Let's <span>talk</span> something special</h2>
        <button type='button'> <a href="http://www.linkedin.com/in/rotimi-abayomi/">Let's Talk</a> </button>
      </div>
      <div className='portf__footer-message'>
        <h4>Say Hi!</h4>
        <div className='portf__footer-message_links'>
          <div className='portf__footer-message_links-box'>
            <p><a href="mailto:rotimiabayomi123@gmail.com">Email</a></p>
          </div>
          <div className='portf__footer-message_links-box'>
            <p><a href="https://www.linkedin.com/in/rotimi-abayomi/">Linkedln</a></p>
          </div>
          <div className='portf__footer-message_links-box'>
            <p><a href="https://twitter.com/matrix_coding">Twitter</a></p>
          </div>
        </div>
      </div>
      <div className='portf__footer-line'></div>
      <p>Copyright 2022</p>
    </div>
  )
}

export default Footer

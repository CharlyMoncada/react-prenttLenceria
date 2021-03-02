import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons'
import "./_footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list" id="footer__list">
        <div className='footerLink'>
          <FontAwesomeIcon icon={faInstagram} />
          <a className='footerLink__url' href="https://www.instagram.com">Instagram</a>
        </div>
        <div className='footerLink'>
          <FontAwesomeIcon icon={faFacebook} />
          <a className='footerLink__url' href="https://www.facebook.com">Facebook</a>
        </div>
        <div className='footerLink'>
          <FontAwesomeIcon icon={faTwitter} />
          <a className='footerLink__url' href="https://twitter.com/?lang=es">Twitter</a>
        </div>
        <div className='footerLink'>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a className='footerLink__url' href="https://api.whatsapp.com/send?phone=005491151038731">Whatsapp</a>
        </div>
        <div className='footerLink'>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <a className='footerLink__url' href="mailto:lenceriaprentt@gmail.com">Email</a>
        </div>
      </ul>
    </footer>
  );
};

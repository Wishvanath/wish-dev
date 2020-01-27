import React,{Fragment} from 'react';
import './footer.style.scss';
const Footer = () => {
  var CurrentYear = new Date().getFullYear();
  //return main component
  return (
    <Fragment>
      <footer className='bg-dark footer-section'>
        <div className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h5 className='text-light'>Email</h5>
                <p className='text-white paragraph-lg font-secondary'>
                  anandwishvanath@gmail.com
                </p>
              </div>
              <div className='col-md-4'>
                <h5 className='text-light'>Phone</h5>
                <p className='text-white paragraph-lg font-secondary'>
                  +91 9939940266 / +91 8903526657
                </p>
              </div>
              <div className='col-md-4'>
                <h5 className='text-light'>Address</h5>
                <p className='text-white paragraph-lg font-secondary'>
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-top text-center border-dark py-5'>
          <p className='mb-0 text-light'>
            Copyright © {CurrentYear} by Wish Dev : anandwishvanath@gmail.com
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

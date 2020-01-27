import React, {Fragment} from 'react';
import './body-education.style.scss';
const BodyEducation = () => {
  //return main component
  return (
    <Fragment>
      {/* <!-- education --> */}
      <section className='section position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-title'>Education</h2>
            </div>
            <div className='col-lg-6 col-md-6 mb-80'>
              <div className='d-flex'>
                <div className='mr-lg-5 mr-3'>
                  <i className='fas fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                </div>
                <div>
                  <p className='text-dark mb-1'>2018</p>
                  <h4>Masters in Computer Science</h4>
                  <p className='mb-0 text-light'>
                    School of Engineering & Technology
                  </p>
                  <p className='mb-0 text-light'>(Pondicherry University)</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-80'>
              <div className='d-flex'>
                <div className='mr-lg-5 mr-3'>
                  <i className='fas fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                </div>
                <div>
                  <p className='text-dark mb-1'>2014</p>
                  <h4>Bechlors in Computer Science</h4>
                  <p className='mb-0 text-light'>T.N.B College</p>
                  <p className='mb-0 text-light'>(T.M.B.U)</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-80'>
              <div className='d-flex'>
                <div className='mr-lg-5 mr-3'>
                  <i className='fas fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                </div>
                <div>
                  <p className='text-dark mb-1'>2000</p>
                  <h4>Senior Secondary Certificat</h4>
                  <p className='mb-0 text-light'>Marwari College, Bhagalpur</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-80'>
              <div className='d-flex'>
                <div className='mr-lg-5 mr-3'>
                  <i className='fas fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block'></i>
                </div>
                <div>
                  <p className='text-dark mb-1'>2008</p>
                  <h4>Secondary School Certificate</h4>
                  <p className='mb-0 text-light'>High School Basantrai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bg image --> */}
        <img
          className='img-fluid edu-bg-image w-100'
          src='images/education-bg.png'
          alt='bg-layer'
        />
      </section>
      {/* <!-- /education --> */}
    </Fragment>
  );
};

export default BodyEducation;

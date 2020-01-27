import React, { Fragment } from 'react';
import './body-experience.style.scss';
const BodyExperience = () => {
  return (
    <Fragment>
      <div className='experience_wrapper'>
        <section className='section'>
          <div className='container'>
            <div className='row justify-content-around'>
              <div className='col-lg-12 text-center'>
                <h3 className='section-title'>Experience</h3>
              </div>

              <div className='col-lg-3 col-md-4 text-center'>
                <img src='images/icon-1.png' alt='icon' />
                <p className='mb-0 mt-3'>Jan 2018 - May 2018</p>
                <h4>Software Developer(Intern)</h4>
                <h6 className='text-light'>PALS</h6>
              </div>

              <div className='col-lg-3 col-md-4 text-center'>
                <img src='images/icon-2.png' alt='icon' />
                <p className='mb-0 mt-3'>May 2018 - Oct 2019</p>
                <h4>Software Engineer</h4>
                <h6 className='text-light'>SKY MAP GLOBAL</h6>
              </div>

              <div className='col-lg-3 col-md-4 text-center'>
                <img src='images/icon-3.png' alt='icon' />
                <p className='mb-0 mt-3'>Nov 2019 - Present</p>
                <h4>Software Engineer</h4>
                <h6 className='text-light'>AGRITREKK TECHNOLOGIES</h6>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default BodyExperience;

import React, { Fragment } from 'react';
import './body-portfolio.style.scss';
const BodyPortfolio = () => {
  return (
    <Fragment>
      <section className='section' id='portfolio_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3 className='section-title'>Portfolio</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-4'>
              <div className='position-relative rounded hover-wrapper'>
                <img
                  src='images/item-2.png'
                  alt='portfolio'
                  className='img-fluid rounded w-100'
                />
                <div className='hover-overlay'>
                  <div className='hover-content'>
                    <a className='btn btn-light btn-sm' href='project-single.html'>
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='position-relative rounded hover-wrapper'>
                <img
                  src='images/item-2.png'
                  alt='portfolio'
                  className='img-fluid rounded w-100'
                />
                <div className='hover-overlay'>
                  <div className='hover-content'>
                    <a className='btn btn-light btn-sm' href='project-single.html'>
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='position-relative rounded hover-wrapper'>
                <img
                  src='images/item-2.png'
                  alt='portfolio'
                  className='img-fluid rounded w-100'
                />
                <div className='hover-overlay'>
                  <div className='hover-content'>
                    <a className='btn btn-light btn-sm' href='project-single.html'>
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BodyPortfolio;

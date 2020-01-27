import React , {Fragment}from 'react';
import {Link} from 'react-router-dom';
import './body-services.style.scss';
const BodyServices = () => {
  return (
    <Fragment>
      <section className='section' id="freelance_services">
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3 className='section-title'>What I can do ..?</h3>
            </div>
            <div className='col-md-4 mb-4 mb-md-0'>
              <div className='card hover-shadow shadow'>
                <div className='card-body text-center px-4 py-5'>
                  <i className='fas fa-sitemap icon mb-5 d-inline-block'></i>
                  <h4 className='mb-4'>Designing</h4>
                  <p>
                   I have worked on website Designing for the software companies and Educational Organisation, Visit my work collections
                  </p>
                  <Link to= "/design">
                    <button className="btn btn_workcollections">Creative Design</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4 mb-md-0'>
              <div className='card active-bg-primary hover-shadow shadow'>
                <div className='card-body text-center px-4 py-5'>
                  <i className='fas fa-laptop-code icon mb-5 d-inline-block'></i>
                  <i className=''></i>
                  <h4 className='mb-4'>Development</h4>
                  <p>
                    I am a full stack web developer with much experience in both front-end and back-end development and especially, I am most experienced in JS Framework 
                    <br/>(React.js & Node.js)
                  </p>
                  <button className="btn btn_workcollections">Dev Collctions</button>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4 mb-md-0'>
              <div className='card hover-shadow shadow'>
                <div className='card-body text-center px-4 py-5'>
                  <i className='fab fa-docker icon mb-5 d-inline-block'></i>
                  <h4 className='mb-4'>Debuging</h4>
                  <p>
                    Sometimes I used to envolve myself in-to problem identification, validation, finding bugs and fixing it.
                  </p>
                  <button className="btn btn_workcollections">Coding Challenges</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BodyServices;

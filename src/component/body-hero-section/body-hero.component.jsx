import React, {Fragment} from 'react';
import './body-hero.style.scss';
import { Link } from 'react-router-dom';
const BodyHero = () => {

    //social media link 
    const facebookClickHandler =(event) =>{
        event.preventDefault()
        window.open('https://www.facebook.com/profile.php?id=100009569210427')
    }
    const twitterClickHandler = (event) => {
        event.preventDefault()
        window.open('https://twitter.com/WishvanathSah')
    }
    const googleplusClickHandler =(event) => {
        event.preventDefault()
        window.open("http://localhost:3000/page-not-found")
    }
    const gitClickHandler =(event) => {
        event.preventDefault()
        window.open('https://github.com/Wishvanath')
    }
    const behanceClickHandler =(event) => {
        event.preventDefault()
        window.open('https://www.behance.net/anandwishv0176')
    }

    // return main component
    return (
        <Fragment>
            <section className="hero-area" id="parallax">
                <div className="container">
                    <div className="row">
                        <div className="self_descp">
                            <h2 className="font-tertiary">Hi! I’m Wishvanath</h2>
                            <h3 className="font-tertiary"> Web Developer and Designer</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="social_media_wrapper">
                            <ul className=" ml-4 mt-3 social_media_inner">
                                <li className="social mr-3">
                                    <Link to="/" className="text_primary " onClick={facebookClickHandler}><i className="fab fa-facebook-f mt-3"></i></Link>
                                </li>
                                <li className="social mr-3">
                                    <Link to="/" className="text_primary" onClick={twitterClickHandler}><i className="fab fa-twitter mt-3"></i></Link>
                                </li>
                                <li className="social mr-3">
                                    <Link to="/" className="text_primary" onClick={googleplusClickHandler}><i className="fab fa-google-plus-g mt-3"></i></Link>
                                </li>
                                <li className="social mr-3">
                                    <Link to="/" className="text_primary" onClick={gitClickHandler}><i className="fas fa-code-branch mt-3"></i></Link>
                                </li>
                                <li className="social mr-5">
                                    <Link to="/" className="text_primary" onClick={behanceClickHandler}><i className="fab fa-behance mt-3"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </section>
        </Fragment>
    )
}

export default BodyHero;
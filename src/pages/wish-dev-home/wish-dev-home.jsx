import React, { Component, Fragment } from 'react'
import Navbar from '../../component/navbar-component/navbar.component';
import BodyHero from '../../component/body-hero-section/body-hero.component';
import BodyAboutMe from '../../component/body-about-me/body-about-me.component';
import BodySkill from '../../component/body-skill-section/body-skill';
import BodyEducation from '../../component/body-education/body-education';
import BodyExperience from '../../component/body-experience/body-experience';
import BodyPortfolio from '../../component/body-porfolio/body-porfolio';
import BodyBlog from '../../component/body-blog/body-blog';
import BodyServices from '../../component/body-services/body-services';
import ContactForm from '../../component/body-contact-info/contact-info';
import Footer from '../../component/footer-section/footer';
export default class WishDevHome extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <BodyHero />
                <BodyAboutMe />
                <BodySkill />
                <BodyExperience />
                <BodyEducation />
                <BodyPortfolio />
                <BodyServices />
                <BodyBlog />
                <ContactForm />
                <Footer />
            </Fragment>
        )
    }
}

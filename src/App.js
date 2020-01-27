import React, { Component, Fragment } from 'react'
import $ from 'jquery';
import {Route, Switch} from 'react-router-dom'
import WishDevHome from './pages/wish-dev-home/wish-dev-home';
import Layout from './pages/creative-design/cr-layout';
export default class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }


  // component did mount
  componentDidMount() {
      // Sticky Menu
      $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
          $('.navigation').addClass('nav-bg');
        } else {
          $('.navigation').removeClass('nav-bg');
        }
      });

      

      // background color
      $('[data-color]').each(function () {
        $(this).css({
          'background-color': $(this).data('color')
        });
      });

      // progress bar
      $('[data-progress]').each(function () {
        $(this).css({
          'bottom': $(this).data('progress')
        });
      });

      //navbar scroll navigation
      $('#blog_link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#blog_section').offset().top)
        }, 1000)
      })

      $('#about_link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#about_section').offset().top)
        }, 1000)
      })

      $('#portfolio_link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#portfolio_section').offset().top)
        }, 1000)
      })

      $('#send_message').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#contact_section').offset().top)
        }, 1000)
      })
      $('#contact_link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#contact_section').offset().top)
        }, 1000)
      })

      $('#home_link').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ($('#parallax').offset().top)
        }, 1000)
      })

  }
  //end of componenentDidMount()


  // render main component
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" component ={WishDevHome} />
            <Route exact path ="/design" component ={Layout} />
          </Switch>
      </Fragment>
    )
  }
}

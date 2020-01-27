import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import './common.style.scss'
import ScrollBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import $ from 'jquery'

const SideBar = () => {


    // function defination
    function sideNavToogle(){

      // Collapse/Expand icon
      $('#collapse-icon').addClass('fa-angle-double-left');
  
      // Collapse click
      $('[data-toggle=sidebar-colapse]').click(function () {
        SidebarCollapse();
      });
  
      function SidebarCollapse() {
        $('.menu-collapsed').toggleClass('d-none');
        $('.sidebar-submenu').toggleClass('d-none');
        $('.submenu-icon').toggleClass('d-none');
        $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed', 5000, "easing-out");
  
        $('._body_content_wrapper').toggleClass('_collapse_body_conten_wrapper', 5000);
        $('._site_inner_nav_wrapper').toggleClass('_collapse_site_inner_nav_wrapper', 5000);
        // Treating d-flex/d-none on separators with title
        var SeparatorTitle = $('.sidebar-separator-title');
        if (SeparatorTitle.hasClass('d-flex')) {
          SeparatorTitle.removeClass('d-flex');
        } else {
          SeparatorTitle.addClass('d-flex');
        }
        // Collapse/Expand icon
        $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
      }
    }
    


    // use effect defination
    useEffect(() => {
        sideNavToogle();
      }, [])
    
    
    // return main component
    return(
        <div id="sidebar-container" className="sidebar-expanded  d-md-block d-sm-block">

          {/* site logo and title */}
          <ul className="list-group _site_logo_section">
            <img src="images/minilogo.png" alt="" className="_site_logo" />
            <img src="images/minilogo.png" alt="" className="_collapse_site_logo"/>
            <div className="mini_title mt-3 menu-collapsed">
                Design Collection
            </div>
          </ul>
          {/* end of site logo and title */}

      {/* <!-- Bootstrap List Group --> */}
      <ScrollBar style={{maxHeight:'100vh'}}>
      <ul className="list-group list_group_inner">
       


        {/* <!-- Separator with title --> */}
        {/* <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <small >OPTIONS</small>
        </li> */}

        <Link to="/" className="list-group-item list-group-item-action cd_side_nav_menu" >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fas fa-angle-right fa-fw mr-3 fas_side_nav"></span>
            <span className="menu-collapsed">Option</span>
          </div>
        </Link>

        <Link to="/" className="cd_side_nav_menu list-group-item list-group-item-action" >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fas fa-angle-right fa-fw mr-3 fas_side_nav"></span>
            <span className="menu-collapsed">Option</span>
          </div>
        </Link>

        <Link to="/" className="cd_side_nav_menu list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fas fa-angle-right fa-fw mr-3 fas_side_nav"></span>
            <span className="menu-collapsed">Upcoming <span className="badge badge-pill badge-success ml-2">5</span></span>
          </div>
        </Link>

        <Link to="/" className="cd_side_nav_menu list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-question fa-fw mr-3 fas_side_nav"></span>
            <span className="menu-collapsed">Help</span>
          </div>
        </Link>

        <Link  data-toggle="sidebar-colapse" className="bg-transparent list-group-item list-group-item-action d-flex align-items-center">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span id="collapse-icon" className="fa mr-3 fas_side_nav"></span>
            <span id="collapse-text" className="menu-collapsed">Collapse</span>
          </div>
        </Link>  
      </ul>
      </ScrollBar>

      {/* side bar footer section */}
      <div className="_site_footer_section _pf_footer">
        {/* <img src="image/footer_pf.jpg" alt="" className="footer_img mr-2 " /> */}
        <span className="menu-collapsed text-left">
          Hello Viewers<i class="fas fa-circle fa_footer_ico"></i>
        </span>
      </div>
      {/* end of side bar footer section */}

    </div>

    )
}

export default SideBar
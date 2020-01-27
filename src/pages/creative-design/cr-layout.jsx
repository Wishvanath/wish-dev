import React from 'react'
import './common.style.scss'
import HeaderNav from './cr-header-nav';
import SideBar from './cr-sidebar';
import BodyContent from './cr-body-content';

const Layout = () => {


  //  return main component
  return (
    <div className="body_wrapper">

      {/* site navbar section */}
      <div className="_site_nav_wrapper">
        <div className="_site_inner_nav_wrapper">
          <HeaderNav />
        </div>
      </div>
      {/* end of site nav bar section */}

      {/* body content inner wrapper */}
      <div className="row" id="body_inner_wrapper">
        <SideBar />
      </div>
      {/* end of body content inner wrapper */}

        <BodyContent />
    </div>
  )
}
export default Layout;
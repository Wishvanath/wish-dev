import React, {useEffect} from 'react'
import $ from 'jquery'

const HeaderNav = () => {

  // function defination
  function autoDropdown() {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
  
    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    })
  }

  function mainNavCollapse(){
    $('._site_nav_collapse_section').click(function () {
      var side_bar_class = $('#sidebar-container');
      if(side_bar_class.hasClass('sidebar-expanded')){
        // alert("Side bar is expanded")
        $('#sidebar-container').toggleClass('_sidebar_whole_collapsed');
        $('._body_content_wrapper').toggleClass('_wcollapse_body_conten_wrapper');
        $('._site_inner_nav_wrapper').toggleClass('_wsite_inner_nav_wrapper');
        $('._fas_nav_icon').toggleClass('_fas_nav_icon_right');
        $('._site_footer_section').toggleClass('_site_footer_section_collpase');
        
      }else{
        // alert("side bar collapsed is not allowed")
      }
  
    });
  }
  





  // use effect defination
  useEffect(() => {
    autoDropdown();
    mainNavCollapse();
  }, [])





    // return main component
    return(
        <div>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

              {/* collapse navigation section */}
              <div className="_site_nav_collapse_section  d-sm-block d-md-block d-lg-block d-xl-block">
                <i class="far fa-2x fa-caret-square-right _fas_nav_icon"></i>
              </div>
              {/* end of collapse navigation section */}



              <button class="navbar-toggler design_colletion_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon dc_toggler_icon"><i class="fas fa-bars"></i></span> */}
                <span className="navbar-toggler-icon"><i class="fas fa-ellipsis-h"></i></span>

              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">

                {/* search bar section */}
              
                {/* <input placeholder="Search Here . . ." aria-label="Search" type="search" class="_form_control_noborder_nobackground"></input> */}
                {/* end of search bar section */}


                <ul class="navbar-nav ml-auto">
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#/">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#/" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <Link class="dropdown-item" href="#/">Action</Link>
                      <div className="dropdown-divider"></div>
                      <Link class="dropdown-item" href="#/">Action</Link>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#/" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                        <Link class="dropdown-item" href="#/">Action</Link>
                      <div className="dropdown-divider"></div>
                      <Link class="dropdown-item" href="#/">Action</Link>
                    </div>
                  </li> */}

                  <input type="search" name="search" id="search" className="search_box mt-2 mb-2" placeholder="Search Here ..."/>

                </ul>
                {/* <buttton className="btn btn-success _btn_success _btn_m_15">logout</buttton> */}
              </div>
            </div>
          </nav>
    </div>
    )
}

export default HeaderNav;
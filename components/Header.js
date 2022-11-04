import React from 'react'

function Header() {
  return (
    <header className="site-header header-transparent mo-left">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <a href="/" className="logo-1"><img src="/front/images/logo-white-1.png" alt="" /></a>
                <a href="/" className="logo-2"><img src="/front/images/logo-black-1.png" alt="" /></a>
              </div>

              <div className="extra-nav">
                <div className="extra-cell">
                  <a href="#" className="site-button-link white"><i className="ti-import m-r5 rotate90"></i> Sign In</a>
                  <a href="#" className="site-button radius-xl m-l10"><i className="fa fa-plus m-r5"></i> Add Listing</a>
                </div>
              </div>

              <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                <ul className="nav navbar-nav">
                  <li><a href="/">HOME</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
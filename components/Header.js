import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="site-header header-transparent mo-left">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <Link href="/" className="logo-1">
                  <img src="/front/images/logo-white-1.png" alt="" style={{marginTop: 20}}/>
                </Link>
              </div>

              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="#" className="site-button-link white">
                    <><i className="ti-import m-r5 rotate90"></i> Sign In</>
                  </Link>
                  <Link href="#" className="site-button radius-xl m-l10">
                    <><i className="fa fa-plus m-r5"></i> Add Listing</>
                  </Link>
                </div>
              </div>

              <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                <ul className="nav navbar-nav">
                  <li><Link href="/">HOME</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
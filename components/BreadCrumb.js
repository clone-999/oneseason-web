import React from 'react'

const BreadCrumb = () => {
  return (
    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{
        backgroundImage: "url(/front/images/banner/bnr1.jpg)"}}>
        <div className="container">
            <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Search All Properties</h1>
                <p>Find awesome Hotels, Holiday Homes & Apartments.</p>
                <div className="breadcrumb-row">
                    <ul className="list-inline">
                        <li><a href="/">Home</a></li>
                        <li>Search Hotels</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb
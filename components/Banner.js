import React from 'react'
import HotelSearchForm from "./HotelSearchForm";

function Banner() {
    
    return (
        <div className="dlab-bnr-inr dlab-bnr-inr-md" style={{
                backgroundImage: "url(/front/images/wallpaper.jpg)", 
                backgroundSize: "cover"
            }}>
            <div className="container">
                <div className="dlab-bnr-inr-entry align-m dlab-home">
                    <div className="bnr-content">
                        <h2><strong>Find & Get</strong> Your Dream Place.</h2>
                    </div>

                    <div className="dlab-tabs search-filter">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#place">
                                <i className="fa fa-map-marker"></i> <span className="title-head">Place</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#party">
                                <i className="fa fa-music"></i> <span className="title-head">Party</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#restauren">
                                <i className="fa fa-glass"></i> <span className="title-head">Restauren</span></a></li>
                        </ul>

                        <div className="tab-content">
                            <HotelSearchForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Header from '../components/Header';
import HotelSearchForm from '../components/HotelSearchForm';
import Layout from '../components/Layout';
import useProperties from '../hooks/hotels/useProperties';

const Search = ({query}) => {
    const [getPropertiesApi, properties, propertiesErrorMessage] = useProperties();
    const[changer, setChanger] = useState(false);

    const ports = {viewport: {latitude: query.latitude, longitude: query.longitude}}

    const vies = {
        offset: query.offset,
        arrival_date: query.arrival_date,
        departure_date: query.departure_date,
        guest_qty: query.guest_qty,
        room_qty: query.room_qty,
        search_type: query.search_type,
        children_qty: query.children,
        search_id: 'none',
        price_filter_currencycode: 'AED',
        order_by: 'distance',
        languagecode: 'en-us',
        travel_purpose: 'leisure',
        latitude: query.latitude,
        longitude: query.longitude
    }

    //console.log("vies", vies);

    useEffect(() => {
        getPropertiesApi(vies)
        //console.log("here", properties);
    }, [changer]);

    return (
        <Layout>
            <Header />
            <div className="page-content bg-white">
                <BreadCrumb />
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <HotelSearchForm sideBar={true} initTerm={query.search_term} initAdults={query.adults} initChildren={query.children} initRooms={query.rooms} initStartDate={query.arrival_date} initEndDate={query.departure_date} initLatitude={query.latitude} initLongitude={query.longitude} initReload={true} changer={changer} setChanger={setChanger} />
                                </div>

                                <div className="col-lg-8 col-md-6">
                                    <div className="listing-filter m-b40">
                                        <div className="d-flex">
                                            <div className="mr-auto">
                                                <ul className="filter m-b0">
                                                    <li>
                                                        <select> 
                                                            <option>More Filters</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="filter-icon m-b0">
                                                    <li><a href="#"><i className="fa fa-th"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-th-list"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {properties.map((property) => (
                                            <div key={property.hotel_id} className="col-lg-12">
                                                <div className="listing-bx listing-half m-b30">
                                                    <div className="listing-media">
                                                        <Image 
                                                            src={property?.main_photo_url} 
                                                            alt="" 
                                                            width={700} 
                                                            height={530} 
                                                            unoptimized={true}
                                                        />
                                                            <ul className="wish-bx">
                                                            <li><a className="like-btn" href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a className="info-btn" href="#"><i className="fa fa-leaf"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="listing-info">
                                                        <ul className="featured-star">
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            
                                                        </ul>
                                                        <h3 className="title"><a href="#">{property.hotel_name}</a></h3>
                                                        <p>{property.address_trans}</p>
                                                        <p><strong>{property.currency_code} {property.price_breakdown.gross_price}</strong></p>
                                                        <ul className="place-info">
                                                            <li className="place-location"><i className="fa fa-map-marker"></i>{property.city_trans}</li>
                                                            <li className="open"><i className="fa fa-check"></i>Open Now</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    
    return {
        props: {
          query,
        },
      };
}

export default Search
import React, { useEffect, useState } from 'react'
import { DatePicker } from "antd";
import moment from "moment";
import useAutocompletes from '../hooks/hotels/useAutocompletes';
import SuggestionRow from './SuggestionRow';
import Guests from "./Guests";
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const HotelSearchForm = ({sideBar, initTerm, initAdults, initChildren, initRooms, initStartDate, initEndDate, initLatitude, initLongitude, initReload, changer, setChanger, side=false}) => {
    const router = useRouter();
    const [guestPort, setGuestPort] = useState({});
    const [display, setDisplay] = useState(false);
    const [searchTerm, setSearchTerm] = useState(initTerm ? initTerm : '');
    const [destinationsId, setDestinationsId] = useState('');
    const [searchAutocompleteApi, autocompletes, autocompleteErrorMessage] = useAutocompletes();
    const [adults, setAdults] = useState(initAdults ? initAdults : 1);
    const [children, setChildren] = useState(initChildren ? initChildren : 0);
    const [rooms, setRooms] = useState(initRooms ? initRooms : 1);
    const [startDate, setStartDate] = useState(initStartDate ? initStartDate : '');
    const [endDate, setEndDate] = useState(initEndDate ? initEndDate : '');
    const [latitude, setLatitude] = useState(initLatitude ? initLatitude : '');
    const [longitude, setLongitude] = useState(initLongitude ? initLongitude : '');
    const [reload, setReload] = useState(initReload ? initReload : false);

    useEffect(() => {
        searchAutocompleteApi(searchTerm);
        
    }, [searchTerm]);

    const autoComp = () => {
        return display && (
            <>
                {(autocompletes.length != 0) && (autocompletes.map( (item) => {
                    return <SuggestionRow 
                        key={item.dest_id} 
                        item={item} 
                        setPort={setGuestPort} 
                        setDisplay={setDisplay} 
                        setSearchTerm={setSearchTerm}
                        setDestinationsId={setDestinationsId}
                        setLatitude={setLatitude}
                        setLongitude={setLongitude}
                />
                }))}
            </>
        )
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (side) {
            setChanger(!changer);
        }

        if (reload) {
            window.location.href = `/search?guest_qty=${adults + children}&latitude=${latitude}&longitude=${longitude}&room_qty=${rooms}&dest_ids=${destinationsId}&departure_date=${endDate}&arrival_date=${startDate}&offset=0&search_type=latlong&search_term=${searchTerm}&adults=${adults}&children=${children}`;
        } else{
            router.push(`/search?guest_qty=${adults + children}&latitude=${latitude}&longitude=${longitude}&room_qty=${rooms}&dest_ids=${destinationsId}&departure_date=${endDate}&arrival_date=${startDate}&offset=0&search_type=latlong&search_term=${searchTerm}&adults=${adults}&children=${children}`);
        }
    }

    return (
        <>
            { !sideBar ?
                <div id="place" className="tab-pane active">
                    <form id='homeform' name='form1'>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setDisplay(searchTerm.length > 1 ? true : false);
                                }} />

                            <div className="form-control"> 
                                <RangePicker
                                    onChange={(values, dateString) => {
                                        setStartDate(moment(values[0]).format('YYYY-MM-DD'))
                                        setEndDate(moment(values[1]).format('YYYY-MM-DD'))
                                    }}
                                    disabledDate={(current) =>
                                        current && current.valueOf() < moment().subtract(1, "days")
                                    }
                                    className="w-100 h-100"
                                />
                            </div>
                            <div className="form-control">
                                <Guests setAdults={setAdults} setChildren={setChildren} setRooms={setRooms} />
                            </div>

                            <div className="input-group-prepend">
                                <button 
                                    className="site-button text-uppercase"
                                    onClick={submitForm}
                                    >
                                    <i className="fa m-r5 fa-search"></i> Search
                                </button>
                            </div>
                        </div>

                        {autoComp()}

                    </form>
                </div> : 

                <div className="sticky-top">
                    <div className="listing-filter-sidebar">
                        <h4 className="title m-b30">Filter By</h4>
                        <form id='sideform' name='form2'>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="What are your looking for?" 
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setDisplay(searchTerm.length > 1 ? true : false);
                                        }}
                                    />
                                </div>
                                { autoComp() }
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <RangePicker
                                        onChange={(values, dateString) => {
                                            setStartDate(moment(values[0]).format('YYYY-MM-DD'))
                                            setEndDate(moment(values[1]).format('YYYY-MM-DD'))
                                        }}
                                        disabledDate={(current) =>
                                            current && current.valueOf() < moment().subtract(1, "days")
                                        }
                                        className="w-100 h-100"
                                        size='middle'
                                        defaultValue={[
                                            moment(startDate, 'YYYY-MM-DD'),
                                            moment(endDate, 'YYYY-MM-DD')
                                        ]}
                                    />				
                                </div>
                            </div>
                            <div className="form-group">
                                <Guests setAdults={setAdults} setChildren={setChildren} setRooms={setRooms} initAdults={adults} initChildren={children} initRooms={rooms} />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <button 
                                        className="site-button radius-xl m-l10"
                                        onClick={submitForm}>
                                            <i className="fa fa-search m-r5"></i> Search
                                    </button>					
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default HotelSearchForm
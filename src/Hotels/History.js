import React from 'react'
import FirstImage from "../Images/FirstHotelImage.jpg";
import SecondImage from "../Images/SecondHotelImage.jpg";
import ThirdImage from "../Images/ThirdHotelImage.jpg";
import "./ViewHotel.css";
const History = () => {
  return (
    <div className='container'>
        <div className='row'>
            <h4 className='history_heading'>Your History</h4>
            <div className='col-lg-12 card history_card'>
                <div className="row">
                    {/* Hotel Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={FirstImage} alt="hotel" className="history_image"/>
                    </div>
                    {/* Hotel Details */}
                    <div className='col-lg-4 mt-5'>
                        <h5>Your Booking Details</h5>
                        <p>Check In  Date - 30th May 2023</p>
                        <p>Check Out  Date - 30th May 2023</p>
                        <p>Total Guests - 2 Adults</p>
                        <p>Days - 1</p>
                        <p>Nights - 2</p>
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
            </div>

            <div className='col-lg-12 mt-3 card history_card'>
                <div className="row">
                    {/* Hotel Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={SecondImage} alt="hotel" className="history_image"/>
                    </div>
                    {/* Hotel Details */}
                    <div className='col-lg-4 mt-5'>
                        <h5>Your Booking Details</h5>
                        <p>Check In  Date - 30th May 2023</p>
                        <p>Check Out  Date - 30th May 2023</p>
                        <p>Total Guests - 2 Adults</p>
                        <p>Days - 1</p>
                        <p>Nights - 2</p>
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
            </div>


            <div className='col-lg-12 mt-3 card history_card'>
                <div className="row">
                    {/* Hotel Image */}
                    <div className='col-lg-7 mt-3'>
                        <img src={ThirdImage} alt="hotel" className="history_image"/>
                    </div>
                    {/* Hotel Details */}
                    <div className='col-lg-4 mt-5'>
                        <h5>Your Booking Details</h5>
                        <p>Check In  Date - 30th May 2023</p>
                        <p>Check Out  Date - 30th May 2023</p>
                        <p>Total Guests - 2 Adults</p>
                        <p>Days - 1</p>
                        <p>Nights - 2</p>
                        <p>Payment Status - Paid</p>
                    </div>
                </div>
                <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
            </div>
        </div>
    </div>
  )
}

export default History
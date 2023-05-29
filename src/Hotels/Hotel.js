import React from 'react'
import Styles from "./HomePage.module.css"
const Hotel = ({image,Heading,Description}) => {
  return (
    <div className='card col-lg-5 my-3 py-3 mx-3'>
        <div className='row'>
            <div className='col-lg-5'>
                <img src = {image} alt="hotel"/>
            </div>
            <div className='col-lg-7'>
                <p className={`${Styles.HotelName}`}>{Heading}</p>
                <p className='text text-justify'>{Description}</p>
                <div className={`${Styles.viewDetailsBtnDiv}`}>
                <button className={`${Styles.viewDetailsBtn}`}>View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel
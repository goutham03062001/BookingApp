import React from 'react'
import Styles from "./HomePage.module.css";

const Hotel = ({image,Heading,Description,setImageState}) => {
  const setWindowLocation = ()=>{
    window.localStorage.setItem('currentImage',image);
    window.localStorage.setItem("Heading",Heading);
  }
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
                <button className={`${Styles.viewDetailsBtn}`}
                onClick={setWindowLocation}>
                  <a href={`/viewDetails/image/Heading/`} className="text text-white">View Details</a>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel
import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i className='bx bx-award about__icon'></i>
            <h3 className='about__title'>Graphic</h3>
            <span className='about__subtitle'>2 Years Working</span>
        </div>
        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Education</h3>
            <span className='about__subtitle'>TU Braunschweig</span>
        </div>
        <div className="about__box">
        <i className='bx bx-support about__icon'></i>
            <h3 className='about__title'>Currently</h3>
            <span className='about__subtitle'>Au-pair</span>
        </div>
    </div>
  )
}

export default Info
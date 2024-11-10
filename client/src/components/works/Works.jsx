import React from 'react'
import "./works.css"
import Examples from "./Examples"

const Works = () => {
  return (
    <section className="works section" id='works'>
        <h2 className="section__title">Works</h2>
        <span className="section__subtitle">Quick look at my works</span>
        
        <Examples />
        
    </section>
  )
}

export default Works
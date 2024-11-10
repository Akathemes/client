import React, {useState} from 'react'
import "./qualifications.css"

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualifications section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualifications__container container">
            <div className="qualifications__tabs">
                <div className={toggleState === 1 ? "qualifications__button qualification__active button--flex" : "qualifications__button  button--flex"}
                onClick={() => toggleTab(1)}>
                  <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualifications__button qualification__active button--flex" : "qualifications__button  button--flex"}
                onClick={() => toggleTab(2)}>
                  <i className="uil uil-briefcase-alt qualification__icon"></i>  Experience
                </div>
            </div>

            <div className="qualifications__sections">
              <div className={toggleState === 1? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                {/* <div className="qualifications__data">
                  <div>
                    <h3 className="qualifications__title">Web Design</h3>
                    <span className="qualifications__subtitle">Spain - Institute</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>
                  // </div> */}

                <div className="qualifications__data">
                  <div></div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>

                  <div>
                    <h3 className="qualifications__title">Secondary</h3>
                    <span className="qualifications__subtitle">Mongolia - FC</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2007 - 2018
                    </div>
                  </div>

                </div>

                <div className="qualifications__data">
                  <div>
                    <h3 className="qualifications__title">Computer Network</h3>
                    <span className="qualifications__subtitle">Mongolia - NUM</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2018 - 2022
                    </div>
                  </div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>
                </div>

                <div className="qualifications__data">
                  <div></div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>

                  <div>
                    <h3 className="qualifications__title">Informatiker</h3>
                    <span className="qualifications__subtitle">Germany - TUB</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2024 - Present
                    </div>
                  </div>

                </div>

              </div>
              <div className={toggleState === 2? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                <div className="qualifications__data">
                  <div>
                    <h3 className="qualifications__title">Web Design</h3>
                    <span className="qualifications__subtitle">Microsoft - Institute</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>
                </div>

                <div className="qualifications__data">
                  <div></div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>

                  <div>
                    <h3 className="qualifications__title">Art Director</h3>
                    <span className="qualifications__subtitle">Spain - Institute</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2021 - 2021
                    </div>
                  </div>

                </div>

                <div className="qualifications__data">
                  <div>
                    <h3 className="qualifications__title">Web Development</h3>
                    <span className="qualifications__subtitle">Spain - Institute</span>
                    <div className="qualifications__calender">
                      <i className="uil uil-calendar-alt"></i> 2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                  </div>
                </div>


              </div>
            </div>
            
        </div>
    </section>
  )
}

export default Qualifications
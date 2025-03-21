import React from 'react'
import LandingCounter from './../LandingCounter/LandingCounter'
import { Container } from 'react-bootstrap'
import './BoxHeader.css'
function BoxHeader() {
  return (
    <>
    <div id='boxHeader' className="container d-flex justify-content-center">
        <div className="d-flex justify-content-center m-5 box-header-item">
            <LandingCounter className='landing-counter' count={320} />
            <span className="landing-status__text">
                دقیقه آموزش تولید کردیم
            </span>
        </div>
        <div className="d-flex justify-content-center m-5 box-header-item">
            <LandingCounter className='landing-counter' count={320} />
            <span className="landing-status__text">
                دقیقه آموزش تولید کردیم
            </span>
        </div>
        <div className="d-flex justify-content-center m-5 box-header-item">
            <LandingCounter className='landing-counter' count={320} />
            <span className="landing-status__text">
                دقیقه آموزش تولید کردیم
            </span>
        </div>
    </div>
    </>
  );
}

export default BoxHeader
import React from 'react';
import HeroImage from '../../assets/Images/Hero1.png';
import Certificate from '../../assets/Images/HeroCerti.png';


const Hero = () => {
    return (
        <div className="container-fluid mt-0 mb-1  px-4 py-5 hero-container" style={{boxShadow:'2px 6px 15px  rgb(26, 25, 25,0.5)'}}>
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
                <div className="col-10 col-sm-8 col-lg-5">
                    <img src={'https://updoertechnology.com/media/featured_image/service/elerning.gif'} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy"/>
                </div>
                <div className="col-lg-6 py-5 hero-text">
                    <h1 className="display-1 fw-bold lh-1 mb-3">
                        <span>E-Learning</span>
                    </h1>
                    <div className="d-flex align-items-center mb-5">
                        <img src={Certificate} alt="ISO Certified" style={{borderRadius:'50%'}} height='70px' width='70px'  className="me-3"/>
                        <p className='fw-bold'>
                            We are an affliated learning partner
                             <br/> to your doorstep.
                        </p>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-warning btn-lg px-4 me-md-2" rounded-0>Enroll</button>
                        <button type="button" className="btn btn-light btn-lg px-4" rounded-0>Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

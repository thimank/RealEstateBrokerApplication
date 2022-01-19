import React from 'react';
import "../../Styles/Customer.css"
import CustomerNavBar from './CustomerNavBar';
import CustomerSlider from './CustomerSlider';
import { Link } from 'react-router-dom';

function CustomerHomePage()
{
    return (
        <div>
        <CustomerNavBar/>
           <CustomerSlider/>
            <section className="section">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Welcome Customer </h3>
                        <div className="underline mx-auto"></div>
                    </div> 
                    </div>
                </div>
            </section>

            <section className="contaier-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                    <div className="row justify-content-center">
                            <div className="col-10 col-lg-8">
                            <p className="lead custom-p mb-5 mb-mb-0">
                            <b>Looking for local houses for sale or to sell your residential property? Property Brokers are experts in residential real estate sales.
                              We provide top service and support to all home buyers and sellers delivering great results.</b></p>

                              <p className="lead custom-p mb-5 mb-mb-0"> <b><i>Real Estate Group - Is a premier real estate brokerage firm
                             composed of a close group of talented realtors, 
                            led by the firm’s president and founder, Javin Daniels. Calibrated for the marketplace of tomorrow,
                             delivering proven results for buyers, sellers, 
                            and developers. Daniels Real Estate Group revolutionizes the traditional brokerage model
                             by innovating through media, content creation, and network marketing.</i></b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div class="col-lg-10 pb-5 inner">
                            <div class="card ho">
                                <div class="view overlay">
                                     <img class="card-img-top" src="\img\customer.png" alt="First Image" />
                                </div>
                                <div class="card-body">
                                    <Link to="/buyProperty"><button type="submit" className="btn btn-dark btn-lg btn-block">Buy/Rent Property</button></Link>
                                </div>
                            </div>

                    </div>
                    </div>

                </div>
            </section>

            <section className="contaier-fluid px-0">
                <div className="row align-items-center">
                    
                <div className="col-md-6">
                    <div class="col-lg-10 pb-5 inner">
                            <div class="card ho">
                                <div class="view overlay">
                                     <img class="card-img-top" src="\img\searchHouse.png" alt="First Image" />
                                </div>
                                <div class="card-body">
                                    <Link to="/customerProperties"><button type="submit" className="btn btn-dark btn-lg btn-block">My Properties</button></Link>
                                </div>
                            </div>

                    </div>
                    </div>

                    <div className="col-md-6 text-center order1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8">
                            <p className="lead custom-p mb-5 mb-mb-0"><b>Real Estate Group - Is a premier real estate brokerage firm
                             composed of a close group of talented realtors, 
                            led by the firm’s president and founder, Javin Daniels. Calibrated for the marketplace of tomorrow,
                             delivering proven results for buyers, sellers, 
                            and developers. Daniels Real Estate Group revolutionizes the traditional brokerage model
                             by innovating through media, content creation, and network marketing.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CustomerHomePage


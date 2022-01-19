import React from 'react';
import "../../Styles/Customer.css"
import BrokerNavBar from './BrokerNavBar';
import { Link } from 'react-router-dom';

function BrokerHomePage() {
    return (
        <div>
            <BrokerNavBar />

            <section className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Welcome Broker </h3>
                            <div className="underline mx-auto"></div>
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
                                    <img class="card-img-top" src="\img\broker.jpg" alt="First Image" />
                                </div>
                                <div class="card-body">
                                    <Link to="/allProperties"><button type="submit" className="btn btn-dark btn-lg btn-block">All Properties</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 text-center order1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8">
                                <p className="lead custom-p mb-5 mb-mb-0"><b>Our Property Brokers residential sales consultants are great 
                                at what they do because they are locals who are passionate about providing a full
                                 real estate service to the cities and towns they are part of. They are proud of their
                                  client for life approach to the business and work hard to develop lasting relationships 
                                  based on great outcomes.

                                    We back our Property Brokers Residential team with industry leading support systems. 
                                    Our in-house marketing department ensure that your property for sale is presented in the most
                                     flattering way and that it will be seen by as many potential buyers as possible. Our formidable online presence
                                      as well as belonging to the NZ Realtors Network, New Zealand’s largest referral system, guarantees that your property 
                                      reaches the national and international real estate markets. </b> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrokerHomePage;
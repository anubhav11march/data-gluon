import React from "react";
import img1 from "../../../assets/img/project-details/2.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <section id="service-dec" className="py100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service-dec-img animation-img-two">
                <img alt="" src={img1} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service-dec-right-side">
                <div className="left-side-title">
                  <h3>Let's Get Started</h3>
                  <h2 className="pt10">
                    Let's Transform Your Data Landscape Together.
                  </h2>
                </div>
                <div className="service-dec-left-text">
                  <p>
                    At DataGluon Solutions, we believe in the transformative
                    power of data. Whether you are looking to optimize existing
                    data processes, migrate to the cloud, or embark on a
                    data-driven journey, we are here to guide you every step of
                    the way. Contact us today to explore how we can unlock the
                    full potential of your data and drive
                  </p>{" "}
                  <Link to="/services" className="btn btn-theme">
                    Get Started Project
                  </Link>
                  <Link to="/contact" className="btn btn-theme">
                    Contact With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

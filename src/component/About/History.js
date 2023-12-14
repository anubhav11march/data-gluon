import React from "react";
// import About Img
import img1 from "../../assets/img/logo.png";
// import Icon
import { FiCheck } from "react-icons/fi";

const History = () => {
  return (
    <>
      {/* About Top Area Start */}
      <section id="about-top" className="py100 bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-img">
                <h2>At DataGluon Solutions,</h2>
                <p>
                  we recognize that data is the lifeblood of modern business. In
                  an era where information is power, our mission is to empower
                  organizations to harness the full potential of their data. As
                  a leading data engineering consulting company, we bring a
                  wealth of expertise and innovation to help you navigate the
                  complexities of the data landscape.
                </p>
                <p>
                  Our team of seasoned professionals is dedicated to delivering
                  tailored solutions that drive business success. From crafting
                  robust data architectures to implementing cutting-edge
                  technologies, we are committed to transforming your data
                  challenges into strategic advantages.
                </p>
                <ul>
                  <li>
                    <i>
                      <FiCheck />
                    </i>
                    Licensed OCR tool
                  </li>
                  <li>
                    <i>
                      <FiCheck />
                    </i>
                    Hadoop and other Big data platforms
                  </li>
                  <li>
                    <i>
                      <FiCheck />
                    </i>
                    Luigi workflow manager
                  </li>
                  <li>
                    <i>
                      <FiCheck />
                    </i>
                    Distributed setup on Cloud for speed
                  </li>
                  <li>
                    <i>
                      <FiCheck />
                    </i>
                    Django framework
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-top-img animation-img-two">
                <img alt="" src={img1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Top Area Start */}
    </>
  );
};

export default History;

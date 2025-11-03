import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import images from "../../images/dashpord.png";
// import images4 from "../../images/eco.png";
import images5 from "../../images/ecomstore.png";
import images6 from "../../images/weatherpng.png";
import images7 from "../../images/ask.png";
import images8 from "../../images/e-tec.png";
import images9 from "../../images/wolf.png";
import images10 from "../../images/ecomercenew.png";
import doctor1 from "../../images/doctor1.png";
import doctor2 from "../../images/doctor2.png";
import ecm from "../../images/ecm.png";
import signature from "../../images/signature.png";
import GYM from "../../images/gym.png";
import fashion from "../../images/image.png";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>{" "}
        </Row>{" "}
        <div className="mb-5 po_items_ho">
          {" "}
          {dataportfolio.map((data, i) => {
            console.log(data);
            return (
              <div key={i}>
                <div className="po_item">
                  <img src={ecm} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://ecmapp.wolfsoftwarechallenge.com">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={ecm} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://ecmapp.wolfsoftwarechallenge.com">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={fashion} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://fashion.wolfsoftwarechallenge.com/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={GYM} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://gym.wolfsoftwarechallenge.com/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={signature} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="http://app.ojentech.com/"> view project </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://admin-dashbord-ten.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>{" "}
                <div className="po_item">
                  <img src={images10} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://ecommerce-project-5.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={doctor1} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://tahleel-appointment-sawa.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images6} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://react-weather-seven-beta.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images7} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://ask-experts-master.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>{" "}
                </div>
                <div className="po_item">
                  <img src={images5} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://e-commerce-tow-project.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={doctor2} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://appointment-task.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images8} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://e-come-pro.vercel.app/"> view project </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images9} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://wolfsoftwarechallenge.com/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};

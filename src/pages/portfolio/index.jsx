import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import images from "../../images/dashpord.png";
import images1 from "../../images/0.png";
import images2 from "../../images/3.png";
import images3 from "../../images/4.png";
import images4 from "../../images/eco.png";
import images5 from "../../images/ecomstore.png";

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
                  <img src={images} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://admin-dashbord-ten.vercel.app/"> view project </a>
                  </div>
                </div>
                  <div className="po_item">
                  <img src={images4} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://e-commerce-tow-project.vercel.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images5} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://e-come19pro.netlify.app/">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images1} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://remarkable-raindrop-fac6bf.netlify.app">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>{" "}
                <div className="po_item">
                  <img src={images3} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://vermillion-puffpuff-1b0b1b.netlify.app">
                      {" "}
                      view project{" "}
                    </a>
                  </div>
                </div>
                <div className="po_item">
                  <img src={images2} alt="" />
                  <div className="content">
                    <p> {data.description} </p>{" "}
                    <a href="https://fabulous-yeot-6d00af.netlify.app">
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

import React, { useEffect } from "react";
import "./privacy.css";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import CommonHeader from "../commonHeader/commonHeader";

const Privacy = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CommonHeader/>
      <div className="privacy">
        <div className="privacy-content">
          <div className="privacy-container container">
            <div className="privacy-data">

              <div className="privacy-box">
                <div className="privacy-header">
                  <p>
                    Effective January 6, 2024 <br />
                    Our Privacy Policy has been updated.
                  </p>
                </div>

                <h2>Your Privacy Matters</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box" id="table1">
                <h2>Introduction</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box" id="table2">
                <h2>Data We Collect</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box" id="table3">
                <h2>How We Use Your Data</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box" id="table4">
                <h2>How We Share Information</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box" id="table5">
                <h2>Your Choices & Obligations</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>

              <div className="privacy-box privacy-box1" id="table6">
                <h2>Other Important Information</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem.Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem.Lorem Ipsum is
                  simply dummy text of the printing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-table">
          <h4>Table of content</h4>
          <a href="#table1">Introduction</a>
          <a href="#table2">Data We Collect</a>
          <a href="#table3">How We Use Your Data</a>
          <a href="#table4">How We Share Information</a>
          <a href="#table5">Your Choices & Obligations</a>
          <a href="#table6">Other Important Information</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;

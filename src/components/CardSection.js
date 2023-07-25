// import React, { useState, useEffect } from 'react';

const CardSection = (props) => {
    let uniqueVisitor = props.uniqueVisitor
    let payloadTime = props.payloadTime



  return (
    <div>
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>UNIQUE VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {uniqueVisitor}
          </p>
        </div>
      </div>

      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>PAYLOAD</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {payloadTime} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
import React, { forwardRef } from "react";
import "./sponsors.css";

const Sponsors = forwardRef((props, ref) => {
  return (
    <section
      className='sponsors'
      id='sponsors'
      ref={ref}
      style={{ padding: "100px 20px" }}
    >
      <div>
        <h1 className='sponsors-title'>Nos Sponsors</h1>
        <div className='sponsors-grid' style={{ marginBottom: "50px" }}>
          <img src='/images & logos/sponsors-logo.png' alt='' />
        </div>
      </div>
    </section>
  );
});

export default Sponsors;

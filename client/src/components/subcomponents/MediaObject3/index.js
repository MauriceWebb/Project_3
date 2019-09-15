import React from "react";

const MediaObject3 = props => {
  return (
    <div>
      <div className="container rounded">
        <div className="row d-flex">
          <div className="col-md-6 rounded">
            <div
              className="container round_corner"
              style={{
                height: 300,
                backgroundImage:
                  "url('http://www.holisticcouncil.org/uploads/1/0/7/7/107780917/top-view-1248955-1920_orig.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </div>
          <div className="col-md-6 py-3 d-flex justify-content-center align-items-center rounded">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center text-md-left">
                  <h2>Holistic health</h2>
                </div>
                <div className="col-12">
                  <div className="container pl-0">
                    <hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    Holistic health involves education on lifestyle changes and
                    self-care to promote wellness. We encourage and promote our
                    online network to employ herbal therapeutic techniques to
                    help take responsibility for their own well-being and
                    achieve optimal health.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaObject3;

import React from "react";
import { Link } from "react-router-dom";

const ResultCard = props => {
  let desc = props.result.generalDescription
    ? props.result.generalDescription
        .substr(0, 150)
        .trim()
        .concat(" ...")
    : props.result.unsubstantiatedClaims
    ? props.result.unsubstantiatedClaims
        .substr(0, 150)
        .trim()
        .concat(" ...")
    : "No description available.";
  return (
    <div>
      <div className="card round_corner card_fx mx-auto">
        <img
          src={`${props.result.image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center-">
          <h5 className="card-title text-center text-sm-left">
            {props.result.name}
          </h5>
          <p className="card-text">{desc}</p>
          <Link
            to="/result"
            className="btn rounded-btn ui_btn2 border-0 text-white"
            onClick={_ => {
              props.getResult(props.result);
            }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

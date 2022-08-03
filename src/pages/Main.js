import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          marginLeft: "500px",
          marginTop: "75px",
          fontSize: 150,
          fontFamily: "Cursive",
          color: "white",
        }}
      >
        Buffet
      </h1>
      <button
        type="button"
        className="btn btn-outline-light"
        style={{
          marginLeft: "810px",
          marginTop: "450px",
          fontSize: 35,
          fontFamily: "Cursive",
        }}
        onClick={() => navigate("/order")}
      >
        Start your order
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Main;

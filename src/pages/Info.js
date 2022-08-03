import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Info({ newDish, filterReciept }) {
  const [newOrder, setNewOrder] = useState({
    dishes: newDish,
    time: null,
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();
  const makeOrder = () => {
    fetch("http://127.0.0.1:8000/orders/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        filterReciept(data.id);
      });
  };

  const handleForm = (e) => {
    setNewOrder((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div
      class="card"
      style={{
        width: "700px",
        marginLeft: "580px",
        marginTop: "100px",
        height: "500px",
      }}
    >
      <div class="card-body">
        <h1 style={{ fontSize: 50, fontFamily: "Cursive" }}>Fill info</h1>
        <br />
        <div class="input-group mb-3">
          <span
            class="input-group-text"
            id="inputGroup-sizing-default"
            style={{ fontSize: 18, fontFamily: "Cursive" }}
          >
            First Name
          </span>
          <input
            type="text"
            name="first_name"
            onChange={handleForm}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
        <div class="input-group mb-3">
          <span
            class="input-group-text"
            id="inputGroup-sizing-default"
            style={{ fontSize: 18, fontFamily: "Cursive" }}
          >
            Last name
          </span>
          <input
            type="text"
            name="last_name"
            onChange={handleForm}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
        <div class="input-group mb-3">
          <span
            class="input-group-text"
            id="inputGroup-sizing-default"
            style={{ fontSize: 18, fontFamily: "Cursive" }}
          >
            Address
          </span>
          <input
            type="text"
            name="address"
            onChange={handleForm}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
        <div class="input-group mb-3">
          <span
            class="input-group-text"
            id="inputGroup-sizing-default"
            style={{ fontSize: 18, fontFamily: "Cursive" }}
          >
            Phone
          </span>
          <input
            type="text"
            name="phone"
            onChange={handleForm}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
      </div>
      <div>
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{
            width: "180px",
            marginLeft: "370px",
            fontSize: 18,
            fontFamily: "Cursive",
          }}
          onClick={() => makeOrder(newOrder) | navigate("/receipt")}
        >
          Finish order
        </button>
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{
            width: "180px",
            marginLeft: "170px",
            marginTop: "-68px",
            fontSize: 18,
            fontFamily: "Cursive",
          }}
          onClick={() => navigate("/cart")}
        >
          Back to cart
        </button>
      </div>
    </div>
  );
}

export default Info;

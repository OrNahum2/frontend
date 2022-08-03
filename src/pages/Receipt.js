import React from "react";

function Receipt({ newOrder }) {
  const totalPrice = newOrder.map((dish) =>
    dish.dishes.reduce((total, price) => (total += price.price), 0)
  );
  let sum = 0;
  totalPrice.forEach((element) => {
    sum += element;
  });
  const allDishes = newOrder.map((dish) =>
    dish.dishes.map((all) => {
      return all.name + ",";
    })
  );

  return (
    <div
      class="card"
      style={{
        marginLeft: "720px",
        marginTop: "140px",
        fontFamily: "Cursive",
        width: "500px",
        height: "auto",
      }}
    >
      <img
        src="https://img.freepik.com/premium-vector/thank-you-your-order-simple-hand-drawn-lettering-vector-text-illustration-logo-label-design_499817-501.jpg?w=2000"
        style={{ width: "499px", height: "200px" }}
        class="card-img-top"
        alt="..."
      />
      <ul>
        {newOrder.map((one) => (
          <div class="card-body" key={one.id} style={{ textAlign: "left" }}>
            <h5 class="card-title">
              name:{one.first_name} {one.last_name}
            </h5>
            <h5 class="card-title">Phone:{one.phone}</h5>
            <h5 class="card-title">Order time:{one.time}</h5>
            <h5 class="card-title">Order address:{one.address}</h5>
            <h5 class="card-title">Order number:{one.id}</h5>
            <h5 class="card-title">Order price:{sum}</h5>
            <h5 class="card-title">Dishes:{allDishes}</h5>
            <br />
          </div>
        ))}
      </ul>
      <h5 style={{ marginLeft: "115px" }}>we would like to see you again</h5>
      <button
        type="button"
        class="btn btn-outline-dark"
        onClick={() => window.location.assign("/")}
      >
        go back to main page
      </button>
    </div>
  );
}

export default Receipt;

import React from "react";
import { useNavigate } from "react-router-dom";
function Cart({ filteredOrder, deleteDish, deleted }) {
  const navigate = useNavigate();
  const totalPrice = filteredOrder.map((dish) =>
    dish.reduce((total, price) => (total += price.price), 0)
  );
  let sum = 0;
  totalPrice.forEach((element) => {
    sum += element;
  });
  return (
    <div
      class="card"
      style={{
        width: "700px",
        marginLeft: "580px",
        marginTop: "100px",
        height: "auto",
      }}
    >
      <h1 style={{ fontSize: 50, fontFamily: "Cursive" }}>My cart</h1>

      <div class="card-body">
        <ul class="list-group list-group-flush">
          {filteredOrder.map((dish) =>
            dish.map((one) => (
              <li
                class="list-group-item"
                key={one.id}
                style={{ fontSize: 18, fontFamily: "Cursive" }}
              >
                <div>
                  Dish name:{one.name}, Price:{one.price}
                  <div style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      onClick={() => deleteDish(one.id)(deleted(one.id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h1>Total price: {sum}</h1>
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
          onClick={() => navigate("/info")}
        >
          Fill info
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
          onClick={() => navigate("/order")}
        >
          Back to menu
        </button>
      </div>
    </div>
  );
}

export default Cart;

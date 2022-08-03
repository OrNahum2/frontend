import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Order({
  filterDishesByCategory,
  filteredDishes,
  filterOrderById,
  setFilteredDishes,
  selectDishes,
  filteredOrder,
}) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:8000/category/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const filterDishBySearch = () => {
    fetch(`http://127.0.0.1:8000/dish/?search=${search}`)
      .then((res) => res.json())
      .then((data) => setFilteredDishes(data));
  };
  const totalPrice = filteredOrder.map((dish) =>
    dish.reduce((total, price) => (total += price.price), 0)
  );
  let sum = 0;
  totalPrice.forEach((element) => {
    sum += element;
  });

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ fontFamily: "Cursive" }}
      >
        <div class="container-fluid">
          <button type="button" class="btn btn-outline-danger">
            <Link to="/" style={{ color: "white" }}>
              Buffet
            </Link>
          </button>

          <ul id="myNav">
            <li class="nav-item">
              <div
                class="nav-link active"
                aria-current="page"
                style={{ marginLeft: "1380px" }}
              >
                <Link to="/cart/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="white"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </div>
            </li>

            <div
              class="nav-link active"
              style={{
                marginTop: "-50px",
                marginLeft: "1200px",
                color: "white",
              }}
            >
              <h5>Total price: {sum}</h5>
            </div>
          </ul>
          <li class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              class="btn btn-outline-light"
              type="submit"
              onClick={filterDishBySearch}
            >
              Search
            </button>
          </li>
        </div>
      </nav>
      <div className="row">
        <div className="col-2">
          <h1
            style={{
              marginLeft: "50px",
              marginTop: "10px",
              fontFamily: "cursive",
              color: "white",
            }}
          >
            Category
          </h1>
          <ul>
            {categories.map((category) => (
              <div className="col" key={category.id}>
                <div
                  className="card"
                  style={{
                    width: "250px",
                    marginLeft: "40px",
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "solid",
                  }}
                >
                  <img
                    src={category.imageUrl}
                    style={{
                      objectFit: "fill",
                      width: "auto",
                      height: "150px",
                    }}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      style={{
                        fontFamily: "cursive",
                      }}
                      onClick={() => filterDishesByCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className="row">
            {filteredDishes.map((dishes) => (
              <div
                key={dishes.id}
                className="card"
                style={{
                  width: "450px",
                  marginLeft: "60px",
                  marginTop: "88px",
                  backgroundColor: "white",
                  border: "solid",
                }}
              >
                <img
                  src={dishes.imageUrl}
                  style={{
                    objectFit: "fill",
                    width: "auto",
                    height: "250px",
                  }}
                  alt=""
                />
                <div
                  className="card-body"
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontFamily: "cursive",
                  }}
                >
                  <h5>{dishes.name}</h5>
                  <h5>price:{dishes.price}</h5>
                  {dishes.isVegeterian ? (
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src="https://static.vecteezy.com/system/resources/previews/002/300/792/original/vegan-icon-bio-ecology-organic-logos-label-tag-green-leaf-free-vector.jpg"
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {dishes.isGlutenFree ? (
                    <img
                      style={{ width: "60px", height: "40px" }}
                      src="https://findvectorlogo.com/wp-content/uploads/2018/06/gluten-free-vector-logo.png"
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <h5>{dishes.description}</h5>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() =>
                    selectDishes(dishes.id)(filterOrderById(dishes.id))
                  }
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;

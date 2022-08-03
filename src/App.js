import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Receipt from "./pages/Receipt";

function App() {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [filteredOrder, setFilteredOrder] = useState([]);
  const [newDish, setNewDish] = useState([]);
  const [newOrder, setNewOrder] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/dish/`)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setFilteredDishes(data);
      });
  }, []);

  const filterReciept = (number) => {
    fetch(`http://127.0.0.1:8000/orders/?search=${number}`)
      .then((res) => res.json())
      .then((data) => setNewOrder(data));
  };
  

  const filterDishesByCategory = (category_id) => {
    fetch(`http://127.0.0.1:8000/dish?category=${category_id}`)
      .then((res) => res.json())
      .then((data) => setFilteredDishes(data));
  };
  const filterOrderById = (dish_id) => {
    if (newDish.includes(dish_id)) {
    } else {
      fetch(`http://127.0.0.1:8000/dish?id=${dish_id}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredOrder((prevState) => {
            return [...prevState, data];
          });
        });
    }
  };
  const deleteDish = (id) => {
    setFilteredOrder((current) =>
      current.map((dish) =>
        dish.filter((one) => {
          return one.id !== id;
        })
      )
    );
  };

  const deleted = (id) => {
    setNewDish((current) =>
      current.filter((one) => {
        return one !== id;
      })
    );
  };

  const selectDishes = (id) => {
    setNewDish((prevState) => {
      return [...prevState, id];
    });
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />} />
          <Route
            path="order/"
            element={
              <Order
                filterDishesByCategory={filterDishesByCategory}
                filteredDishes={filteredDishes}
                filterOrderById={filterOrderById}
                selectDishes={selectDishes}
                setFilteredDishes={setFilteredDishes}
                filteredOrder={filteredOrder}
              />
            }
          />
          <Route
            path="cart/"
            element={
              <Cart
                filteredOrder={filteredOrder}
                deleteDish={deleteDish}
                deleted={deleted}
              />
            }
          />
          <Route
            path="info/"
            element={<Info newDish={newDish} filterReciept={filterReciept} />}
          />
          <Route path="receipt/" element={<Receipt newOrder={newOrder} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

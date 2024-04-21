import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
  
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={12} />
      <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='pizzas/funghi.jpg' price={12} /> */}
    </main>
  )
}

function Pizza(props) {
  return (
      <li className="pizza">
          <img src={props.pizzaOjb.photoName} alt={props.pizzaOjb.name} />
          <div>
            <h3>{props.pizzaOjb.name}</h3>
            <p>{props.pizzaOjb.ingredients}</p>
            <span>{props.pizzaOjb.price}</span>
          </div>
      </li>
  )
}

function Footer() {
  // const hour = new Date().getHours()
  // const openHour = 12
  // const clouseHour = 22
  // const isOpen = hour >= openHour && hour <= clouseHour

  // if (hour >= openHour && hour <= clouseHour) {
  //   alert("We're currently open!")
  // } else {
  //   alert("Sorry, we're closed")
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  )
  //return React.createElement("footer", null, "We're currently open!")
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);
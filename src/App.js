import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar/Navbar";
import Routes from "./Routes/Routes";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        id: uuid(),
        name: "Азар",
        age: 6,
        facts: ["Верный и умный друг!", "Чистюля", "Любит следить за птичками"],
        image:
          "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: uuid(),
        name: "Тоби",
        age: 3,
        facts: ["Задорный мальчик", "Обожает гречку"],
        image:
          "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: uuid(),
        name: "Барбос",
        age: 2,
        facts: [
          "Будущий сторож",
          "Любит играть в прятки.",
          "Обожает косточку!",
        ],
        image:
          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: uuid(),
        name: "Космо",
        age: 1,
        facts: ["Игривый малыш", "Любит детей", "Собирает палки"],
        image:
          "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
      },
      {
        id: uuid(),
        name: "Чикс",
        age: 5,
        facts: ["Отличный друг на всю жизнь!", "Любит играть в прятки."],
        image:
          "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;

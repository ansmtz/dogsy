import React, { Component } from "react";
import { translit } from "gost-transliteration";
import { Switch, Route, Redirect } from "react-router-dom";
import Dogs from "../Dogs/Dogs";
import DogDetails from "../DogDetails/DogDetails";

class Routes extends Component {
  render() {
    const getDog = (props) => {
      const name = props.match.params.name;
      const currentDog = this.props.dogs.find(
        (dog) => translit(dog.name.toLowerCase()) === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <Dogs dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;

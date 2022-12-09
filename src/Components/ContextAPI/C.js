import React, { Component } from "react";
import myContext from "./Context";

export default class C extends Component {
  render() {
    return (
      <div>
        <h2>C Component</h2>



        <myContext.Consumer>
          {(username) => {
            return (
              <>
                <h2> {username.name} </h2>
                <h2> {username.city} </h2>
              </>
            )
          }}
        </myContext.Consumer>
      </div>


    );
  }
}

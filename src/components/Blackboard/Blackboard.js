import React, { Component } from "react";
import BlackboardHeader from "./BlackboardHeader/BlackboardHeader";
import BlackboardNav from "./BlackboardNav/BlackboardNav";

export default class Blackboard extends Component {
  render() {
    return (
      <div>
        <BlackboardNav />
        <BlackboardHeader />      
      </div>
    );
  }
}

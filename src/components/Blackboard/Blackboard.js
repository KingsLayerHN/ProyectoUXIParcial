import React, { Component } from "react";
import BlackboardHeader from "./BlackboardHeader/BlackboardHeader";
import BlackboardNav from "./BlackboardNav/BlackboardNav";
import BlackboardTask from "./BlackboardTask/BlackboardTask";

export default class Blackboard extends Component {
  render() {
    return (
      <div>
        <BlackboardNav />
        <BlackboardTask />
        
      </div>
    );
  }
}

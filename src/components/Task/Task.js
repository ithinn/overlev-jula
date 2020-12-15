import React from "react";
import Moment from "moment";

//Brukes til å opprette nye objekter i oppgavelista
class Task {
    constructor(what, who, when, className) {
      this.oppgave = what;
      this.ansvar = who;
      this.frist = Moment(when).format("DD/MM");
      this.className = className;
      this.id = "key" + Math.floor(Math.random()*1000);
    }
  }
  export default Task
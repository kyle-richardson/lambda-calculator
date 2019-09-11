import React from "react";
import "./App.css";

import Display from "./components/DisplayComponents/Display"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Numbers from  "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"

import {numbers, operators, specials, operValues} from "./data"

// Don't forget to import any extra css/scss files you build into the correct component

import Logo from "./components/DisplayComponents/Logo";

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      display: '',
      isDone: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (obj) => {
    const keyObject = {
      value: obj.key,
      className: ''
    }
    // console.log(keyObject.value)
    if(keyObject.value==="Enter") {
      keyObject.value= '='
    }
    if(keyObject.value==="x" || keyObject.value==="X" ) {
      keyObject.value= '*'
    }
    if(keyObject.value==="Backspace") {
      keyObject.value= 'CE'
    }
    if(numbers.includes(keyObject.value)) {
      keyObject.className = "number-button"
    } 
    else if(operValues.includes(keyObject.value)) {
      keyObject.className = "operator-button"
    }
    else if(specials.includes(keyObject.value)) {
      keyObject.className = "special-button"
    }
    !(keyObject.className==='') && this.handleChange(keyObject)
  }

  handleChange = (button)=> {

    const {value, className} = button
    
    if(className==="number-button") {
      if(this.state.isDone) {
        this.setState({
          display: value,
          isDone: false
        })
      }
      else {
        this.setState({display: this.state.display+value})
      }
    }

    if (className==="operator-button") {
      this.setState({
        isDone: false
      })
      this.handleOperators(button)
    }

    if (className==="special-button") {
      this.setState({
        isDone: false
      })
      this.handleSpecials(button)
    }
    
  }

  handleOperators = (button)=> {
    const {value} = button
    value==="=" ? 
      this.handleEqual() : 
      this.setState({
        display: this.state.display+value
      }
    )
  }

  handleSpecials= (button)=> {
    const {value} = button
    if(value==='C') {
      this.setState({display: ''})
    }
    if(value==='+/-') {
      this.setState({display: this.state.display*(-1)})
      isNaN(this.state.display) && 
        this.setState({
          display: 'error',
          isDone: true
        })
    }
    if(value==='%') {
      this.setState({display: this.state.display+value})
    }
    if(value==='CE') {
    
      //this doesnt seem to work with backspace 
      //keystroke.  works with the CE button.
      if(this.state.isDone) {
        this.setState({
          display: '',
          isDone: true
        })
      }
      else {
        this.setState({
        display: this.state.display.slice(0, -1)
        })
      }
    }
    
  }

  handleEqual = () => {
    try {
      this.setState({
          display: (eval(this.state.display) || '' ) + "",
          isDone: true
      })
    } 
    catch (e) {

      this.setState({
          display: "error",
          isDone: true
      })
  }
  }
 
 

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  render() {
    return (
      <div className="container">
        <Logo />
        <div className="App">
          <Display display={this.state.display} />
          <Specials onClick={this.handleChange}/>
          <Numbers onClick={this.handleChange}/>
          <Operators onClick={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default App;

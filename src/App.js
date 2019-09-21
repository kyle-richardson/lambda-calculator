import React from "react";
import "./App.css";

import Display from "./components/DisplayComponents/Display"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Numbers from  "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import History from "./components/DisplayComponents/History"

import {numbers, specials, operValues} from "./data"

import Logo from "./components/DisplayComponents/Logo";

//repurposed functional component App to be class component for practice.

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      display: '',
      isDone: false,
      history: [],
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  clearHistory = () => {
    this.setState({
      history: []
    })
  }

  handleKeyDown = (obj) => {
    const keyObject = {
      value: obj.key,
      className: ''
    }
    if(keyObject.value==="Enter") {
      keyObject.value= '='
    }
    if(keyObject.value==="x" || keyObject.value==="X" ) {
      keyObject.value= '*'
    }
    if(keyObject.value==="Backspace") {
      obj.preventDefault()
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
    !(keyObject.className==='') && this.handleChange(undefined,keyObject)
  }

  //allows 2 types of parameters, e is an event object (mouse click), 
  //obj is a direct object with value and className added as attributes,
  //taken from keydown window listener
  handleChange = (e,obj)=> {
    let tempObj = ''
    e ? tempObj = e.target : tempObj = obj;
    const {value, className} = tempObj
    
    if(className.includes("number-button")) {
      if(this.state.isDone) {
        this.setState({
          display: value,
          isDone: false
        })
      }
      else if(this.state.display==='0'){
        this.setState({display: value})
      }
      else{
        this.setState({display: this.state.display+value})
      }
    }

    if (className.includes("operator-button")) {
      this.setState({
        isDone: false
      })
      this.handleOperators(tempObj)
    }

    if (className==="special-button") {
      this.setState({
        isDone: false
      })
      this.handleSpecials(tempObj)
    }
    
  }

  handleOperators = (button)=> {
    const {value} = button
    value==="=" 
      ? this.handleEqual() 
      : this.setState({
        display: this.state.display+value
      }
    )
  }

  handleSpecials= (button)=> {
    const {value} = button

    //clear display
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

      //remove last input
      else {
        this.setState({
        display: this.state.display.slice(0, -1)
        })
      }
    }
    
  }

  handleEqual = () => {
    try {
      // eslint-disable-next-line
      const result = eval(this.state.display) 

      //doesnt add to history if it's just a number, nothing to eval
      if(this.state.display!==`${result}`){
        this.setState({
          display: `${result}`,
          isDone: true,
          history: [...this.state.history, this.state.display + ` = ${result}`]
        })
      }

      //still resets when equals is pressed, so next number will replace display
      else {
        this.setState({
          isDone:true
        })
      }
    } 
    catch (e) {

      this.setState({
          display: "error",
          isDone: true
      })
  }
  }

  render() {
    return (
      <div className="container">
        <div className="history-container">
            <History history={this.state.history} clearHistory={this.clearHistory}/>
        </div>
        <section className="calculator-section">
          <Logo />
          <div className="display-container"> 
              <Display display={this.state.display} />
          </div>
          <div className="App">
            <div className="joined-container">
              <Specials onClick={this.handleChange}/>
              <Numbers onClick={this.handleChange}/>
            </div>
            <div className="operators-container">
              <Operators onClick={this.handleChange}/>
            </div>
          </div>
        </section>
      </div>
        
    )
  }
}

export default App;

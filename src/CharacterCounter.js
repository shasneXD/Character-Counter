import React from 'react'
import './CharacterCounter.css'

class CharacterCounter extends React.Component {
    constructor() {
      super();
      //value: input value and length: length of characters in the input
      this.state = { value: "", length: 0 }
    }

    //handleChange function will be called everytime there is a change in the textarea input
    //this function extracts the value of the input given to the text-area and calculates the length of the input
    handleChange(event) {
      //a new state object(newAttributes) is used so as to keep the component state object immutable
      var newAttributes = Object.assign({}, this.state, {value: event.target.value, length: event.target.value.replace(/\s/g, '').length});
      this.setState(newAttributes);
    }

    render() {
      return(
        <div className="container">
          <textarea className="textInput"
          value={this.state.value}
          onChange={this.handleChange.bind(this)} rows={10}/>
          <h1 className="lengthText">Total Characters:{this.state.length}</h1>
        </div>
      );
    }
}
export default CharacterCounter;

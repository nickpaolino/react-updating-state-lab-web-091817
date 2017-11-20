import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleClick(){
    const newCount = this.state.timesClicked + 1

    this.setState(
      Object.assign({}, this.state,
        {
          timesClicked: newCount
        }
      )
    )
  }

  render(){
    return (
      <div>
        <h2>{this.state.timesClicked}</h2>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }
}

export default DigitalClicker

const React = require('react');

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
    this.handleClicked = this.handleClicked.bind(this)
  }

  handleClicked(){
    this.setState({
      timesClicked: (this.state.timesClicked += 1)
    })
  }

  render(){
    debugger
    return <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
  }

}


module.exports = DigitalClicker

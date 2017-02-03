const React = require('react');

class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleBitrateClick = this.handleBitrateClick.bind(this)
    this.handleResolutionClick = this.handleResolutionClick.bind(this)
}

  handleBitrateClick(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  handleResolutionClick(){
    this.setState({
      settings: Object.assign({}, this.state.settngs, {video: {resolution: '720p'} })
    })
  }


  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}></button>
        <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}></button>
      </div>
    )
  }
}


module.exports = YouTubeDebugger

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state =
      {
        errors: [],
        user: null,
        settings:
        {
          bitrate: 8,
          video:
          {
            resolution: '1080p'
          }
        }
      }
  }

  setBitrate(){
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setResolution(){
    this.setState({
      settings: {
        bitrate: 12,
        video:
        {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.setBitrate.bind(this)} className="bitrate">Bitrate</button>
        <button onClick={this.setResolution.bind(this)} className="resolution">Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger

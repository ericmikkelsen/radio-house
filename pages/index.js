import Controls from '../components/Controls'
import Layout from '../components/Layout' 
import TrackList from '../components/TrackList' 
import {Component} from 'react'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      browser: false,
      files: [],
      track: 0,
    };
  }

  componentDidMount (){
    // this sets the 
    this.setState({ browser: true });
    this.URL = window.URL || window.webkitURL
    this.audio = document.createElement('audio');

    // songs
    this.play = () => { this.audio.play() }
    this.pause = () => { this.audio.pause() }
    this.nextTrack = () => { this.playTrack( ( this.state.track + 1 ) ) }
    this.previousTrack = () => { this.playTrack( ( this.state.track + 1 ) ) }
  }
  playTrack = ( index ) => {
    if( this.state.browser ){
      const file = this.state.files[index]
      this.setState({track: index})
      this.audio.src = this.URL.createObjectURL(file)
      this.play()
    }
  }
  loadFiles = ( event ) => {
    let newFiles = Object.values( event.target.files )
    let oldFiles = this.state.files
    let files = oldFiles.concat(newFiles)
    this.setState( { files:  files } )
  }

  render() {
    return (
      <Layout>
        <Controls 
          loadFiles={this.loadFiles} 
          play={this.play}
          pause={this.pause}
          nextTrack={this.nextTrack}
          previousTrack={this.previousTrack}
        />
        { this.state.files.length > 0 && 
          <TrackList 
            files={ this.state.files } 
            playTrack={ this.playTrack } 
          />
        }
      </Layout>
    )
  }
}
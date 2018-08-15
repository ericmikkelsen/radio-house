import {Component} from 'react'
import Controls from '../components/Controls'
import Layout from '../components/Layout' 
import TrackList from '../components/TrackList' 
import universalParse from 'id3-parser/lib/universal'

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
    this.audio = document.createElement('audio')

    // songs
    this.play = () => { this.audio.play() }
    this.pause = () => { this.audio.pause() }
    this.nextTrack = () => {this.playTrack((this.state.track + 1))}
    this.previousTrack = () => {this.playTrack((this.state.track - 1))}
    
    this.audio.addEventListener( 'ended', this.nextTrack );
  }
  playTrack = ( index = undefined ) => {
    if( this.state.browser ){
      this.setState({track: index})
      const file = this.state.files[index]
      this.audio.src = this.URL.createObjectURL(file)
      this.play()
    }
  }

  addID3Tags = ( file ) => {
    file.id3 = id3(file);
    return file;
  }

  addID3TagToFile = ( file ) => {
    return universalParse( file )
    .then(tag => {
        file.id3 = tag
        return file
    })
    .catch(err => {
      console.log(err)
    })
  }

  loadFiles = ( event ) => {
    let newFiles = Object.values( event.target.files ).map(this.addID3TagToFile);
    Promise.all(newFiles).then( newFiles => {
      console.log(newFiles);
      let oldFiles = this.state.files
      let files = oldFiles.concat(newFiles)
      this.setState( { files:  files } )
    })
  }

  render() {
    return (
      <Layout>
        <Controls 
          loadFiles={this.loadFiles} 
          pause={this.pause}
          play={this.play}
          nextTrack={this.nextTrack}
          previousTrack={this.previousTrack}
        />
        { this.state.files.length > 0 && 
          <TrackList
            currentTrack={this.state.track}
            files={this.state.files}
            playTrack={this.playTrack}
          />
        }
      </Layout>
    )
  }
}
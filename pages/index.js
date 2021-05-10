import {Component} from 'react'

import Controls from '../components/Controls'
import Layout from '../components/Layout' 
import TrackList from '../components/TrackList'

import toKebabCase from '../modules/toKebabCase'
import registerServiceWorker from '../modules/registerServiceWorker'
import * as jsmediatags from '../node_modules/jsmediatags/dist/jsmediatags.min.js'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      browser: false,
      files: [],
      track: undefined,
    };
  }

  componentDidMount (){
    // this sets the 
    registerServiceWorker();
    this.setState({ browser: true });
    this.URL = window.URL || window.webkitURL
    this.audio = document.createElement('audio')

    // songs
    this.play = () => { this.audio.play() }
    this.pause = () => { this.audio.pause() }
    this.nextTrack = () => {this.playTrack((this.state.track + 1))}
    this.previousTrack = () => {this.playTrack((this.state.track - 1))}
    
    this.audio.addEventListener( 'ended', this.nextTrack );
    this.audio.volume = .1;
  }
  playTrack = ( index = undefined ) => {
    if( this.state.browser ){
      this.setState({track: index})
      const file = this.state.files[index]
      location.hash = "#" + file.id;
      this.audio.src = this.URL.createObjectURL(file)
      this.play()
    }
  }

  addID3Tags = ( file ) => {
    file.id3 = id3(file);
    return file;
  }

  prepFile = ( file, i ) => {
      return new Promise((resolve, reject) => {
        jsmediatags.read(file, {
          onSuccess: tag => {
            file.id3 = tag.tags
            let name = toKebabCase(tag.tags.title)
            let trackNumber = i + 1
            file.id = `track-${trackNumber}-${name}`

            resolve(file)
          },
          onError: error =>  {
            console.error(error)
            reject(error)
          }
      });
    })
  }

  loadFiles = ( event ) => {

    let newFiles = Object.values( event.target.files )
    let oldFiles = this.state.files;
    let files = oldFiles.concat(newFiles).map(this.prepFile);
    Promise.all(files).then( files => {
      this.setState( { files:  files } )
      if(this.state.track = undefined){
        this.playTrack(0);
      }
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
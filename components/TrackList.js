import Track from './Track'
import toCamelCase from '../modules/toCamelCase'

export default (props) =>
    <section className="TrackList__wrapper">
        <ul className="TrackList">
            { props.files.map( (file, index) => 
                <li key={ toCamelCase('track ' + file.name) } >
                    {props.currentTrack === index && 
                    <p className="TrackList__currentlyPlaying">
                        <svg 
                            aria-hidden="true"
                            className="TrackList__icon" 
                            fill="currentColor"
                            width="8" height="8" viewBox="0 0 8 8" 
                        >
                            <use xlinkHref='#play-icon'></use>
                        </svg> 
                        Currently Playing
                    </p>}
                    <Track 
                        file={file} 
                        index={index}
                        playTrack={props.playTrack}
                    />
                </li>
            )}
        </ul>
    </section>
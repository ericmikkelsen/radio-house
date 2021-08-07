import Track from './Track'
import toCamelCase from '../modules/toCamelCase'

export default (props) =>
    <section className="TrackList__wrapper">
        <ul className="TrackList">
            { props.files.map( (file, index) => 
                <li key={ toCamelCase(`track ${file.id}`) } id={ file.id } >
                    {props.currentTrack === index && 
                    <p className={`TrackList__currentlyPlaying ${props.isPlaying ? '' : 'TrackList__currentlyPlaying--paused'}`}>
                        Currently {props.isPlaying ? 'playing' : 'paused'}:
                    </p>}
                    <Track 
                        file={file} 
                        index={index}
                        playTrack={props.playTrack}
                        current={props.currentTrack === index}
                    />
                </li>
            )}
        </ul>
    </section>
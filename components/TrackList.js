import Track from './Track'
import toCamelCase from '../modules/toCamelCase'

export default (props) =>
    <section>
        <h2>Track List</h2>
        <ul className="TrackList">
            { props.files.map( (file, index) => 
                <li key={ toCamelCase('track ' + file.name) } >
                    <Track 
                        file={file} 
                        index={index}
                        playTrack={props.playTrack}
                    />
                </li>
            )}
        </ul>
    </section>
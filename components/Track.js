import Button from './Button'

export default (props) =>
    <div class={props.current ? 'Track__current' : ''}>
        <Button
            className="Track"
            text={props.file.id3.title}
            onClick={ () => props.playTrack(props.index) }
        />
        <p className="Track__meta">
            {props.file.id3.artist && 
                'by ' + props.file.id3.artist
            }
            {props.file.id3.artist && props.file.id3.album && 
                <br/>
            }
            {props.file.id3.album && 
                'on ' + props.file.id3.album
            }
        </p>
    </div>
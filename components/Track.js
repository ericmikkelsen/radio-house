import Button from './Button'

export default (props) =>
    <React.Fragment>
        <Button
            className="Track"
            text={props.file.id3.title}
            onClick={ () => props.playTrack(props.index) }
        />
        <p className="Track__meta">
            by {props.file.id3.artist} <br/>on {props.file.id3.album}
        </p>
    </React.Fragment>
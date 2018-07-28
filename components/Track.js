import Button from './Button'

export default (props) =>
    <Button
        text={props.file.name}
        onClick={ () => props.playTrack(props.index) }
    />
import Button from './Button'
import Input from './Input'
import toCamelCase from '../modules/toCamelCase'
import toKebabCase from '../modules/toKebabCase'

export default (props) =>
  <menu>

    <Button
        id={'play'}
        onClick={props.play}
        text='Play'
    />
    <Button
        id={'pause'}
        onClick={props.pause}
        text='Pause'
    />
    <Button
        id={'next'}
        onClick={props.nextTrack}
        text='Next'
    />
    <Button
        id={'previous'}
        onClick={props.previousTrack}
        text='Previous'
    />
    <Input
        id="file-upload" 
        label="Add directory or song files"
        multiple={true}
        onChange={props.loadFiles}
        type="file"
        webkitdirectory="true"
    />
  </menu>

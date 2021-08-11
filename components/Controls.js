import Button from './Button'
import Icon from './Icon'
import {createRef} from 'react'
export default (props) => {
  const fileInput = createRef();
  
  const handleClick = () => {
    fileInput.current.click();
  }
  return (
    <menu className="Controls">
      <input
        id="file-upload" 
        multiple={true}
        onChange={props.loadFiles}
        type="file"
        hidden
        ref={fileInput}
    />
      <Button
        className="Control"
        id={'play'}
        onClick={handleClick}
      >
        <span className={`Control__label`}>
          Add
        </span>
        <Icon
          ariaHidden='true'
          className='Control__icon'
          icon='add'
        />
      </Button>
      <Button
        className={`Control ${props.isPlaying ? 'Control__active' : ''}`}
        id={'play'}
        onClick={props.play}
      >
        <span className={`Control__label`}>
          {props.isPlaying ? 'Playing' : 'Play'}
        </span>
        <Icon
          ariaHidden='true'
          className='Control__icon'
          icon='play'
        />
      </Button>
      <Button
        className={`Control ${props.isPlaying ? '' : 'Control__active'}`}
        id={'pause'}
        onClick={props.pause}
      >
        <span className={`Control__label`}>
          {props.isPlaying ? 'Pause' : 'Paused'}
        </span>
        <Icon
          ariaHidden='true'
          className='Control__icon'
          icon='pause'
        />
      </Button>
      <Button
        className={'Control'}
        id={'previous'}
        onClick={props.previousTrack}
      >
        <span className="Control__label">Previous</span>
        <Icon
          ariaHidden='true'
          className='Control__icon'
          icon='previous'
        />
      </Button>
      <Button
        className={'Control'}
        id={'next'}
        onClick={props.nextTrack}
      >
        <span className="Control__label">Next</span>
        <Icon
          ariaHidden='true'
          className='Control__icon'
          icon='next'
        />
      </Button>
    </menu>
  )
}

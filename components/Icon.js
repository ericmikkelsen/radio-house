export default (props) =>
    <svg 
        aria-hidden={props.ariaHidden || undefined}
        className={props.className || undefined}
        fill={props.fill || 'currentColor'}
        width="8" height="8" viewBox="0 0 8 8"
    >
        <use xlinkHref={`#${props.icon}-icon`}></use>
    </svg>
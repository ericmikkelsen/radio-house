export default (props) =>
    <button
        className={ props.className || undefined }
        id={ props.id || undefined }
        onClick={ props.onClick || undefined }
        type={ props.type || undefined }
    >
        {props.text || props.children}
    </button>
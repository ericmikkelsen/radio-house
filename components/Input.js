
export default (props) =>
    <label htmlFor={props.id}>
        {props.label}
        <input
            accessKey={props.accessKey || undefined}
            autoFocus={props.autoFocus || undefined}
            capture={props.capture || undefined}
            className={props.className || undefined}
            disabled={props.disabled || undefined}
            id={props.id}
            multiple={props.multiple || undefined}
            name={props.id}
            onChange={props.onChange || undefined}
            placeholder={props.placeholder || undefined}
            type={props.type}
            webkitdirectory={props.webkitdirectory || undefined}
        />
    </label>
    

export default (props) =>
    <label 
        className={props.className || undefined}
        htmlFor={props.id} 
        >
        {props.label}
        <input
            accessKey={props.accessKey || undefined}
            autoFocus={props.autoFocus || undefined}
            capture={props.capture || undefined}
            className={(props.className ? `${props.className}__input` : undefined) }
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
    
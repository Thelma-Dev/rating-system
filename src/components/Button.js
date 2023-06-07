

function Button(props) {
    return (
        <button className={`${props.isPrimary? 'show-dialog-button' : 'close-dialog'}`} onClick={props.isPrimary? props.showDialog : props.hideDialog}>
            {props.isPrimary? "Show Dialog": "Close Dialog"}
        </button>
    );
}

export default Button;
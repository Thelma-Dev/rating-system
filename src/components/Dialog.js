import Button from "./Button";

function Dialog(props) {
  return (
    <div className={`show-dialog ${props.isVisible ? 'show-visibility': 'hide-visibility'}`}>
        <p>React projects are fun! They bring out the creativity in you</p>
        <Button
        isPrimary = {props.isPrimary}
        hideDialog = {props.hideDialog}
        />
    </div>
  );
}

export default Dialog;
import { FaStar } from "react-icons/fa";


function Star(props) {
    return (
        <FaStar className={`star-element ${props.isSelected ? 'rate': ''}`} onClick={props.handleRating}/>
    );
}

export default Star;
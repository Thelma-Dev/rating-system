import Star from "./Star";
import { useState } from 'react';

function StarRating() {
        
    const [starRate, setStarRate] = useState(0);
    const [ratingText, setRatingText] = useState('');
    

    const handleRating = (id) => {
        setStarRate(id)
        handleRatingText(id);
    }


    const handleRatingText = (id) => {
        switch(id) {
            case 1 :
                setRatingText('Poor');
                break;
            case 2 :
                setRatingText('Average');
                break;
            case 3 :
                setRatingText('Good');
                break;
            case 4 :
                setRatingText('Very good');
                break;
            case 5 :
                setRatingText('Excellent');
                break;
            default: 
                setRatingText('No star rating');
        }

    }

    // The starArray acts as a default parameter as map requires a function with a current value 
    const stars = Array(5).fill().map((starArray,i) => 
        <Star key={i + 1} 
            handleRating={() => handleRating(i + 1)} 
            isSelected = {i < starRate}
        />
    );


    return (
        <div className="star-display">
            <div className="stars">
                {stars}
            </div>
            {ratingText ? <h2>{ratingText}</h2> : <h2>No star rating</h2> }
        </div>
    );
}

export default StarRating;
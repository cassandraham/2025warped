import { useState } from "react";
import Gap from "../Gap/Gap";
import "./List.css";

function List({ bands, color, predictions, setPredictions }) {
    const [showPrev, setShowPrev] = useState(false);

    const toggle = () => {
        setShowPrev(prev => !prev);
    }
    const handleInputChange = (e) => {
        console.log(e)
        const newPredcitions = { ...predictions };
        newPredcitions[e.target.dataset.cell] = e.currentTarget.value;
        setPredictions(newPredcitions);
    }
    console.log(predictions)
    return (
        <div className="list" style={{ backgroundColor: color }}>
            <div className="checkbox-container"><label>Show previously guessed<input type="checkbox" checked={showPrev} onChange={toggle}></input></label></div>
            {bands.map((band, i) => {
                return (
                    <Gap width={band.width} band={band.name} cell={i} onChange={handleInputChange} prediction={predictions[i] || ""} key={i} showGuessed={showPrev}></Gap>
                )
            })}
        </div>
    )

}

export default List;



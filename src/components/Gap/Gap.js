import "./Gap.css";

function Gap({ width, band, prediction, onChange, cell, showGuessed }) {

    let bandName = band;
    let fontColor = "#fff";
    if (bandName && prediction && showGuessed) {
        bandName = prediction;
        if (band.toLowerCase().trim() === prediction.toLowerCase().trim()) {
            fontColor = "#abff97";
        }
        else {
            fontColor = "#ffcc96";
        }
    }
    return (
        <div className="gap" style={{ width: width + 'px', color: fontColor }}>
            {bandName ? bandName : <input type="text" onChange={onChange} data-cell={cell} value={prediction}></input>}
        </div>
    );
}

export default Gap;
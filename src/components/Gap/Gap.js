import "./Gap.css";

function Gap({ width, band }) {
    console.log(width)
    return (
        <div className="gap" style={{ width: width + 'px' }}>
            {band ? band : <input type="text"></input>}
        </div>
    );
}

export default Gap;
import Gap from "../Gap/Gap";
import "./List.css";

function List({ bands, color }) {
    console.log(bands)
    return (
        <div className="list" style={{ backgroundColor: color }}>
            {bands.map((band, i) => {
                return (
                    <Gap width={band.width} band={band.name} key={i} ></Gap>
                )
            })}
        </div>
    )

}

export default List;



import "../style/resualt.css"
import Circle from "./Circle";
import Cross from "./Cross";



function Resualt({winners}) {
    return(

        <div className="resualt">
            {winners === "CIRCLE" && <Circle/>}
            {winners === "CROSS" && <Cross/>}
        </div>

    )
}

export default Resualt;
import '../style/square.css';
import Circle from './Circle';
import Cross from './Cross';


function Square({position,value,takeTurn}) {

    function handelClick(){
        if (value=== 'EMPTY') takeTurn(position)
    }
    return(

        <div className="square" onClick={handelClick}>
            {value=== 'CIRCLE' && <Circle/>}
            {value=== 'CROSS' && <Cross/>}
        </div>

    )
}

export default Square;
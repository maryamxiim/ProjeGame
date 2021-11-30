// import reactDom from "react-dom";
import { render } from "@testing-library/react";
import react from "react";
import { Component, useState } from "react";
import Comp from "./Component";
import "./style.css"

// const App = ()=> {
//     return (<div>
//         helllo wporld
//         <Comp name="maryam" number="22" />
//         <Comp name="zim" number="44" />
//     </div>)
// }
const x = x
const y = y 

// class App extends Component{
//     state ={
//         products :[
//             {name:"Maryam", number:"234"},
//             {name:"Maede", number:"567"},
//             {name:"Mahsa", number:"890"},
//         ]
//     };

//     clickHandeler = ()=> {
//         this.setState ({
//             products :[
//                 {name:"Maryam", number:"456"},
//                 {name:"Maede", number:"244"},
//                 {name:"Mahsa", number:"868"},
//             ],
//         });
//     };

    const App = ()=> {
        const [title, setTitle] = useState("Click here");

// const clickHandeler = ()=>{
//     setProducts([
//         {title:"x"},
//         {title:"y"},])

// }
const Square = (props) => (
	<button onClick={props.onClick}>{props.value}</button>
);


        return(
            <div>
                <div className="caption">Next Player:</div>
            <div className="squretotal">
            <Square onClick={() => setTitle("New title")}> 
            {/* {this.state.products.map((product)=>{
                return <Comp  name={product.name} number={product.number} />;
                
            })
            } */}
            </Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            
        </div>
        </div>
        );
    }
    // render() {
    //     return(
    //         <div>
    //         <h1>Heloo Every body</h1>
    //         {this.state.products.map((product)=>{
    //             return <Comp  name={product.name} number={product.number} />;
                
    //         })
    //         }
    //         <button onClick={this.clickHandeler}>Change number</button>
    //     </div>
    //     );
    // }

export default App;
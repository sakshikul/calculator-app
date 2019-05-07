import React from "react";
import "./Calculator.css";


class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            calculator : "clear",
            result : 0
        }
    }

    componentDidMount(){

    }


    componentWillUnmount(){

    }
    render(){
        return(
            <div className = "calculator">
            <table className = "calculator__table">
                <tbody className = "calculator__table__body">
                <tr  className = "result row">
                    <th colspan="4">{this.state.result}</th>
                </tr>
                <tr className = "clear row">
                    <td colspan="3">{this.state.calculator}</td>
                    <td className= "red">&divide; </td>
                </tr>
                <tr className = "row">
                   <td>7</td>
                   <td>8</td>
                   <td>9</td>  
                   <td className = "red">-</td>
                </tr>
                <tr className = "row">
                   <td>4</td>
                   <td>5</td>
                   <td>6</td>
                   <td className = "red"> + </td>
                </tr>
                <tr className = "row">
                   <td>1</td>
                   <td>2</td>
                   <td>3</td>
                   <td className = "red"> = </td>
                </tr>
                </tbody>
            </table>
            
            </div>
        )
    }



}


export default Calculator;
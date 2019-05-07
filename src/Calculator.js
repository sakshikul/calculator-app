import React from "react";
import "./Calculator.css";


class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            calculator : "clear",
            result : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

    }


    componentWillUnmount(){

    }
    handleClick(){
        console.log("typed number");
        
    }
    render(){
        return(
            <div className = "calculator">
            <table className = "calculator__table">
                <tbody className = "calculator__table__body">
                <tr  className = "result row">
                    <th colSpan="4">{this.state.result}</th>
                </tr>
                <tr className = "clear row">
                    <td colSpan="2">{this.state.calculator}</td>
                    <td onClick = {this.handleClick}>0</td>
                    <td onClick = {this.handleClick} className= "red">&divide; </td>
                </tr>
                <tr className = "row">
                   <td onClick = {this.handleClick}>7</td>
                   <td onClick = {this.handleClick}>8</td>
                   <td onClick = {this.handleClick}>9</td>  
                   <td onClick = {this.handleClick} className = "red">-</td>
                </tr>
                <tr className = "row">
                   <td onClick = {this.handleClick}>4</td>
                   <td onClick = {this.handleClick}>5</td>
                   <td onClick = {this.handleClick}>6</td>
                   <td onClick = {this.handleClick} className = "red"> + </td>
                </tr>
                <tr className = "row">
                   <td onClick = {this.handleClick}>1</td>
                   <td onClick = {this.handleClick}>2</td>
                   <td onClick = {this.handleClick}>3</td>
                   <td onClick = {this.handleClick} className = "red"> = </td>
                </tr>
                </tbody>
            </table>
            
            </div>
        )
    }



}


export default Calculator;
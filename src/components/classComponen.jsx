'use client';
import {Component} from "react";

class ButtonComponent extends Component{    
   
    handleClick=()=>{
        return(
               alert(`berhasil${this.props.nama}`)
        )      
    }
    render(){
        return <button className="bg-blue-500 rounded text-black font-bold" 
        onClick={this.handleClick}>Click Me</button>
    }
}
export{ButtonComponent}
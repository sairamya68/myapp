import { Component } from "react";

export default class CircleComponent extends Component{
    render(){
        return(
            <>
            <div style={{border:"1px solid black" ,borderRadius:"50%", backgroundColor:"green",height:"100px", width:"100px"}}></div>
            </>
        )
    }
}
import React from "react";
export default function Box(props) {
    //const [on, setOn] = React.useState(props.on)
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    // function toggole() {
    //     setOn(prevOn => !prevOn)
      
    // }  
    //console.log(toggole)
    return (
        <div 
            style={styles} 
            className="box" 
            //onClick={()=>props.toggle(props.id)}
            onClick={props.toggle}
            >

        </div>
    )
}
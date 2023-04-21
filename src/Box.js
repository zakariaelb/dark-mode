import React from "react";
export default function Box(props){
    const [on, setOn] = React.useState(props.on)
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    function toggole() {
        setOn(prevOn + !prevOn)
    }
    return (
        <div style={styles} className="box" onClick={toggole}></div>
    )
}
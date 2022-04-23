import React from 'react'

const ScoreCard = (props) =>{
let style = {
    color :"red",
    backgroundColor: "blue",
    
}

if (props.name === "Pavan") {
    style.color = "blue";
    style.backgroundColor = "pink"

}

return(

    <div>
        <h1 style={style}>{props.name}</h1>
        
    </div>
)

}

export default ScoreCard
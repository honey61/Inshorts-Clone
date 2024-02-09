import React from "react";
import "./style/PopupMenu.css"

const popop=(props)=>{
    return(props.targets)?(
    <div className="popup">
        <button className="button2" onClick={()=>props.setagets(false)}>X</button>
        <div className="popupinner">
          < a className="anc" href="mailto:hs8126246@gmail.com">managment team</a>
          < a className="anc" href="mailto:hs8126246@gmail.com">News team</a>


        </div>
    </div>) :" "
}

export default popop;
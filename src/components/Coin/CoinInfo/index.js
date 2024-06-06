import React, { useState } from 'react';
import "./styles.css";

function CoinInfo({heading,desc}) {
    const [changedesc,setchangedesc] = useState(true)

    const shortdesc = desc.slice(0,300) + "......." + "<p style = {{ color: 'var(--grey)'}}> Read More......</p>";
    const longdesc = desc + "<p style = {{ color: 'var(--grey)'}}> Read Less......</p>";



  return (
    <div className = "grey-wrapper">
        <h2 className = "coin-info-heading" >{heading}</h2>
        {desc.length > 300 ?
        <p onClick = {() => setchangedesc(!changedesc)} className = "coin-info-desc" dangerouslySetInnerHTML={{__html:changedesc?shortdesc:longdesc}}/>:
        <p className = "coin-info-desc" style = {{cursor:"default"}}>{desc}</p>
        }
    </div>
  )
}

export default CoinInfo
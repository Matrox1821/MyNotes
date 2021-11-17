import "./FooterItem.css";
import React,{Fragment} from "react";
export const FooterItem=(props)=>{
  return (
    <Fragment>
      <a
          className="image-link"
          href={`${props.link}`} target="_blank"
        >
        <img className="image-social" src={props.item} alt={`${props.alter}`}/>
        </a>
    </Fragment>
  )
}

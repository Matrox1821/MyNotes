import "./FooterItem.css";
import React,{Fragment} from "react";
import { Link } from "react-router-dom";
export const FooterItem=(props)=>{
  return (
    <Fragment>
      <Link
          className="image-link"
          to={`${props.link}`} target="_blank"
        >
        <img className="image-social" src={props.item} alt={`${props.alter}`}/>
        </Link>
    </Fragment>
  )
}

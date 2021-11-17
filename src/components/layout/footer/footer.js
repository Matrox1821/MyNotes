import { FooterNav } from "./footer-nav";
import { FooterItem } from "./footer-nav/footer-item";
import Facebook from "./Facebook.svg";
import Instagram from "./Instagram.svg";
import Twitter from "./Twitter.svg";
import Mail from "./Mail.svg";
import React,{Fragment} from "react";
  export const Footer = () => {
    return (
          <Fragment>
              <FooterNav>
                <FooterItem link="https://www.facebook.com/marcos.villar.78" item={Facebook} alter="facebook imagen"/>
                <FooterItem link="https://www.instagram.com/majin.project/"  item={Instagram} alter="instagram imagen"/>
                <FooterItem link="https://twitter.com/hashtag/RenuncioGallardo?src=hashtag_click" item={Twitter } alter="tritter imagen"/>
                <FooterItem link="mailto:trejofranco19@gmail.com;matiasgg1821@gmail.com?Subject=Hola" item={Mail} alter="mail imagen"/>
              </FooterNav>
          </Fragment>
    );
  };
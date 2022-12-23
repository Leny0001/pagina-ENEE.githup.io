import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Texto,
  Section,
  Icon,
  FooterIcon,
  Parrafo,
  TParrafo,
} from "./FooterStyles";

import Icono from '../../img/facebookIcon.png'
import Twe from '../../img/twetter.jpg'
import Insta from '../../img/instagramIcon.png'
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <TParrafo>Lorem</TParrafo>
            <Parrafo>
            <p style={{textColor: "black", fontSize: "18px", marginTop: "-20%", textAlign: "left"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perspiciatis labore obcaecati tenetur aut nesciunt voluptate,
            </p>
            </Parrafo>
          </Column>
          <Column>
            <Heading>Lorem</Heading>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
          </Column>
          <Column>
            <Heading>Lorem</Heading>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
            <FooterLink href="#">ipsum</FooterLink>
          </Column>
          
        </Row>
      </Container>

      <Section>
      
          <Texto>
          ©2022 Copyright: lorem.com
          </Texto>
          <Icon>
            <FooterIcon href="https://www.google.com" target="_blank">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "5px",}}>
                  <img src={Icono} alt=""></img>
                </span>
              </i>
            </FooterIcon>
            <FooterIcon href="https://www.google.com" target="_blank">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                <img src={Insta} alt=""></img>
                </span>
              </i>
            </FooterIcon>
            <FooterIcon href="https://www.google.com" target="_blank">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                <img src={Twe} alt=""></img>
                </span>
              </i>
            </FooterIcon>
          </Icon>
      </Section>
 
    </Box>
  );
};
export default Footer;
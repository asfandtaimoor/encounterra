import React from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";

import { Instagram, Facebook, Twitter, Discord } from "@/Icons/index";

function Footer() {
  return (
    <div className="ts-footer">
      <Container fluid className="ts-container">
        <div className="ts-footer__main">
          <div className="d-flex flex-column align-items-center ts-gap-20">
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              className={""}
              width={145}
              height={100}
              priority
            />

            <FooterLinks />
            <p className="text-center text-white mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industries standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai
            </p>
            <FooterSocialMedia />
          </div>
        </div>
        <hr />
        <div className="ts-footer__footer pb-4">
          <p className="text-center mb-0 text-white">
            &copy; Copyright Encounterra
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

function FooterSocialMedia() {
  return (
    <nav className="d-flex  gap-4 flex-wrap">
      <a className="ts-footer__sociallink" href="#">
        <Discord Width="31" Height="25" Fill="#999999" />
      </a>
      <a className="ts-footer__sociallink" href="#">
        <Facebook Width="31" Height="25" Fill="#999999" />
      </a>
      <a className="ts-footer__sociallink" href="#">
        <Instagram Width="31" Height="25" Fill="#999999" />
      </a>
      <a className="ts-footer__sociallink" href="#">
        <Twitter Width="31" Height="25" Fill="#999999" />
      </a>
    </nav>
  );
}
function FooterLinks() {
  return (
    <nav className="d-flex  gap-4 gap-md-5 flex-wrap">
      <a className="ts-footer__link" href="#">
        Home
      </a>
      <a className="ts-footer__link" href="#">
        About
      </a>
      <a className="ts-footer__link" href="#">
        Service
      </a>
      <a className="ts-footer__link" href="#">
        Contact Us
      </a>
    </nav>
  );
}

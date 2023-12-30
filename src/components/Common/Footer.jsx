import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

import { Instagram, Facebook, Twitter, Discord } from "@/Icons/index";
import Link from "next/link";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="d-flex  gap-4 gap-md-5 flex-wrap">
      <Link className="ts-footer__link" href="/">
        Home
      </Link>
      <button className="ts-footer__link btn py-0" onClick={handleShow}>
        About
      </button>
      <a className="ts-footer__link" href="mailto:noreply@encounterra.com">
        Contact Us
      </a>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          temporibus facere mollitia error praesentium perferendis culpa
          repellat dolorum voluptas inventore, fugiat, fuga provident ratione
          voluptatum ex perspiciatis aperiam magnam officiis!
        </Modal.Body>
        <Modal.Footer>
          <button className="btn ts-btn-primary" onClick={handleClose}>
            Okay Thanks
          </button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

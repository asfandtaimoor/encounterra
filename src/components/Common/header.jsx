import React from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";

import { ExclamationCircle, Person } from "@/Icons/index";

function Header() {
  return (
    <div className="ts-header">
      <Container fluid className="ts-container">
        <div className="ts-header__main d-flex justify-content-between align-items-center">
          <div className=" ts-gap-20">
            <Image
              src="/images/logo-sm.png"
              alt="Vercel Logo"
              className={""}
              width={77}
              height={79}
              priority
            />
          </div>

          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <p className="text-uppercase mb-0">200 credits</p>
              <ExclamationCircle Width="18" Height="16" Stroke="#008170" />
            </div>
            <div class="vr"></div>
            <p className="text-uppercase mb-0">user name</p>
            <Person Width="36" Height="36" Fill="#fff" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;

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

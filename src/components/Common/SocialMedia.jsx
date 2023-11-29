import React from "react";
import { Instagram, Facebook, Twitter, Discord } from "@/Icons/index";

function SocialMedia() {
  return (
    <div className="ts-floating-social">
      <nav className="d-flex flex-column  gap-2 flex-wrap">
        <a className="ts-floating-social__sociallink" href="#">
          <Discord Width="31" Height="25" Fill="#999999" />
        </a>
        <a className="ts-floating-social__sociallink" href="#">
          <Facebook Width="31" Height="25" Fill="#999999" />
        </a>
        <a className="ts-floating-social__sociallink" href="#">
          <Instagram Width="31" Height="25" Fill="#999999" />
        </a>
        <a className="ts-floating-social__sociallink" href="#">
          <Twitter Width="31" Height="25" Fill="#999999" />
        </a>
      </nav>
    </div>
  );
}

export default SocialMedia;

import React, { useState } from "react";
import Image from "next/image";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { ExclamationCircle } from "@/Icons/index";

const MapList = [
  {
    title: "Blank",
    imageSrc: "/images/pngwing.png",
  },
  {
    title: "obstacles",
    imageSrc: "/images/obstacles.png",
  },
  {
    title: "Obstacles & difficulties",
    imageSrc: "/images/obstacles-difficulties.png",
  },
  {
    title: "hallway",
    imageSrc: "/images/hallway.png",
  },
];
function Index() {
  const [selectedMap, setSelectedMap] = useState(null);
  const handleMapCardClick = (index) => {
    setSelectedMap(index);
  };

  return (
    <div>
      <section>
        <div className="mx-auto" style={{ maxWidth: "920px" }}>
          <Header />
          <div className="row row-cols-sm-2">
            {MapList.map((map, index) => {
              return (
                <div className="mb-4" key={index}>
                  <MapCard
                    Title={map.title}
                    ImageSrc={map.imageSrc}
                    onClick={() => handleMapCardClick(index)}
                    isSelected={selectedMap === index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-outline-secondary">
            BACK
          </button>
          <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default Index;

function Header() {
  return (
    <header className="ts-map-card__header mb-08">
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 gap-sm-3">
        <h1 className="ts-fs-22 mb-0 text-uppercase text-center text-sm-start">
          Startting Point
        </h1>{" "}
        <div class="vr d-none d-sm-block my-1"></div>
        <div className="flex-grow-1 px-4">
          <div className="row   align-items-center">
            <div class="col-6 col-lg-5 form-check d-flex align-items-center gap-3">
              <input
                class="form-check-input"
                type="radio"
                name="startingpoint"
                id="RANDOM"
                defaultChecked
              />
              <label
                class="form-check-label ts-fs-22 fw-medium text-uppercase d-flex align-items-center gap-2"
                for="RANDOM"
              >
                <span>RANDOM</span>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#008170"
                    />
                  </span>
                </OverlayTrigger>
              </label>
            </div>
            <div class="col-6 col-lg-5 form-check d-flex align-items-center gap-3">
              <input
                class="form-check-input"
                type="radio"
                name="startingpoint"
                id="TWOSIDES1"
              />
              <label
                class="form-check-label ts-fs-22 fw-medium text-uppercase d-flex align-items-center gap-2"
                for="TWOSIDES1"
              >
                <span>TWO SIDES</span>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#008170"
                    />
                  </span>
                </OverlayTrigger>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
function MapCard({ Title, ImageSrc, onClick, isSelected }) {
  return (
    <div
      className={`ts-map-card h-100 d-flex flex-column ${
        isSelected ? "ts-map-card--selected" : ""
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="ts-map-card__tag  fw-bold ts-fs-22 ts-text-gray-2 d-flex align-items-center justify-content-center gap-2 text-uppercase">
          <span className="text-wrap">{Title}</span>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
          >
            <span className="d-inline-block ">
              <ExclamationCircle Width="20" Height="20" Stroke="#6B7280" />
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <Image
        src={ImageSrc}
        alt="Vercel Logo"
        className="w-100 h-auto my-auto"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

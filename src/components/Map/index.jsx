import React from "react";
import Image from "next/image";

import { Form } from "react-bootstrap";
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
function index() {
  return (
    <div>
      <section>
        <Header />
        <div className="mx-auto" style={{ maxWidth: "920px" }}>
          <div className="row row-cols-sm-2">
            {MapList.map((map, index) => {
              return (
                <div className="mb-4" key={index}>
                  <MapCard Title={map.title} ImageSrc={map.imageSrc} />
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

export default index;

function Header() {
  return (
    <header className="ts-map-card__header mb-08">
      <div className="d-flex flex-wrap align-items-center gap-3">
        <h1 className="ts-fs-22 mb-0 text-uppercase">Startting Point</h1>{" "}
        <div class="vr"></div>
        <div className="d-flex  gap-3 align-items-center">
          <div class="form-check d-flex align-items-center gap-3">
            <input
              class="form-check-input"
              type="radio"
              name="startingpoint"
              id="RANDOM"
              checked
            />
            <label
              class="form-check-label ts-fs-22 fw-medium text-uppercase"
              for="RANDOM"
            >
              RANDOM
            </label>
          </div>
          <div class="form-check d-flex align-items-center gap-3">
            <input
              class="form-check-input"
              type="radio"
              name="startingpoint"
              id="TWOSIDES1"
            />
            <label
              class="form-check-label ts-fs-22 fw-medium text-uppercase"
              for="TWOSIDES1"
            >
              TWO SIDES
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
function MapCard({ Title, ImageSrc }) {
  return (
    <div className="ts-map-card h-100 d-flex flex-column">
      <div className="text-center">
        <span className="ts-map-card__tag  fw-bold ts-fs-22 ts-text-gray-2">
          <span className="d-inline-flex align-items-center gap-2 text-uppercase">
            {Title}
            <ExclamationCircle Width="20" Height="20" Stroke="#6B7280" />
          </span>
        </span>
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

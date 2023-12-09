import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { ExclamationCircle, PlusFill, MinusFill } from "@/Icons/index";

function Simulation() {
  return (
    <div>
      <div className="mb-08">
        <RecourceLevel />
      </div>
      <Results />
    </div>
  );
}

export default Simulation;

function RecourceLevel() {
  return (
    <section className="ts-card-2">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center text-uppercase mb-07">
        resourse qngagment level
      </h1>
      <div className="mx-auto" style={{ maxWidth: "920px" }}>
        <div className="row row-cols-sm-2 mb-10 gap-4 gap-sm-0">
          <div>
            <div className="ts-card-1">
              <h1 className="ts-fs-30 ts-text-skyblue text-center text-uppercase fw-bold mb-09">
                Blue Team
              </h1>

              <ul className="list-unstyled p-0">
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueAllIn"
                      defaultChecked
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamblueAllIn"
                    >
                      All In
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueModerate"
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamblueModerate"
                    >
                      Moderate
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueConservative"
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamblueConservative"
                    >
                      Conservative
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="ts-card-1">
              <h1 className="ts-fs-30 ts-text-red text-center text-uppercase fw-bold mb-09">
                Red Team
              </h1>

              <ul className="list-unstyled p-0">
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredAllIn"
                      defaultChecked
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamredAllIn"
                    >
                      All In
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredModerate"
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamredModerate"
                    >
                      Moderate
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div class="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredConservative"
                    />
                    <label
                      class="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      for="teamredConservative"
                    >
                      Conservative
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Iteration />
      </div>

      <div className="d-flex justify-content-center gap-4">
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-outline-secondary">
          Back
        </button>
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary">
          Simulate
        </button>
      </div>
    </section>
  );
}

function Iteration() {
  const [iterationValue, setIterationValue] = useState(150);

  const handleIncrement = () => {
    setIterationValue(iterationValue + 1);
  };

  const handleDecrement = () => {
    if (iterationValue > 0) {
      setIterationValue(iterationValue - 1);
    }
  };

  return (
    <div className="ts-map-card__header mb-08">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <h1 className="ts-fs-22 ts-text-gray-5 mb-0 text-uppercase">
          SIMULATION ITRATION
        </h1>{" "}
        <div className="d-flex  gap-3 align-items-center ">
          <div className="d-flex gap-3">
            <button className="btn border-0 p-0" onClick={handleDecrement}>
              <MinusFill Width="28" Height="28" Fill="white" />
            </button>
            <input
              style={{ width: "140px" }}
              type="number"
              className="form-control text-center fw-bold"
              value={iterationValue}
              readOnly
            />
            <button className="btn border-0 y p-0" onClick={handleIncrement}>
              <PlusFill Width="28" Height="28" Fill="white" />
            </button>
          </div>
          <div className="d-flex align-items-center gap-3">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
            >
              <span className="d-inline-block ">
                <ExclamationCircle Width="18" Height="16" Stroke="#6B7280" />
              </span>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}
function Results() {
  return (
    <section className="ts-card-2">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        RESULTS
      </h1>

      <div className="mb-06">
        <TsProgressBar BlueTeamProgress={76} RedTeamProgress={24} />
      </div>
      <div className="mx-auto ts-text-gray-2" style={{ maxWidth: "920px" }}>
        <div className="row row-cols-sm-2 mb-10">
          <div>
            <div className="ts-card-1">
              <h1 className="ts-fs-30 ts-text-skyblue text-center text-uppercase fw-bold mb-07">
                Blue Team
              </h1>

              <ul className="list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 1 Died</span>
                  <span>: 12</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 2 Died</span>
                  <span>: 12</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 3 Died</span>
                  <span>: 1</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>VIctories </span>
                  <span>: 104</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>Classification </span>
                  <span>: HAND</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="ts-card-1">
              <h1 className="ts-fs-30 ts-text-red text-center text-uppercase fw-bold mb-07">
                Blue Team
              </h1>
              <ul className="list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 1 Died</span>
                  <span>: 12</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 2 Died</span>
                  <span>: 12</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 3 Died</span>
                  <span>: 1</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>VIctories </span>
                  <span>: 104</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>Classification </span>
                  <span>: HAND</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-4">
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary">
          DOWNLOAD LOGS
        </button>
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-outline-secondary">
          NEW SIMULATE
        </button>
      </div>
    </section>
  );
}
function TsProgressBar({ BlueTeamProgress, RedTeamProgress }) {
  return (
    <div className="ts-progress-bar">
      <div
        className="ts-blue-team text-center"
        style={{ width: `${BlueTeamProgress}%` }}
      >
        {BlueTeamProgress}%
      </div>
      <div
        className="ts-red-team text-center"
        style={{ width: `${RedTeamProgress}%` }}
      >
        {RedTeamProgress}%
      </div>
    </div>
  );
}

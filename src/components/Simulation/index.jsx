import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { ExclamationCircle, PlusFill, MinusFill } from "@/Icons/index";

export default function Simulation() {
  const [iterationValue, setIterationValue] = useState(50);

  const pollForResult = () => {
    const { lastJobId } = this.state;
    if (!lastJobId) return;

    fetch(`https://encounterra.com/api/get-simulation-result/${lastJobId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          // Simulation finished successfully
          return response.json().then((data) => {
            console.log("Data:", data);
            // setState({
            //   lastJobId: data.null,
            //   lastSimulationStatus: "success",
            //   lastBlueVictories: data.BLUE.VICTORIES,
            //   lastRedVictories: data.RED.VICTORIES,
            //   lastBlueAtLeastOneDied: data.BLUE.AT_LEAST_ONE_DIED,
            //   lastRedAtLeastOneDied: data.RED.AT_LEAST_ONE_DIED,
            //   lastBlueAtLeastTwoDied: data.BLUE.AT_LEAST_TWO_DIED,
            //   lastRedAtLeastTwoDied: data.RED.AT_LEAST_TWO_DIED,
            //   lastBlueAtLeastThreeDied: data.BLUE.AT_LEAST_THREE_DIED,
            //   lastRedAtLeastThreeDied: data.RED.AT_LEAST_THREE_DIED,
            //   logLink: data.log_link,
            // });
          });
        } else if (response.status === 202) {
          // Simulation still in progress
          setTimeout(this.pollForResult, 4000); // Poll every 4 seconds.
        } else if (response.status === 500 || response.status === 400) {
          // Simulation failed
          return response.json().then((data) => {
            this.setState({ lastSimulationStatus: "failed" });
          });
        } else {
          return Promise.reject(
            new Error(`Unexpected status code: ${response.status}`)
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        this.setState({ lastSimulationStatus: "failed" });
      });
  };

  const combatantTeam = useSelector((state) => state.CombatantTeam);
  function HandleSubmit() {
    // Extract IDs from the team objects
    console.log(combatantTeam);
    const blueTeamIds = combatantTeam.blue.map((combatant) => combatant.id);
    const redTeamIds = combatantTeam.red.map((combatant) => combatant.id);
    const data = {
      iterations: parseInt(iterationValue),
      blue: blueTeamIds,
      red: redTeamIds,
    };
    console.log("Data:", data);
    // fetch("https://encounterra.com/api/simulate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (response.status === 403 || response.status === 401) {
    //       return response.json().then((errorData) => {
    //         console.log("Error Data:", errorData);
    //         throw new Error(errorData.message);
    //       });
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState(
    //       {
    //         lastJobId: data.job_id,
    //         lastSimulationStatus: "in-progress",
    //         errorMessage: null,
    //       },
    //       () => {
    //         pollForResult();
    //       }
    //     );
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     this.setState({
    //       lastSimulationStatus: "failed",
    //       logLink: null,
    //       errorMessage: error.message,
    //     });
    //   });
  }

  return (
    <div>
      <div className="mb-08">
        <RecourceLevel
          handleSubmit={HandleSubmit}
          iterationValue={iterationValue}
          setIterationValue={setIterationValue}
        />
      </div>
      <Results />
    </div>
  );
}

function RecourceLevel({ iterationValue, setIterationValue, handleSubmit }) {
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
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueAllIn"
                      defaultChecked
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamblueAllIn"
                    >
                      All In
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueModerate"
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamblueModerate"
                    >
                      Moderate
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamblue"
                      id="teamblueConservative"
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamblueConservative"
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
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredAllIn"
                      defaultChecked
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamredAllIn"
                    >
                      All In
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredModerate"
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamredModerate"
                    >
                      Moderate
                    </label>
                  </div>
                </li>
                <li className="mb-05">
                  <div className="form-check ts-check-card d-flex align-items-center gap-3 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="teamred"
                      id="teamredConservative"
                    />
                    <label
                      className="form-check-label ts-text-gray-5 ts-fs-22 fw-medium text-uppercase w-100"
                      htmlFor="teamredConservative"
                    >
                      Conservative
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Iteration
          iterationValue={iterationValue}
          setIterationValue={setIterationValue}
        />
      </div>

      <div className="d-flex justify-content-center gap-4">
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-outline-secondary">
          Back
        </button>
        <button
          className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary"
          onClick={handleSubmit}
        >
          Simulate
        </button>
      </div>
    </section>
  );
}

function Iteration({ iterationValue, setIterationValue }) {
  const handleIncrement = () => {
    setIterationValue(iterationValue + 50);
  };

  const handleDecrement = () => {
    if (iterationValue > 0) {
      setIterationValue(iterationValue - 50);
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
              type="text"
              className="form-control ts-form-control-number text-center fw-bold"
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

import React, { useState, useEffect } from "react";

import { Tooltip, Spinner, OverlayTrigger } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ExclamationCircle, PlusFill, MinusFill } from "@/Icons/index";
import axiosInstance from "@/axios";
import { toast } from "react-toastify";

export default function Simulation({ refresh }) {
  const [isMounted, setIsMounted] = useState(false);
  const [iterationValue, setIterationValue] = useState(50);
  const [lastJob, setLastJob] = useState([]);
  const [fetchingJob, setFetchingJob] = useState(false);
  const [jobState, setJobState] = useState(null);
  const combatantTeam = useSelector((state) => state.CombatantTeam);

  const pollForResult = async (lastJobId) => {
    if (!lastJobId) return;

    try {
      const response = await axiosInstance.get(
        `get-simulation-result/${lastJobId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          credentials: "include",
        }
      );

      if (response.status === 200) {
        // Simulation finished successfully
        const data = response.data;
        // console.log(data.BLUE);
        // console.log(data.BLUE);
        toast.success("Simulation Completed", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Set state based on response data
        setFetchingJob(false);
        setJobState({
          lastJobId: data.null,
          lastSimulationStatus: "success",
          lastBlueVictories: data.BLUE.VICTORIES,
          lastRedVictories: data.RED.VICTORIES,
          lastBlueAtLeastOneDied: data.BLUE.AT_LEAST_ONE_DIED,
          lastRedAtLeastOneDied: data.RED.AT_LEAST_ONE_DIED,
          lastBlueAtLeastTwoDied: data.BLUE.AT_LEAST_TWO_DIED,
          lastRedAtLeastTwoDied: data.RED.AT_LEAST_TWO_DIED,
          lastBlueAtLeastThreeDied: data.BLUE.AT_LEAST_THREE_DIED,
          lastRedAtLeastThreeDied: data.RED.AT_LEAST_THREE_DIED,
          logLink: data.log_link,
        });
      } else if (response.status === 202) {
        setFetchingJob(true);
        setTimeout(() => pollForResult(lastJobId), 4000); // Poll every 4 seconds.
      } else if (response.status === 500 || response.status === 400) {
        // Simulation failed
        const data = await response.json();
        toast.error(`Unexpected status code: ${response.status}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setJobState({ lastSimulationStatus: "failed" });
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Last Simulation Failed Fetch`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setJobState({ lastSimulationStatus: "failed" });
    }
  };

  const handleSubmit = async () => {
    // Extract IDs from the team objects
    const blueTeamIds = combatantTeam.blue.map((combatant) => combatant.id);
    const redTeamIds = combatantTeam.red.map((combatant) => combatant.id);
    const data = {
      iterations: parseInt(iterationValue),
      blue: blueTeamIds,
      red: redTeamIds,
    };

    try {
      const response = await axiosInstance.post("simulate", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 403 || response.status === 401) {
        const errorData = response.data || {};
        throw new Error(errorData.message);
      }

      const responseData = response.data || {};
      let lastJobId = responseData.job_id;
      // Set initial state for job status
      setLastJob({
        lastJobId: lastJobId,
        lastSimulationStatus: "in-progress",
        errorMessage: null,
      });

      // Start polling for result
      pollForResult(lastJobId);
    } catch (error) {
      console.error("Simulation error:", error);

      // Set state for failed simulation
      setLastJob({
        lastSimulationStatus: "failed",
        logLink: null,
        errorMessage: error.message,
      });
    }
  };

  useEffect(() => {
    if (isMounted) {
      // Code to run when refresh value changes after initial mount
      handleSubmit();
    } else {
      // Code to run on initial mount
      setIsMounted(true);
    }
  }, [refresh]);

  return (
    <div>
      <div className="mb-08">
        <RecourceLevel
          // handleSubmit={handleSubmit}
          iterationValue={iterationValue}
          setIterationValue={setIterationValue}
        />
      </div>

      <div>
        {/* Display JSON string representation of jobState */}
        {/* <pre>{jobState}</pre> */}
      </div>

      {/* Assuming Results is a component */}
      {fetchingJob ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {jobState && (
            <>
              {jobState.lastSimulationStatus === "success" ? (
                <Results jobState={jobState} />
              ) : (
                <div className="d-flex justify-content-center my-5">
                  <p>
                    Simulation Failed: Try again or change simulation
                    configuration
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
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
    <div className="ts-map-card__header ">
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
function Results({ jobState }) {
  return (
    <section className="ts-card-2">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        RESULTS
      </h1>

      <div className="mb-06">
        <TsProgressBar
          BlueTeamProgress={jobState.lastBlueVictories}
          RedTeamProgress={jobState.lastRedVictories}
        />
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
                  <span>: {jobState.lastBlueAtLeastOneDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 2 Died</span>
                  <span>: {jobState.lastBlueAtLeastTwoDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 3 Died</span>
                  <span>: {jobState.lastBlueAtLeastThreeDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>VIctories </span>
                  <span>: {jobState.lastBlueVictories}</span>
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
                  <span>: {jobState.lastRedAtLeastOneDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 2 Died</span>
                  <span>: {jobState.lastRedAtLeastTwoDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>At Least 3 Died</span>
                  <span>: {jobState.lastRedAtLeastThreeDied}</span>
                </li>
                <li className="d-flex justify-content-between mt-1">
                  <span>VIctories </span>
                  <span>: {jobState.lastRedVictories}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-4">
        <a
          className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary"
          href={jobState.logLink}
        >
          DOWNLOAD LOGS
        </a>
      </div>
    </section>
  );
}
function TsProgressBar({ BlueTeamProgress, RedTeamProgress }) {
  const total = BlueTeamProgress + RedTeamProgress;
  const bluePercentage = (BlueTeamProgress / total) * 100;
  const redPercentage = (RedTeamProgress / total) * 100;

  return (
    <div className="ts-progress-bar">
      <div
        className="ts-blue-team text-center"
        style={{ width: `${bluePercentage}%` }}
      >
        {bluePercentage.toFixed(0)}%
      </div>
      <div
        className="ts-red-team text-center"
        style={{ width: `${redPercentage}%` }}
      >
        {redPercentage.toFixed(0)}%
      </div>
    </div>
  );
}

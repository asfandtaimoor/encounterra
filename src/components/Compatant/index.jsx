import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateCombatantDefinition } from "@/redux/reducers/combatantsReducer";
import { useSelector } from "react-redux";

import {
  ExclamationCircle,
  Close,
  MinusSquare,
  PlusSquare,
  Search,
} from "@/Icons/index";
import CartIncrementDecrement from "./CartIncrementDecrement";
function index() {
  return (
    <div>
      <Combatants />
      <Results />
    </div>
  );
}

export default index;

function Combatants() {
  const [ActiveCombatants, setActiveCombatants] = useState(null);
  const dispatch = useDispatch();

  const configurations = [
    { title: "HP :", value: 15 },
    { title: "AC :", value: 8 },
    { title: "DC :", value: 256 },
  ];
  const SavingThrought = [
    { title: "str :", value: 15 },
    { title: "oex :", value: 8 },
    { title: "con :", value: 256 },
    { title: "cha :", value: 256 },
    { title: "wis :", value: 256 },
    { title: "int :", value: 256 },
  ];
  const SkillsData = [
    { title: "aTHLETICS :", value: 15 },
    { title: "Acrobatics : :", value: 8 },
    { title: "Stealth :", value: 256 },
  ];

  const combatantsDefinition = useSelector(
    (state) => state.combatantsDefinition
  );

  // const ActiveMonsters = combatantsDefinition[0];

  const fetchCombatants = async (accessToken) => {
    try {
      // Dispatch a loading action to set loading state to true
      dispatch({ type: "FETCH_COMBATANTS_START" });

      // Use axios or your preferred HTTP client to make the API call
      const response = await axios.get(
        "https://encounterra.com/api/combatant-definition",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Response:", response.data);

      const data = response.data;

      // Dispatch the combatantDefinition action to update state with the fetched data
      dispatch(updateCombatantDefinition(data));

      // Dispatch a success action or set loading state to false if needed
      dispatch({ type: "FETCH_COMBATANTS_SUCCESS" });
    } catch (error) {
      console.error("Fetch combatants error:", error);

      // Dispatch an error action to update state with the error message
      dispatch({
        type: "FETCH_COMBATANTS_FAILURE",
        payload: error.message || "An error occurred while fetching combatants",
      });

      // Propagate the error for the component to handle
      throw error;
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");

    if (accessToken) {
      fetchCombatants(accessToken);
    } else {
      console.error("Access token not available");
    }
  }, [dispatch]);

  useEffect(() => {
    if (combatantsDefinition) {
      setActiveCombatants(combatantsDefinition[0]);
    }
  }, [combatantsDefinition]);

  return (
    <section className="ts-card-2 mb-10">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        COMBATANTS
      </h1>

      {ActiveCombatants && (
        <>
          <p>Combatant Definition: {JSON.stringify(ActiveCombatants)}</p>
          <p>
            Combatant Definition:{" "}
            {JSON.stringify(ActiveCombatants.saving_throws.CHA)}
          </p>
        </>
      )}

      {ActiveCombatants && (
        <>
          <div className="mx-auto ts-text-gray-2 ts-card-1  mb-10">
            <div className="row gap-4 gap-lg-0 ">
              <div className="col-lg-5 ts-list-data-left pb-3 pb-lg-0">
                <ListData />
              </div>
              <div className="col-lg-7">
                <div className="mb-08">
                  <div className="d-flex gap-3 flex-wrap">
                    <CartIncrementDecrement
                      key={index}
                      Title={"HP"}
                      Value={ActiveCombatants.hp}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"AC"}
                      Value={ActiveCombatants.ac}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"DC"}
                      Value={ActiveCombatants.dc}
                    />
                  </div>
                </div>
                <div className="mb-08">
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    ability sources
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    {ActiveCombatants &&
                      ActiveCombatants.abilities.map((val, index) => (
                        <CartIncrementDecrement key={index} Title={val} />
                      ))}
                  </div>
                </div>
                <div className="mb-08">
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    saving throws
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    <CartIncrementDecrement
                      key={index}
                      Title={"CHA"}
                      Value={ActiveCombatants.saving_throws.CHA}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"CON"}
                      Value={ActiveCombatants.saving_throws.CON}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"DEX"}
                      Value={ActiveCombatants.saving_throws.DEX}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"INT"}
                      Value={ActiveCombatants.saving_throws.INT}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"STR"}
                      Value={ActiveCombatants.saving_throws.STR}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"WIS"}
                      Value={ActiveCombatants.saving_throws.WIS}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    Skills
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    <CartIncrementDecrement
                      key={index}
                      Title={"acrobatics"}
                      Value={ActiveCombatants.skills.acrobatics}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"athletics"}
                      Value={ActiveCombatants.skills.athletics}
                    />
                    <CartIncrementDecrement
                      key={index}
                      Title={"stealth"}
                      Value={ActiveCombatants.skills.stealth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Skills />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
            <button
              className="btn ts-btn ts-fs-20 fw-bold ts-btn-primary text-uppercase  py-2"
              style={{ lineHeight: "140%" }}
            >
              +add to
              <br /> <span className="ts-text-skyblue">blue team</span>
            </button>
            <button
              className="btn ts-btn ts-fs-20 fw-bold ts-btn-primary text-uppercase py-2 "
              style={{ lineHeight: "140%" }}
            >
              +add to <br />
              <span className="ts-text-red">red team</span>
            </button>
          </div>
        </>
      )}
    </section>
  );
}

function ListData() {
  const DataList = [
    {
      title: "Team",
      SubList: [
        {
          title: "Heros",
          data: ["brown bear", "snow white"],
        },
        {
          title: "level",
          data: ["brown bear", "snow white"],
        },
      ],
    },
    {
      title: "monsters",
      SubList: [
        {
          title: "Heros",
          data: ["brown bear", "snow white"],
        },
      ],
    },
    {
      title: "monsters",
      data: ["brown bear", "snow white"],
    },
  ];

  return (
    <div>
      <div className="ts-searchbar mb-3">
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn p-0 border-0 ts-search-btn">
          <Search Width="20" Height="20" />
        </button>
      </div>

      <div className="ts-data-list-container">
        {DataList.map((item, index) => {
          return <ListDetailsItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

function ListDetailsItem({ data }) {
  const [isListOpen, setListOpen] = useState(true);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };
  return (
    <div>
      <div className="ts-list">
        <button
          className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
          onClick={toggleList}
        >
          {isListOpen ? (
            <MinusSquare Width="20" Height="20" />
          ) : (
            <PlusSquare Width="20" Height="20" />
          )}
          {data.title}
        </button>

        {isListOpen && data.SubList && (
          <ul className="ts-list-data ps-5 list-unstyled">
            {data.SubList.map((subItem, index) => (
              <ListDetailsItem key={index} data={subItem} />
            ))}
          </ul>
        )}

        {isListOpen && data.data && (
          <ul className="ts-list-data ps-5 list-unstyled">
            {/* Render data elements */}
            {Object.entries(data.data).map(([key, value], index) => (
              <li key={index}>
                <h4 className="ts-fs-18 text-uppercase">{value}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <div className="ts-card-3 mb-5">
        <div className="d-flex gap-3 flex-wrap ">
          <div className="ts-skill-tag text-uppercase ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-2">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#6b7280"
                    />
                  </span>
                </OverlayTrigger>
                <h2 className="ts-fs-20 fw-bold mb-0">rocketless attack</h2>
              </div>
              <button className="btn p-0 border-0">
                <Close Width="14" Height="14" Fill="#353535" />{" "}
              </button>
            </div>
          </div>
          <div className="ts-skill-tag text-uppercase ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-2">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#6b7280"
                    />
                  </span>
                </OverlayTrigger>
                <h2 className="ts-fs-20 fw-bold mb-0">rocketless attack</h2>
              </div>
              <button className="btn p-0 border-0">
                <Close Width="14" Height="14" Fill="#353535" />{" "}
              </button>
            </div>
          </div>
          <div className="ts-skill-tag text-uppercase ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-2">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#6b7280"
                    />
                  </span>
                </OverlayTrigger>
                <h2 className="ts-fs-20 fw-bold mb-0">rocketless attack</h2>
              </div>
              <button className="btn p-0 border-0">
                <Close Width="14" Height="14" Fill="#353535" />{" "}
              </button>
            </div>
          </div>
          <div className="ts-skill-tag text-uppercase ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-2">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#6b7280"
                    />
                  </span>
                </OverlayTrigger>
                <h2 className="ts-fs-20 fw-bold mb-0">rocketless attack</h2>
              </div>
              <button className="btn p-0 border-0">
                <Close Width="14" Height="14" Fill="#353535" />{" "}
              </button>
            </div>
          </div>
          <div className="ts-skill-tag text-uppercase ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-2">
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                >
                  <span className="d-inline-block ">
                    <ExclamationCircle
                      Width="18"
                      Height="16"
                      Stroke="#6b7280"
                    />
                  </span>
                </OverlayTrigger>
                <h2 className="ts-fs-20 fw-bold mb-0">rocketless attack</h2>
              </div>
              <button className="btn p-0 border-0">
                <Close Width="14" Height="14" Fill="#353535" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results() {
  return (
    <section className="ts-card-2">
      <div className="mx-auto ts-text-gray-2">
        <div className="row row-cols-md-2 gap-4 gap-md-0 mb-10">
          <div>
            <div className="ts-card-1">
              <div className="d-flex justify-content-between gap-2 mb-06">
                <h1 className="ts-fs-30 ts-text-skyblue text-center text-uppercase fw-bold mb-0">
                  Blue Team
                </h1>
                <h1 className="ts-fs-20 ">3/6</h1>
              </div>

              <ul className="d-flex flex-column gap-3 list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="ts-card-1">
              <div className="d-flex justify-content-between gap-2 mb-06">
                <h1 className="ts-fs-30 ts-text-red text-center text-uppercase fw-bold mb-0">
                  RED Team
                </h1>
                <h1 className="ts-fs-20 ">3/6</h1>
              </div>
              <ul className="d-flex flex-column gap-3 list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span className="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-4">
        <button className="btn ts-btn ts-btn--lg fw-bold ts-btn-primary">
          NEXT
        </button>
      </div>
    </section>
  );
}

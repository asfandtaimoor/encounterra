import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch, useSelector } from "react-redux";

import { fetchCombatants } from "@/redux/reducers/combatants";

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

  const combatantsDefinition = useSelector(
    (state) => state.combatantsDefinition
  );

  // Check if combatantsDefinition is not null and has length greater than 0
  const ActiveMonsters =
    combatantsDefinition && combatantsDefinition.length > 0
      ? combatantsDefinition[0]
      : null;

  // // Now you can use ActiveMonsters in your component

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    dispatch(fetchCombatants());
    if (accessToken) {
      dispatch(fetchCombatants());
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
          {ActiveCombatants.saving_throws && (
            <p>
              Combatant Definition:{" "}
              {JSON.stringify(ActiveCombatants.saving_throws.CHA)}
            </p>
          )}
        </>
      )}

      {ActiveCombatants && (
        <>
          <div className="mx-auto ts-text-gray-2 ts-card-1  mb-10">
            <div className="row gap-4 gap-lg-0 ">
              <div className="col-lg-5 ts-list-data-left pb-3 pb-lg-0">
                <ListData combatantsDefinition={combatantsDefinition} />
              </div>
              <div className="col-lg-7">
                <div className="mb-08">
                  <div className="d-flex gap-3 flex-wrap">
                    <CartIncrementDecrement
                      Title={"HP"}
                      Value={ActiveCombatants.hp}
                    />
                    <CartIncrementDecrement
                      Title={"AC"}
                      Value={ActiveCombatants.ac}
                    />
                    <CartIncrementDecrement
                      Title={"DC"}
                      Value={ActiveCombatants.dc}
                    />
                  </div>
                </div>
                {/* <div className="mb-08">
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    ability sources
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    {ActiveCombatants &&
                      ActiveCombatants.abilities.map((val, index) => (
                        // <CartIncrementDecrement key={index} Title={val} />
                        <div key={index}>
                          <h5 className="ts-fs-3">{val}</h5>
                        </div>
                      ))}
                  </div>
                </div> */}
                <div className="mb-08">
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    saving throws
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    <CartIncrementDecrement
                      Title={"CHA"}
                      Value={ActiveCombatants.saving_throws.CHA}
                    />
                    <CartIncrementDecrement
                      Title={"CON"}
                      Value={ActiveCombatants.saving_throws.CON}
                    />
                    <CartIncrementDecrement
                      Title={"DEX"}
                      Value={ActiveCombatants.saving_throws.DEX}
                    />
                    <CartIncrementDecrement
                      Title={"INT"}
                      Value={ActiveCombatants.saving_throws.INT}
                    />
                    <CartIncrementDecrement
                      Title={"STR"}
                      Value={ActiveCombatants.saving_throws.STR}
                    />
                    <CartIncrementDecrement
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
                      Title={"acrobatics"}
                      Value={ActiveCombatants.skills.acrobatics}
                    />
                    <CartIncrementDecrement
                      Title={"athletics"}
                      Value={ActiveCombatants.skills.athletics}
                    />
                    <CartIncrementDecrement
                      Title={"stealth"}
                      Value={ActiveCombatants.skills.stealth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Skills ActiveCombatants={ActiveCombatants} />

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

// function ListData({ combatantsDefinitionReal }) {
// function ListData() {
//   const combatantsDefinition = [
//     {
//       abilities: ["Bite", "Claws", "PounceClaws", "Pounce"],
//       ac: 12,
//       class: "Monster",
//       dc: 0,
//       hp: 52,
//       level: 1,
//       name: "Saber-Toothed Tiger",
//       saving_throws: {
//         CHA: -1,
//         CON: 2,
//         DEX: 2,
//         INT: -4,
//         STR: 4,
//         WIS: 1,
//       },
//       skills: {
//         acrobatics: 2,
//         athletics: 4,
//         stealth: 0,
//       },
//       subclass: "Beast",
//     },
//     {
//       abilities: [
//         "Rapier",
//         "Shortbow",
//         "Ranged Attack",
//         "Cunning Action",
//         "Sneak Attack",
//       ],
//       ac: 16,
//       class: "Rogue",
//       dc: 15,
//       hp: 33,
//       level: 5,
//       name: "Assassin Rogue 5Lvl",
//       saving_throws: {
//         CHA: 1,
//         CON: 1,
//         DEX: 7,
//         INT: 4,
//         STR: -1,
//         WIS: 2,
//       },
//       skills: {
//         acrobatics: 7,
//         athletics: -1,
//         stealth: 10,
//       },
//       subclass: "Assassin",
//     },
//     {
//       abilities: ["Scimitar", "Shortbow"],
//       ac: 15,
//       class: "Monster",
//       dc: 0,
//       hp: 7,
//       level: 1,
//       name: "Goblin",
//       saving_throws: {
//         CHA: -1,
//         CON: 0,
//         DEX: 2,
//         INT: 0,
//         STR: -1,
//         WIS: -1,
//       },
//       skills: {
//         acrobatics: 2,
//         athletics: -1,
//         stealth: 0,
//       },
//       subclass: "Humanoid",
//     },
//     {
//       abilities: ["Scimitar", "Light Crossbow"],
//       ac: 12,
//       class: "Monster",
//       dc: 0,
//       hp: 11,
//       level: 1,
//       name: "Bandit",
//       saving_throws: {
//         CHA: 0,
//         CON: 1,
//         DEX: 1,
//         INT: 0,
//         STR: 0,
//         WIS: 0,
//       },
//       skills: {
//         acrobatics: 1,
//         athletics: 0,
//         stealth: 0,
//       },
//       subclass: "Humanoid",
//     },
//     {
//       abilities: ["Greataxe", "Greataxe recklessly"],
//       ac: 13,
//       class: "Monster",
//       dc: 0,
//       hp: 67,
//       level: 4,
//       name: "Berserker",
//       saving_throws: {
//         CHA: -1,
//         CON: 3,
//         DEX: 1,
//         INT: -1,
//         STR: 3,
//         WIS: 0,
//       },
//       skills: {
//         acrobatics: 1,
//         athletics: 3,
//         stealth: 0,
//       },
//       subclass: "Humanoid",
//     },
//     {
//       abilities: ["Bite", "Pack Tactics"],
//       ac: 14,
//       class: "Monster",
//       dc: 0,
//       hp: 37,
//       level: 1,
//       name: "Dire Wolf",
//       saving_throws: {
//         CHA: -2,
//         CON: 2,
//         DEX: 2,
//         INT: -4,
//         STR: 3,
//         WIS: 1,
//       },
//       skills: {
//         acrobatics: 2,
//         athletics: 3,
//         stealth: 0,
//       },
//       subclass: "Beast",
//     },
//     {
//       abilities: ["Scimitar", "Dagger", "Thrown Dagger", "Ranged Attack : 2"],
//       ac: 15,
//       class: "Monster",
//       dc: 0,
//       hp: 65,
//       level: 4,
//       name: "Bandit Captain",
//       saving_throws: {
//         CHA: 2,
//         CON: 2,
//         DEX: 5,
//         INT: 2,
//         STR: 4,
//         WIS: 2,
//       },
//       skills: {
//         acrobatics: 3,
//         athletics: 4,
//         stealth: 0,
//       },
//       subclass: "Humanoid",
//     },
//   ];
//   return (
//     <div>
//       <div className="ts-searchbar mb-3">
//         <input type="text" className="form-control" placeholder="Search" />
//         <button className="btn p-0 border-0 ts-search-btn">
//           <Search Width="20" Height="20" />
//         </button>
//       </div>

//       <div className="ts-data-list-container">
//         {combatantsDefinition.map((item, index) => {
//           return <ListDetailsItem key={index} data={item} />;
//         })}
//       </div>
//     </div>
//   );
// }

// function ListDetailsItem({ data }) {
//   const [isListOpen, setListOpen] = useState(true);

//   const toggleList = () => {
//     setListOpen(!isListOpen);
//   };
//   return (
//     <div>
//       <div className="ts-list">
//         <button
//           className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
//           onClick={toggleList}
//         >
//           {isListOpen ? (
//             <MinusSquare Width="20" Height="20" />
//           ) : (
//             <PlusSquare Width="20" Height="20" />
//           )}
//           {data.class}
//         </button>

//         {isListOpen && data.subclass && (
//           <ul className="ts-list-data ps-5 list-unstyled">
//           {data.subclass.map((subItem, index) => (
//               <ListDetailsItem key={index} data={subItem} />
//             ))}
//           </ul>
//         )}

//         {isListOpen && data.data && (
//           <ul className="ts-list-data ps-5 list-unstyled">
//             {/* Render data elements */}
//             {Object.entries(data.data).map(([key, value], index) => (
//               <li key={index}>
//                 <h4 className="ts-fs-18 text-uppercase">{value}</h4>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

function ListData() {
  const combatantsDefinition = [
    {
      abilities: ["Bite", "Claws", "PounceClaws", "Pounce"],
      ac: 12,
      class: "Monster",
      dc: 0,
      hp: 52,
      level: 1,
      name: "Saber-Toothed Tiger",
      saving_throws: {
        CHA: -1,
        CON: 2,
        DEX: 2,
        INT: -4,
        STR: 4,
        WIS: 1,
      },
      skills: {
        acrobatics: 2,
        athletics: 4,
        stealth: 0,
      },
      subclass: "Beast",
    },
    {
      abilities: [
        "Rapier",
        "Shortbow",
        "Ranged Attack",
        "Cunning Action",
        "Sneak Attack",
      ],
      ac: 16,
      class: "Rogue",
      dc: 15,
      hp: 33,
      level: 5,
      name: "Assassin Rogue 5Lvl",
      saving_throws: {
        CHA: 1,
        CON: 1,
        DEX: 7,
        INT: 4,
        STR: -1,
        WIS: 2,
      },
      skills: {
        acrobatics: 7,
        athletics: -1,
        stealth: 10,
      },
      subclass: "Assassin",
    },
    {
      abilities: ["Scimitar", "Shortbow"],
      ac: 15,
      class: "Monster",
      dc: 0,
      hp: 7,
      level: 1,
      name: "Goblin",
      saving_throws: {
        CHA: -1,
        CON: 0,
        DEX: 2,
        INT: 0,
        STR: -1,
        WIS: -1,
      },
      skills: {
        acrobatics: 2,
        athletics: -1,
        stealth: 0,
      },
      subclass: "Humanoid",
    },
    {
      abilities: ["Scimitar", "Light Crossbow"],
      ac: 12,
      class: "Monster",
      dc: 0,
      hp: 11,
      level: 1,
      name: "Bandit",
      saving_throws: {
        CHA: 0,
        CON: 1,
        DEX: 1,
        INT: 0,
        STR: 0,
        WIS: 0,
      },
      skills: {
        acrobatics: 1,
        athletics: 0,
        stealth: 0,
      },
      subclass: "Humanoid",
    },
    {
      abilities: ["Greataxe", "Greataxe recklessly"],
      ac: 13,
      class: "Monster",
      dc: 0,
      hp: 67,
      level: 4,
      name: "Berserker",
      saving_throws: {
        CHA: -1,
        CON: 3,
        DEX: 1,
        INT: -1,
        STR: 3,
        WIS: 0,
      },
      skills: {
        acrobatics: 1,
        athletics: 3,
        stealth: 0,
      },
      subclass: "Humanoid",
    },
    {
      abilities: ["Bite", "Pack Tactics"],
      ac: 14,
      class: "Monster",
      dc: 0,
      hp: 37,
      level: 1,
      name: "Dire Wolf",
      saving_throws: {
        CHA: -2,
        CON: 2,
        DEX: 2,
        INT: -4,
        STR: 3,
        WIS: 1,
      },
      skills: {
        acrobatics: 2,
        athletics: 3,
        stealth: 0,
      },
      subclass: "Beast",
    },
    {
      abilities: ["Scimitar", "Dagger", "Thrown Dagger", "Ranged Attack : 2"],
      ac: 15,
      class: "Monster",
      dc: 0,
      hp: 65,
      level: 4,
      name: "Bandit Captain",
      saving_throws: {
        CHA: 2,
        CON: 2,
        DEX: 5,
        INT: 2,
        STR: 4,
        WIS: 2,
      },
      skills: {
        acrobatics: 3,
        athletics: 4,
        stealth: 0,
      },
      subclass: "Humanoid",
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
        {combatantsDefinition.map((item, index) => (
          <ListDetailsItem key={index} data={item} />
        ))}
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
          {isListOpen ? data.class : data.subclass}
        </button>

        {/* {isListOpen && data.subclass && (
          <ul className="ts-list-data ps-5 list-unstyled">
            {data.subclass.map((subItem, index) => (
              <li key={index}>
                <h4 className="ts-fs-18 text-uppercase">{subItem.name}</h4>
              </li>
            ))}
          </ul>
        )} */}

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

function SkillTagItem({ skill }) {
  return (
    <div className="ts-skill-tag text-uppercase ">
      <div className="d-flex align-items-center justify-content-between gap-4">
        <div className="d-flex align-items-center gap-2">
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
          >
            <span className="d-inline-block ">
              <ExclamationCircle Width="18" Height="16" Stroke="#6b7280" />
            </span>
          </OverlayTrigger>
          <h2 className="ts-fs-20 fw-bold mb-0">{skill}</h2>
        </div>
        {/* Close Button */}
        {/* <button className="btn p-0 border-0">
          <Close Width="14" Height="14" Fill="#353535" />{" "}
        </button> */}
      </div>
    </div>
  );
}
function Skills({ ActiveCombatants }) {
  return (
    <div>
      <div className="ts-card-3 mb-5">
        <div className="d-flex gap-3 flex-wrap ">
          {ActiveCombatants.abilities.map((skill, index) => {
            return <SkillTagItem key={index} skill={skill} />;
          })}
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

import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch, useSelector } from "react-redux";

import { fetchCombatants } from "@/redux/reducers/combatants";
import { updateActiveCombatants } from "@/redux/reducers/ActiveCombatants";
import {
  updateCombatantTeams,
  removeCombatantFromTeam,
} from "@/redux/reducers/CombatantTeam";

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
  const dispatch = useDispatch();
  const combatantsDefinition = useSelector(
    (state) => state.combatantsDefinition
  );

  const activeCombatant = useSelector((state) => state.activeCombatant);

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
      dispatch(updateActiveCombatants(combatantsDefinition[0]));
    }
  }, [combatantsDefinition, dispatch]);

  function addToTeam(team, data) {
    dispatch(updateCombatantTeams({ team: team, data: data }));
  }

  return (
    <section className="ts-card-2 mb-10">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        COMBATANTS
      </h1>

      {activeCombatant && (
        <>
          <div className="mx-auto ts-text-gray-2 ts-card-1  mb-10">
            <div className="row gap-4 gap-lg-0 ">
              <div className="col-lg-5 ts-list-data-left pb-3 pb-lg-0">
                {combatantsDefinition && (
                  <ListData combatantsDefinition={combatantsDefinition} />
                )}
              </div>
              <div className="col-lg-7">
                {activeCombatant && (
                  <div className="mb-08">
                    <div className="d-flex gap-3 flex-wrap">
                      <CartIncrementDecrement
                        Title={"HP"}
                        Value={activeCombatant.hp}
                      />
                      <CartIncrementDecrement
                        Title={"AC"}
                        Value={activeCombatant.ac}
                      />
                      <CartIncrementDecrement
                        Title={"DC"}
                        Value={activeCombatant.dc}
                      />
                    </div>
                  </div>
                )}

                {/* <div className="mb-08">
                  <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                    ability sources
                  </h2>
                  <div className="d-flex gap-3 flex-wrap">
                    {activeCombatant &&
                      activeCombatant.abilities.map((val, index) => (
                        // <CartIncrementDecrement key={index} Title={val} />
                        <div key={index}>
                          <h5 className="ts-fs-3">{val}</h5>
                        </div>
                      ))}
                  </div>
                </div> */}
                {activeCombatant && (
                  <>
                    <div className="mb-08">
                      <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                        saving throws
                      </h2>
                      <div className="d-flex gap-3 flex-wrap">
                        <CartIncrementDecrement
                          Title={"CHA"}
                          Value={activeCombatant.saving_throws.CHA}
                        />
                        <CartIncrementDecrement
                          Title={"CON"}
                          Value={activeCombatant.saving_throws.CON}
                        />
                        <CartIncrementDecrement
                          Title={"DEX"}
                          Value={activeCombatant.saving_throws.DEX}
                        />
                        <CartIncrementDecrement
                          Title={"INT"}
                          Value={activeCombatant.saving_throws.INT}
                        />
                        <CartIncrementDecrement
                          Title={"STR"}
                          Value={activeCombatant.saving_throws.STR}
                        />
                        <CartIncrementDecrement
                          Title={"WIS"}
                          Value={activeCombatant.saving_throws.WIS}
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
                          Value={activeCombatant.skills.acrobatics}
                        />
                        <CartIncrementDecrement
                          Title={"athletics"}
                          Value={activeCombatant.skills.athletics}
                        />
                        <CartIncrementDecrement
                          Title={"stealth"}
                          Value={activeCombatant.skills.stealth}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {activeCombatant && <Skills activeCombatant={activeCombatant} />}

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
            <button
              className="btn ts-btn ts-fs-20 fw-bold ts-btn-primary text-uppercase  py-2"
              style={{ lineHeight: "140%" }}
              onClick={() => addToTeam("blue", activeCombatant)}
            >
              +add to
              <br /> <span className="ts-text-skyblue">blue team</span>
            </button>
            <button
              className="btn ts-btn ts-fs-20 fw-bold ts-btn-primary text-uppercase py-2 "
              style={{ lineHeight: "140%" }}
              onClick={() => addToTeam("red", activeCombatant)}
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

function ListData({ combatantsDefinition }) {
  const [isListMonsterOpen, setListMonsterOpen] = useState(true);
  const [isListHerosOpen, setListHerosOpen] = useState(true);

  const toggleMonsterList = () => {
    setListMonsterOpen(!isListMonsterOpen);
  };
  const toggleHerosList = () => {
    setListHerosOpen(!isListHerosOpen);
  };

  // Group monsters by subclass
  // Group monsters by subclass into an array
  // Group entities by type (Monster or Hero)
  const groupedEntities = {
    Monster: [],
    Hero: [],
  };

  combatantsDefinition.forEach((item) => {
    const entityType =
      item.class.toLowerCase() === "monster" ? "Monster" : "Hero";

    if (entityType === "Monster") {
      // Group monsters by subclass
      const existingGroup = groupedEntities.Monster.find(
        (group) => group.subclass === item.subclass
      );

      if (existingGroup) {
        existingGroup.monsters.push(item);
      } else {
        groupedEntities.Monster.push({
          subclass: item.subclass,
          monsters: [item],
        });
      }
    } else {
      // Group heroes by level and subclass
      const existingLevelGroup = groupedEntities.Hero.find(
        (group) => group.level === item.level
      );

      if (existingLevelGroup) {
        const existingSubclassGroup = existingLevelGroup.heroes.find(
          (group) => group.subclass === item.subclass
        );

        if (existingSubclassGroup) {
          existingSubclassGroup.heroes.push(item);
        } else {
          existingLevelGroup.heroes.push({
            subclass: item.subclass,
            heroes: [item],
          });
        }
      } else {
        groupedEntities.Hero.push({
          level: item.level,
          heroes: [{ subclass: item.subclass, heroes: [item] }],
        });
      }
    }
  });

  // console.log(groupedEntities);

  return (
    <div>
      <div className="ts-searchbar mb-3">
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn p-0 border-0 ts-search-btn">
          <Search Width="20" Height="20" />
        </button>
      </div>
      <div className="ts-data-list-container">
        {/* Heros */}
        <div>
          <button
            className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
            onClick={toggleHerosList}
          >
            {isListHerosOpen ? (
              <MinusSquare Width="20" Height="20" />
            ) : (
              <PlusSquare Width="20" Height="20" />
            )}
            Heros
          </button>
          {isListHerosOpen && (
            <ul className="ts-list-data ps-4 list-unstyled">
              {groupedEntities.Hero.map((herosGroupLevel, index) => {
                return (
                  <li key={index}>
                    <ListGroupHerosLevels herosGroupLevel={herosGroupLevel} />
                    {/* <ListGroupHeros herosGroup={herosGroup} /> */}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/* Monsters */}
        <div>
          <button
            className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
            onClick={toggleMonsterList}
          >
            {isListMonsterOpen ? (
              <MinusSquare Width="20" Height="20" />
            ) : (
              <PlusSquare Width="20" Height="20" />
            )}
            Monster
          </button>
          {isListMonsterOpen && (
            <ul className="ts-list-data ps-4 list-unstyled">
              {groupedEntities.Monster.map((monsterGroup, index) => {
                return (
                  <li key={index}>
                    <ListGroupMonster monsterGroup={monsterGroup} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// Heroes
function ListGroupHerosLevels({ herosGroupLevel }) {
  const [isListHerosOpen, setListHerosOpen] = useState(true);

  const toggleHerosList = () => {
    setListHerosOpen(!isListHerosOpen);
  };

  return (
    <div>
      <button
        className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
        onClick={toggleHerosList}
      >
        {isListHerosOpen ? (
          <MinusSquare Width="20" Height="20" />
        ) : (
          <PlusSquare Width="20" Height="20" />
        )}
        Level {herosGroupLevel.level}
      </button>

      {isListHerosOpen &&
        // <ListGroupHeros herosGroup={herosGroupLevel.heroes} />
        herosGroupLevel.heroes.map((hero, index) => {
          return (
            <ul className="list-unstyled ps-4" key={index}>
              <ListGroupHerosSubClass herosGroupSubclass={hero} />
            </ul>
          );
        })}
    </div>
  );
}
function ListGroupHerosSubClass({ herosGroupSubclass }) {
  const [isListHerosOpen, setListHerosOpen] = useState(false);

  const toggleHerosList = () => {
    setListHerosOpen(!isListHerosOpen);
  };

  return (
    <li>
      <button
        className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
        onClick={toggleHerosList}
      >
        {isListHerosOpen ? (
          <MinusSquare Width="20" Height="20" />
        ) : (
          <PlusSquare Width="20" Height="20" />
        )}
        {herosGroupSubclass.subclass}
      </button>

      {isListHerosOpen && (
        <ListGroupHeros herosGroup={herosGroupSubclass.heroes} />
      )}
    </li>
  );
}
function ListGroupHeros({ herosGroup }) {
  return (
    <ul className={`list-unstyled ts-combatant-list ps-4`}>
      {herosGroup.map((hero) => {
        return <ListItemHeros hero={hero} key={hero.id} />;
      })}
    </ul>
  );
}
function ListItemHeros({ hero }) {
  const dispatch = useDispatch();
  const activeCombatant = useSelector((state) => state.activeCombatant);
  const updateActiveCombatantFnc = (hero) => {
    dispatch(updateActiveCombatants(hero));
  };
  return (
    <li
      className={`ts-combatant-item ${
        activeCombatant.id === hero.id ? "active" : ""
      }`}
      role="button"
      id={hero.id}
      onClick={() => updateActiveCombatantFnc(hero)}
    >
      <h4 className="ts-fs-18 text-uppercase">{hero.name}</h4>
    </li>
  );
}

// Monsters
function ListGroupMonster({ monsterGroup }) {
  const [isListMonsterOpen, setListMonsterOpen] = useState(false);

  const toggleMonsterList = () => {
    setListMonsterOpen(!isListMonsterOpen);
  };
  return (
    <div>
      <button
        className="btn d-flex gap-2 align-items-center border-0 p-0 ts-fs-20 text-uppercase fw-medium mb-2"
        onClick={toggleMonsterList}
      >
        {isListMonsterOpen ? (
          <MinusSquare Width="20" Height="20" />
        ) : (
          <PlusSquare Width="20" Height="20" />
        )}
        {monsterGroup.subclass}
      </button>
      <ul
        className={`list-unstyled ts-combatant-list ps-4 ${
          isListMonsterOpen ? "" : "ts-combatant-list__close "
        }`}
      >
        {monsterGroup.monsters.map((monster) => {
          return <ListItemMonster monster={monster} key={monster.id} />;
        })}
      </ul>
    </div>
  );
}
function ListItemMonster({ monster }) {
  const dispatch = useDispatch();
  const activeCombatant = useSelector((state) => state.activeCombatant);

  const updateActiveCombatantFnc = (monster) => {
    dispatch(updateActiveCombatants(monster));
  };

  return (
    <li
      className={`ts-combatant-item ${
        activeCombatant.id === monster.id ? "active" : ""
      }`}
      role="button"
      id={monster.id}
      onClick={() => updateActiveCombatantFnc(monster)}
    >
      <h4 className="ts-fs-18 text-uppercase">{monster.name}</h4>
    </li>
  );
}

// function ListDetailsItem({ data }) {
//   const [isListOpen, setListOpen] = useState(false);

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

//         {/* {isListOpen && data.subclass && (
//           <ul className="ts-list-data ps-5 list-unstyled">
//             {data.subclass.map((subItem, index) => (
//               <li key={index}>
//                 <h4 className="ts-fs-18 text-uppercase">{subItem.name}</h4>
//               </li>
//             ))}
//           </ul>
//         )} */}

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

function SkillTagItem({ skill }) {
  return (
    <div className="ts-skill-tag text-uppercase " role="button">
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
          <Close Width="14" Height="14" Fill="#353535" />
        </button> */}
      </div>
    </div>
  );
}
function Skills({ activeCombatant }) {
  return (
    <div>
      <div className="ts-card-3 mb-5">
        <div className="d-flex gap-3 flex-wrap ">
          {activeCombatant.abilities.map((skill, index) => {
            return <SkillTagItem key={index} skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Results() {
  const dispatch = useDispatch();
  const CombatantTeam = useSelector((state) => state.CombatantTeam);
  //

  function addToTeam(team, id) {
    dispatch(removeCombatantFromTeam({ team: team, id: id }));
  }
  return (
    <>
      {CombatantTeam && (
        <section className="ts-card-2">
          <div className="mx-auto ts-text-gray-2">
            <div className="row row-cols-md-2 gap-4 gap-md-0">
              <div>
                <div className="ts-card-1">
                  <div className="d-flex justify-content-between gap-2 mb-06">
                    <h1 className="ts-fs-30 ts-text-skyblue text-center text-uppercase fw-bold mb-0">
                      Blue Team
                    </h1>
                    <h1 className="ts-fs-20 ">{CombatantTeam.blue.length}/6</h1>
                  </div>

                  <ul className="d-flex flex-column gap-3 list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                    {CombatantTeam.blue.map((combatant) => {
                      return (
                        <li
                          className="ts-team-level-card d-flex align-items-center justify-content-between mt-1"
                          key={combatant.id}
                        >
                          <h2 className="ts-fs-20 fw-bold mb-0">
                            {combatant.name}
                          </h2>
                          <div className="ts-fs-18 d-flex align-items-center gap-2">
                            {/* <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3
                    </span>
                    <span className="vr my-1"></span> */}
                            <button
                              className="btn p-0 border-0"
                              onClick={() => addToTeam("blue", combatant.id)}
                            >
                              <Close Width="18" Height="18" Fill="#353535" />
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <div className="ts-card-1">
                  <div className="d-flex justify-content-between gap-2 mb-06">
                    <h1 className="ts-fs-30 ts-text-red text-center text-uppercase fw-bold mb-0">
                      RED Team
                    </h1>
                    <h1 className="ts-fs-20 ">{CombatantTeam.red.length}/6</h1>
                  </div>
                  <ul className="d-flex flex-column gap-3 list-unstyled ts-fs-22 fw-medium p-0 mb-0">
                    {CombatantTeam.red.map((combatant) => {
                      return (
                        <li
                          className="ts-team-level-card d-flex align-items-center justify-content-between mt-1"
                          key={combatant.id}
                        >
                          <h2 className="ts-fs-20 fw-bold mb-0">
                            {combatant.name}
                          </h2>
                          <div className="ts-fs-18 d-flex align-items-center gap-2">
                            {/* <span className="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3
                    </span>
                    <span className="vr my-1"></span> */}
                            <button
                              className="btn p-0 border-0"
                              onClick={() => addToTeam("red", combatant.id)}
                            >
                              <Close Width="18" Height="18" Fill="#353535" />
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

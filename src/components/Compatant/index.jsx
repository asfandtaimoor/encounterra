import React from "react";
import { ExclamationCircle, Close } from "@/Icons/index";
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

  return (
    <section className="ts-card-2 mb-10">
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        COMBATANTS
      </h1>

      <div className="mx-auto ts-text-gray-2 ts-card-1  mb-10">
        <div className="row gap-4 gap-md-0">
          <div className="col-lg-5">
            <div className="">
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
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <div className="d-flex gap-3 flex-wrap">
                {configurations.map((val, index) => (
                  <CartIncrementDecrement
                    key={index}
                    Title={val.title}
                    Value={val.value}
                  />
                ))}
              </div>
            </div>
            <div className="mb-08">
              <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                saving throws
              </h2>
              <div className="d-flex gap-3 flex-wrap">
                {SavingThrought.map((val, index) => (
                  <CartIncrementDecrement
                    key={index}
                    Title={val.title}
                    Value={val.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="ts-fs-22 text-uppercase fw-bold mb-06">
                saving throws
              </h2>
              <div className="d-flex gap-3 flex-wrap">
                {SkillsData.map((skill, index) => (
                  <CartIncrementDecrement
                    key={index}
                    Title={skill.title}
                    Value={skill.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Skills />

      <div className="d-flex justify-content-center gap-4">
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
    </section>
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
                <ExclamationCircle Width="21" Height="19" Stroke="#6B7280" />
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
                <ExclamationCircle Width="21" Height="19" Stroke="#6B7280" />
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
                <ExclamationCircle Width="21" Height="19" Stroke="#6B7280" />
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
                <ExclamationCircle Width="21" Height="19" Stroke="#6B7280" />
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
                <ExclamationCircle Width="21" Height="19" Stroke="#6B7280" />
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
      <h1 className="ts-fs-40 ts-heading-font fw-bold ts-text-gray-2 text-center mb-07">
        RESULTS
      </h1>

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
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
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
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
                    <button className="btn p-0 border-0">
                      <Close Width="18" Height="18" Fill="#353535" />
                    </button>
                  </div>
                </li>
                <li className="ts-team-level-card d-flex align-items-center justify-content-between mt-1">
                  <h2 className="ts-fs-20 fw-bold mb-0">Bard</h2>
                  <div className="ts-fs-18 d-flex align-items-center gap-2">
                    <span class="vr my-1"></span>
                    <span className="ts-tag-level rounded-pill">
                      Level 3{" "}
                    </span>{" "}
                    <span class="vr my-1"></span>{" "}
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

import React, { useState } from "react";
import Schedule_list_link from "./Schedule_list_link";
import Bracket_content_detail_ul from "./Bracket_content_detail_ul";
import Results_content_detail_ul from "./Results_content_detail_ul";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  const tabs = [
    { id: "schedule", label: "SCHEDULE", content: "tournament schedule" },
    { id: "bracket", label: "TEAMS", content: "bracket schedule" },
    { id: "results", label: "HOSTS", content: "tournament results" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "schedule":
        return (
          <div className="schedule_content_detail">
            <div className="schedule_content_detail_area_1 area_0">
              <h3>QUARTER FINALS</h3>
              <div className="schedule_list">
                <div className="schedule_list_content">
                  <ul>
                    <li className="area_0_li">
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>DATE</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>TEAMS</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>special guests</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <div className="schedule_list_link_content">
                          <h2>links</h2>
                        </div>
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 1</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>SEPT 17</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>DOUBLE TROUBLE vs REBL THEORY</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>ERIC ODOM / EMILY LONETTO</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 2</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>SEPT 19</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>DEFIJN vs KEEP GOING DESIGNS</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>AMY HOOD / JESSE SHOWALTER / ROGIE KING</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 3</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>SEPT 24</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>CODE N CANVAS vs FLOW NINJA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>PABLO STANLEY / MARIANA PEDROZA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 4</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>SEPT 26</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>ROBUSTA vs HEAVY FLOW</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>JESSE SHOWALTER / VANESSA CHUNG</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================================================== >> */}

            <div className="schedule_content_detail_area_1 area_0 area_2">
              <h3>SEMI FINALS</h3>
              <div className="schedule_list">
                <div className="schedule_list_content">
                  <ul>
                    <li className="area_0_li">
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>DATE</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>TEAMS</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>special guests</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <div className="schedule_list_link_content">
                          <h2>links</h2>
                        </div>
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 5</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>OCT 1</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>DOUBLE TROUBLE vs DEFIJN</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>JESSE SHOWALTER / CARLOS SEPULVEDA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 6</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>OCT 3</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>FLOW NINJA vs ROBUSTA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>JESSE SHOWALTER / DEVIN FOUNTAIN</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================================================== >> */}

            <div className="schedule_content_detail_area_1 area_0 area_3">
              <h3>FINALS</h3>
              <div className="schedule_list">
                <div className="schedule_list_content">
                  <ul>
                    <li className="area_0_li">
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>DATE</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>TEAMS</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>special guests</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <div className="schedule_list_link_content">
                          <h2>links</h2>
                        </div>
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 7 3rd Place</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>OCT 8</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>DOUBLE TROUBLE vs ROBUSTA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>JESSE SHOWALTER / GRACE LING</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>

                    {/* ================================================== >> */}

                    <li>
                      <div className="schedule_list_match">
                        <div className="schedule_list_match_content">
                          <h2>MATCH 8 Grand Final</h2>
                        </div>
                      </div>
                      <div className="schedule_list_date">
                        <div className="schedule_list_date_content">
                          <h2>OCT 29</h2>
                        </div>
                      </div>
                      <div className="schedule_list_team">
                        <div className="schedule_list_team_content">
                          <h2>DEFIJN vs FLOW NINJA</h2>
                        </div>
                      </div>
                      <div className="schedule_list_guests">
                        <div className="schedule_list_guests_content">
                          <h2>MCGUIRE BRANNON / GRIMUR GRIMSSON</h2>
                        </div>
                      </div>
                      <div className="schedule_list_link">
                        <Schedule_list_link />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case "bracket":
        return (
          <div className="bracket_content_detail">
            <Bracket_content_detail_ul />
          </div>
        );
      case "results":
        return (
          <div className="results_content_detail">
            <Results_content_detail_ul />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="schedule">
      <div className="schedule_content">
        <div className="schedule_title">
          <div className="schedule_title_content">
            <h2>tournament schedule</h2>
            <p>Check out the bracket schedule for the upcoming tournament</p>
          </div>
        </div>
        <div className="schedule_area">
          <div className="schedule_area_content">
            <div className="schedule_tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`schedule_tab ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="schedule_tab_content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

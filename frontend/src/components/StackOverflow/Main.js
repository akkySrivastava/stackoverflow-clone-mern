import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <a href="/add-question">
            <button>Ask Question</button>
          </a>
        </div>
        <div className="main-desc">
          <p>21,593,981 questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <a href="/">Newest</a>
              </div>
              <div className="main-tab">
                <a href="/">Active</a>
              </div>
              <div className="main-tab">
                <a href="/">More</a>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

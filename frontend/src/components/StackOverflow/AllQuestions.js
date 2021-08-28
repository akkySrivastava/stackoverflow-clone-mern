import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/AllQuestions.css";

function AllQuestions() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <a href="/question">
            ANSIBLE PLAYBOOK HELP! I need to uninstall application1 , stop
            application2 services/ install application 3 restart application2
            services
          </a>
          <p>
            ANSIBLE PLAYBOOK HELP! I need to uninstall application1 , checks for
            application2 (only if application1 is uninstalled) if application
            two is installed then STOP application2 services and install ...
          </p>
          <div className="author">
            <small>asked 1 min ago</small>
            <div className="auth-details">
              <Avatar />
              <p>Christine Lane</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;

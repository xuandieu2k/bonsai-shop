import React from "react";
import Widget from "./wiget";

// Component cho widget

const Dashboard: React.FC = () => {
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="bi bi-speedometer"></i> Dashboard</h1>
          <p>A free and open source Bootstrap 5 admin template</p>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
          <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <Widget type="primary" iconClass="bi bi-people" title="Users" value="5" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Widget type="info" iconClass="bi bi-heart" title="Likes" value="25" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Widget type="warning" iconClass="bi bi-folder2" title="Uploads" value="10" />
        </div>
        <div className="col-md-6 col-lg-3">
          <Widget type="danger" iconClass="bi bi-star" title="Stars" value="500" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Weekly Sales - Last week</h3>
            <div className="ratio ratio-16x9">
              <div id="salesChart"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Support Requests</h3>
            <div className="ratio ratio-16x9">
              <div id="supportRequestChart"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
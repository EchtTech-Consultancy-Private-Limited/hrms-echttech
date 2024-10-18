import React from "react";
import SystemConfigurationComponent from "../../components/Settings/SystemConfigurationComponent";

const SystemConfigurationPage = () => {
  return (
    <div className="content-mid">
      <div id="dashboard" className="px-5 py-12 right-const-structure">
        <SystemConfigurationComponent />
      </div>
    </div>
  );
};

export default SystemConfigurationPage;

import React from "react";
import RolesForm from "../components/forms/RolesForm";
import Title from "../components/header/Title";
import RoleTabs from "../components/tabs/RoleTabs";

const CreateRole: React.FC = () => {
  return (
    <React.Fragment>
      <Title title="Add Role" subtitle="Create a New Role" />
      <RolesForm />
    </React.Fragment>
  );
};

export default CreateRole;

import React from "react";
import NewCategoryForm from "../components/forms/NewCategoryForm";

import Title from "../components/header/Title";

const CreateCategory: React.FC = () => {
  return (
    <React.Fragment>
      <Title
        title="Add New Category"
        subtitle="Create a New Product Category"
      />
      <NewCategoryForm />
    </React.Fragment>
  );
};

export default CreateCategory;

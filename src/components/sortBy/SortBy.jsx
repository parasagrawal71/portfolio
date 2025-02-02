import React, { useState } from "react";
import { SelectInput } from "libs";
import { sortByOptions } from "config/skillset";
import appStyles from "./SortBy.module.scss";

const SortBy = () => {
  const [sortBy, setSortBy] = useState("");

  return (
    <SelectInput
      label="Sort by"
      options={sortByOptions}
      handleChange={(value) => {
        setSortBy(value);
      }}
      value={sortBy}
    />
  );
};

export default SortBy;

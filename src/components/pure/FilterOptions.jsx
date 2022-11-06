import React from "react";
import FilterContainer from "../containers/FilterContainer";

const Filteroptions = () => {
  return (
    <div className="filters">
      <FilterContainer filter="SHOW_ALL">All</FilterContainer>
      <FilterContainer filter="SHOW_PENDING">Pending</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">Completed</FilterContainer>
    </div>
  );
};

export default Filteroptions;

import React, { useState } from "react";
import OrganizationDetails from "./OrgsDetails";
import { useOrganizationsContext } from "../hooks/useOrgsContext";

const OrgsFilter = () => {
  const { organizations } = useOrganizationsContext();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredOrgs = selectedFilter === "All"
    ? organizations
    : organizations.filter((org) => org.tag.name === selectedFilter);

  const renderFilterTags = () => {
    const tags = [
      "AnimalWelfare",
      "ArtsandCulture",
      "Children",
      "Civil Rights and Social Action",
      "Economic Empowerment",
      "Education",
      "Environment",
      "Healthcare",
      "HumanRights",
      "Disaster and Humanitarian Relief",
      "Politics",
      "Poverty Alleviation",
      "Science and Technology",
      "Social Services",
      "Veteran Support",
    ];

    return tags.map((tag) => (
      <li
        key={tag}
        className={selectedFilter === tag ? "selected" : ""}
        onClick={() => setSelectedFilter(tag)}
      >
        {tag}
      </li>
    ));
  };

  const renderOrgsDetails = () => {
    return filteredOrgs.map((org) => (
      <OrganizationDetails
        key={org.id}
        organization={org}
      />
    ));
  };

  return (
    <div className="orgs-filter">
      <h3>Filter</h3>
      <ul className="tags">
        <li
          className={selectedFilter === "All" ? "selected" : ""}
          onClick={() => setSelectedFilter("All")}
        >
          All
        </li>
        {renderFilterTags()}
      </ul>
      <div className="orgs-list">
        {renderOrgsDetails()}
      </div>
    </div>
  );
};

export default OrgsFilter;

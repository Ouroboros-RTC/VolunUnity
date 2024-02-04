// import React, { useState, useEffect } from "react";
// import { useOrganizationsContext } from "../hooks/useOrgsContext";
// import OrganizationDetails from "./OrgsDetails";

// const OrgsFilter = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [tags, setTags] = useState([]);
//   const { dispatch } = useOrganizationsContext();

//   useEffect(() => {
//     const fetchTags = async () => {
//       try {
//         const response = await fetch("/api/tags");
//         const json = await response.json();
//         setTags(json);
//       } catch (error) {
//         console.error("Error fetching tags:", error);
//       }
//     };

//     fetchTags();
//   }, []);

//   const filteredOrgs =
//     selectedFilter === "All"
//       ? dispatch
//       : dispatch.filter((org) => org.tag.name === selectedFilter);

  // Render the filter options
//   const renderFilterTags = () => {
//     return tags.map((tag) => (
//       <li
//         key={tag}
//         className={selectedFilter === tag ? "active" : ""}
//         onClick={() => setSelectedFilter(tag)}
//       >
//         {tag}
//       </li>
//     ));
//   };

//   const renderOrgsDetails = () => {
//     if (!filteredOrgs) {
//       return null; 
//     }

//     return filteredOrgs.map((org) => (
//       <OrganizationDetails
//         key={org.id}
//         organization={org}
//       />
//     ));
//   };

//   return (
//     <div>
//       <ul>test</ul>
//     </div>
//   );
// };

// export default OrgsFilter;

import React, { useState, useEffect } from "react";
import { useOrganizationsContext } from "../hooks/useOrgsContext";
import OrganizationDetails from "./OrgsDetails";

const OrgsFilter = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const { dispatch } = useOrganizationsContext();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const json = await response.json();
        setTags(json);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleTagClick = async(tag) => {
    // Handle the tag click, you can perform additional actions here
    console.log("Tag clicked:", tag);
    setSelectedTag(tag);
    
    
    try {
        const response = await fetch("/api/organizations/tag/" + tag._id);
        const json = await response.json();
        if (response.ok){
            dispatch({type: 'SET_ORGS', payload: json})
        }
    } catch (error) {
        console.error("Error fetching organizations associated with the tag:", error);
    }
  };

  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag._id}
            className={selectedTag === tag ? "active" : ""}
            onClick={() => handleTagClick(tag)}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgsFilter;

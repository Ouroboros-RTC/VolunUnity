import React, { useState, useEffect } from "react";
import { useOrganizationsContext } from "../hooks/useOrgsContext";

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
      <ul className="tags">
      <h2>
        Filter
        <hr className="line" />
      </h2>
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

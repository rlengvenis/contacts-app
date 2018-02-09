import React from 'react';

import "./FilterTypeSelector.css";


const FilterTypeSelector = ({
  onContactFilterTypeChange
}) => {

  return (
    <div className="filter-type-selector">
      <label className="filter-type-selector__label">
        Name:
        <input
          className="filter-type-selector__radio-btn"
          type="radio"
          name="filterType"
          value="first_name"
          onChange={onContactFilterTypeChange}
          defaultChecked
        />
      </label>

      <label className="filter-type-selector__label">
        Surname:
        <input
          className="filter-type-selector__radio-btn"
          type="radio"
          name="filterType"
          value="last_name"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="filter-type-selector__label">
        Title:
        <input
          className="filter-type-selector__radio-btn"
          type="radio"
          name="filterType"
          value="title"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="filter-type-selector__label">
        Location:
        <input
          className="filter-type-selector__radio-btn"
          type="radio"
          name="filterType"
          value="location"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="filter-type-selector__label">
        Team:
        <input
          className="filter-type-selector__radio-btn"
          type="radio"
          name="filterType"
          value="team"
          onChange={onContactFilterTypeChange}/>
      </label>
    </div>
  )
};

export default FilterTypeSelector;
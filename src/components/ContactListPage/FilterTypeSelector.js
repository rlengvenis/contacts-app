import React from 'react';


const FilterTypeSelector = ({
  onContactFilterTypeChange
}) => {
  return (
    <div className="contact-list-page__filter-section">
      <label className="contact-list-page__filter-label">Name:
        <input
          className="contact-list-page__filter-radio-btn"
          type="radio"
          name="filterType"
          value="first_name"
          onChange={onContactFilterTypeChange}
          defaultChecked
        />
      </label>

      <label className="contact-list-page__filter-label">
        Surname:
        <input
          className="contact-list-page__filter-radio-btn"
          type="radio"
          name="filterType"
          value="last_name"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="contact-list-page__filter-label">
        Title:
        <input
          className="contact-list-page__filter-radio-btn"
          type="radio"
          name="filterType"
          value="title"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="contact-list-page__filter-label">Location:
        <input
          className="contact-list-page__filter-radio-btn"
          type="radio"
          name="filterType"
          value="location"
          onChange={onContactFilterTypeChange}/>
      </label>

      <label className="contact-list-page__filter-label">Team:
        <input
          className="contact-list-page__filter-radio-btn"
          type="radio"
          name="filterType"
          value="team"
          onChange={onContactFilterTypeChange}/>
      </label>
    </div>
  )
};

export default FilterTypeSelector;
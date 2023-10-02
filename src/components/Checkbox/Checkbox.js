import React from "react";
import '../SearchForm/SearchForm.css'

function Checkbox({checked, onChange}) {
    return (
        <label className="search__toggle-button">
        <input type="checkbox" checked={checked} onClick={onChange} className="search__input-hidden" />
        <span className="search__slider"></span>
      </label>
    )
}

export default Checkbox;
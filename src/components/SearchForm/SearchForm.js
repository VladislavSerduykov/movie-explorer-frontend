import React, { useState } from 'react';
import './SearchForm.css'
import icon from '../../images/searchIcon.svg'

function SearchForm() {

 
    return (
        <form className="search__form">
        <div className="search">
            <div className="search__inputs">
                <img src={icon} alt="" className="search__icon" />
                <input 
                type="text" 
                className="search__item" 
                placeholder='Фильм'/>
            </div>
            <div className="search__container">
                <button className="search__button-find" type='submit'>Найти</button>
                <div class="search__separator"></div>
                <label class="search__toggle-button">
                    <input type="checkbox" class="search__input-hidden"/>
                    <span class="search__slider"></span>
                </label>
                <p className="search__text">Короткометражки</p>
            </div>
        </div>
    </form>
    )
}

export default SearchForm;
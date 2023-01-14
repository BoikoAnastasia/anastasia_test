import React, { useState } from "react";
import Glasses from '../images/glass.png'

import './style_components.css'

const Header = ({ getSearchData }) => {
    const [value, setValue] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        getSearchData(value);
    }

    return (
        <div className="header">
            <div className="header_body">
                <form onSubmit={onFormSubmit}>
                    <input className="search"
                        size="400"
                        placeholder='Начните вводить текст для поиска (не менее трех символов)'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">
                        <img src={Glasses} className="search_glass" alt="glases" width="41px" height="41px"></img>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header;
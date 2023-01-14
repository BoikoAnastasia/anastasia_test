import React, { useState } from "react";

import Star from '../images/star.png'
import Eye from '../images/eye.png'
import Pen from '../images/pen.png'


const Project = ({ item }) => {
    const [inputValue, setInputValue] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(item.id, inputValue)
        setInputValue("")
    }

    return (

        <div className="project">
            <a href={item.html_url} >
                <div className="href_progect">
                    <h2 className="project_name">{item.name}</h2>
                    <div className="project_user_content">
                        <img src={item['owner']['avatar_url']} alt="user" width="50px" height="50px" className="project_avatar"></img>
                        <span className="project_login">{item.owner.login}</span>
                    </div>
                    <div className="project_icons">
                        <div className="project_icons_star">
                            <img src={Star} alt="star" width="27px" height="25px"></img>
                            <span className="number_star">{item.stargazers_count}</span>
                        </div>
                        <div className="project_icons_eye">
                            <img src={Eye} alt="eye" width="25px" height="25px"></img>
                            <span className="number_eye">{item.watchers}</span>
                        </div>
                    </div>
                </div>
            </a>
            <form className="input" onSubmit={onFormSubmit}>
                <input className="project_comment" placeholder="Комментарий к проекту" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button type="submit">
                    <img src={Pen} className="search_pen" alt="glases" width="40px" height="40px"></img>
                </button>
            </form>
        </div >

    )
}

export default Project;
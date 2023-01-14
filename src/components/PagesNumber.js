import React, { useState } from "react";
import Arrow from '../images/link.png'

const PagesNumber = ({ listProgects, postPerPage, setCurrentPage, currentPage }) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(listProgects / postPerPage); i++) {
        pages.push(i)
    }
    const onNext = () => {
        if (currentPage !== (Math.ceil(listProgects / postPerPage))) { setCurrentPage(currentPage + 1) };
    };

    const onPrevious = () => {
        if (currentPage !== (1)) { setCurrentPage(currentPage - 1) };
    };
    return (
        <div className="pagesNamber">
            <button className="arrowkImg _left" onClick={() => onPrevious()}><img width="52px" height="52px" src={Arrow} alt="arrow"></img></button>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'itemPage _active' : 'itemPage'}>{page}</button>
                })
            }
            <button className="arrowkImg _right" onClick={() => onNext()}><img width="52px" height="52px" src={Arrow} alt="arrow"></img></button>
        </div>
    )
}

export default PagesNumber;
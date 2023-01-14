import React, { useState } from "react";
import PagesNumber from "./PagesNumber";

const Pagination = ({ listProgects, postPerPage, setCurrentPage, currentPage, setPostPerPage }) => {

    const [activeState, setActiveState] = useState(false);

    return (
        <div className="numberPages">
            <div>
                <div className="number">
                    <div>{postPerPage}</div>
                    <div className="fig" onClick={() => setActiveState((activeState) => !activeState)}></div>
                </div>
                <div className={activeState? '_activeState' : 'state'}>
                    <button onClick={() => { setPostPerPage(10); setCurrentPage(1) }}>10</button>
                    <button onClick={() => { setPostPerPage(25); setCurrentPage(1) }}>25</button>
                    <button onClick={() => { setPostPerPage(50); setCurrentPage(1) }}>50</button>
                </div>
            </div>
            <div>
                <PagesNumber
                    postPerPage={postPerPage}
                    listProgects={listProgects}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage} />
            </div>
        </div>
    )
}

export default Pagination;
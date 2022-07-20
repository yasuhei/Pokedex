import React from 'react'
import './index.css'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return(
        <div className="page-container">
            <button onClick={onLeftClick}> <div> ⬅</div></button>
            <div className="container">{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>➡</div></button>

        </div>
    )
}

export default Pagination
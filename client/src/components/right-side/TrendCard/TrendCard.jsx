import React from 'react'
import './TrendCard.scss'
import { dataTrend } from '../../../common/data-dummy/Trend'

const TrendCard = () => {

    const renderList = dataTrend.map((trend, id) => {
        return(
            <div className="trend" id={id}>
                <span>#{trend.name}</span>
                <span>{trend.shares}k shares</span>
            </div>
        )
    })

    return (
        <div className="trend-cards">
            <h3>Trend for you</h3>
            {Object.keys(renderList).length === 0 ? (
                <div>Loading ...</div>
            ) : (
                renderList
            )}
        </div>
    )
}

export default TrendCard
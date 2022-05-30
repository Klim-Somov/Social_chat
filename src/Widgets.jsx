import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    
    )
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>Новости которые ты заслужил</h2>
            <InfoIcon />
        </div>

        {newsArticle("SOM", "Лучшие новости из мира техно")}
        {newsArticle("SOM", "Лучшие новости из мира техно")}
        {newsArticle("SOM", "Лучшие новости из мира техно")}
        {newsArticle("SOM", "Лучшие новости из мира техно")}
        {newsArticle("SOM", "Лучшие новости из мира техно")}
    </div>)
}

export default Widgets 
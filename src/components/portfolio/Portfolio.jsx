import React from 'react'
import Hotel from '../../assets/Hotel1.png'
import Movie from '../../assets/movieList.png'
import Mindmap from '../../assets/maindmap.png'
import Task from '../../assets/tasks.png'
import Weather from '../../assets/weather.png'
import Craigslist from '../../assets/craiglist4.png'
import './portfolio.css'



const data = [
    {
        id: 0,
        image: Hotel,
        title: 'Hotel Booking Web Application',
        git: 'https://github.com/eljafari/Hotel-Booking'
    },
    {
        id: 1,
        image: Movie,
        title: 'Movie Online Catalog',
        git: 'https://github.com/eljafari/MovieDatabase-TMD-API'
    },
    {
        id: 2,
        image: Mindmap,
        title: 'MindMap Web Application',
        git: 'https://github.com/eljafari/MindMap'
    },
    {
        id: 3,
        image: Task,
        title: 'Task Managment',
        git: 'https://github.com/eljafari/taskManagement'
    },
    {
        id: 4,
        image: Weather,
        title: 'Weather Forecast',
        git: 'https://github.com/eljafari/WeatheReact'
    },
    {
        id: 5,
        image: Craigslist,
        title: 'Redesign Craigslist',
        git: 'https://github.com/eljafari/MidTerm2--Craiglist'
    }
]

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, git }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-img">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={git} className='btn btn-primary' target='_blank'>Github</a>
                                </div>
                            </article>
                        )

                    })
                }
            </div>
        </section>

    )
}

export default Portfolio
import React from 'react'
import './gallery.css'
import Hotel1 from '../../assets/Hotel1.png'
import Hotel2 from '../../assets/Hotel2.png'
import Hotel3 from '../../assets/Hotel3.png'
import craiglist1 from '../../assets/craiglist1.png'
import craiglist2 from '../../assets/craiglist2.png'
import craiglist3 from '../../assets/Hotel1.png'
import craiglist4 from '../../assets/craiglist4.png'
import mindmap from '../../assets/maindmap.png'
import mindmap1 from '../../assets/mindmap1.png'
import mindmap2 from '../../assets/mindmap2.png'
import mindmap3 from '../../assets/mindmap3.png'
import movieList from '../../assets/movieList.png'
import tasks from '../../assets/tasks.png'
import weather from '../../assets/weather.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 0,
        img: Hotel1,
        title: 'Hotel Booking Web Application'
    },
    {
        id: 1,
        img: Hotel2,
        title: 'Hotel Booking Web Application'
    },
    {
        id: 2,
        img: Hotel3,
        title: 'Hotel Booking Web Application'
    },
    {
        id: 3,
        img: craiglist1,
        title: 'Redesign Craigslist'
    },
    {
        id: 4,
        img: craiglist2,
        title: 'Redesign Craigslist'
    },
    {
        id: 5,
        img: craiglist3,
        title: 'Redesign Craigslist'
    },
    {
        id: 6,
        img: craiglist4,
        title: 'Redesign Craigslist'
    },
    {
        id: 7,
        img: mindmap,
        title: 'MindMap Web Application'
    },
    {
        id: 7,
        img: mindmap1,
        title: 'MindMap Web Application'
    },
    {
        id: 7,
        img: mindmap2,
        title: 'MindMap Web Application'
    },
    {
        id: 8,
        img: mindmap3,
        title: 'MindMap Web Application'
    },
    {
        id: 9,
        img: movieList,
        title: 'Movie Online Catalog'
    },
    {
        id: 10,
        img: tasks,
        title: 'Task Managment'
    },
    {
        id: 11,
        img: weather,
        title: 'Weather Forecast'
    },
]
function Gallery() {
    return (
        <section id='gallery'>
            <h2>Projects Gallery</h2>
            <Swiper className='container gallery__container'
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ id, img, title }) => {
                        return (
                            <SwiperSlide key={id} className='gallery'>
                                <div className="gallery__img">
                                    <img src={img} alt={'image of' + { title }} />
                                </div>
                                <h5>{title}</h5>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Gallery

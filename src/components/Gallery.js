import React from 'react'
import Image from './image/gallery.jpg'
import Image1 from './image/gall1.jpg'
import Image2 from './image/gallery2.jpg'
import './Gallery.css'
export const Gallery = () => {
    return (
        <div>
            <h1 className="gallery-h1">Gallery</h1>
            <img src={Image} alt="gallery" className="gall_img"/>
            <img src={Image1} alt="gallery" className="gall_img1"/>
            <img src={Image2} alt="gallery" className="gall_img2"/>
        </div>
    )
}

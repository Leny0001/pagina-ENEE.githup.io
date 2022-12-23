import React from "react";
import './Gallery.css'
import Mansonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { useState } from 'react';
import 'animate.css/animate.min.css'

const image = [
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/4000/3000",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/1000/1000",
  "https://picsum.photos/1500/1875",
]

const GalleryAndComment = () => {
    
    const [data, setData] = useState({img: '', i: 0})

    const ViewImage = (img, i) => {
        setData({img, i})
    }
    const imgAction = (action) =>{
        let i = data.i;
        if (action === 'next-img'){
            setData ({img: image[i + 1], i: i + 1});
        }
    }
    return (
        <div className="gallery">
            <div className="g-left">
                <div className="g-gallery animate__animated animate__pulse">
                    <>
                    {data.img &&
                        <div className="g-data">
                            <button style={{position: 'absolute', top: "10px", right: "10px"}}>X</button>
                            <button>Preview</button>
                            <img className="g-img" src={data.img} alt="" />
                            <button onClick={() => imgAction('next-img')}>Next</button>
                        </div>
                    }
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350:1, 750:2, 900:3}}
                    >
                        <Mansonry gutter="20px">
                               {image.map((image, i) =>(
                                    <img className="g-image"
                                    key={i}
                                    src={image}
                                    alt=""
                                    onClick={()=>ViewImage(image, i)}
                                    />       
                            ))}
                        </Mansonry>

                    </ResponsiveMasonry>
                </>
            </div>
        </div>
            <div className="g-right">
            
                <h2 className="g-Comment">Sección de comentarios</h2>
                <input className="g-input" type="text" placeholder="write your comment" />
                <button className="button g-button">Comment</button>
                
                <div>
                <img src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg" className="g-perfil1"  alt="" />
                <h3 className="g-name2">Mi Nombre</h3>
                     <p className="g-name1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias ullam rem quos voluptates eos, fugiat praesentium omnis suscipit nisi repellendus adipisci ab! Cumque blanditiis illum doloremque ipsum aliquam itaque!</p>
                <div className="g-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Reply</li>
                        <li>Edit</li>
                    </ul>
                </div>
                </div>

                <div>
                    <img src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg" className="g-perfil2"  alt="" />
                    <h3 className="g-name2">Mi Nombre</h3>
                        <p className="g-name1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias ullam rem quos voluptates eos, fugiat praesentium omnis suscipit nisi repellendus adipisci ab! Cumque blanditiis illum doloremque ipsum aliquam itaque!</p>
                        <div className="g-list">
                        <ul style={{listStyleType: 'none'}}>
                            <li>Reply</li>
                            <li>Edit</li>
                        </ul>
                        </div>
                            <div className="respuesta">
                                <img src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg" className="g-perfil3"  alt="" />
                                <span>
                                    <h3 className="g-name3">Mi Nombre</h3>
                                <input className="g-request" type="text" placeholder="reply"/>
                                </span>
                                <div className="g-lista">
                                    <ul style={{listStyleType: 'none'}}>
                                    <li>Post</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     <div>
                 </div>     
             </div>
        </div>
    )
}

export default GalleryAndComment
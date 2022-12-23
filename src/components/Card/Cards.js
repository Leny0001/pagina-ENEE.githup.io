import React from 'react'
import Card from './Card';
import './Cards.css'
import Image1 from '../../img/profile2.jpg'

const cards = [
    {
    id: 1,
    title: 'Web Site',
    Image: Image1,
    url: 'http://www.enee.hn/',
    /* text: "este es mi sitio web" */
    },

    {
    id: 2,
    title: 'Web Dos',
    Image: Image1,
    url: 'http://www.enee.hn/'
    },

    {
    id: 3,
    title: 'Web Tres',
    Image: Image1,
    url: 'http://www.enee.hn/'
    }

]

function Cards() {
  return (
    <div>
        <div className='name-card justify-content-center bg-black align-items-center h-100 gap-3'>
        <h2 className='titletext' style={{color: "White", padding: "30px", marginBottom: "-40px"}}>TITULO</h2>
            <div className='container-card d-flex justify-content-center align-items-center h-100 bg-black'>
                <div className='row justify-content-center'>
                    {
                        cards.map(card =>(
                            <div className='col-md-4' key={card.id}>
                                <Card title={card.title} imageSource={card.Image} url={card.url} text={card.text}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards

import React from 'react'
import './Cards.css'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import 'animate.css/animate.min.css'


function Card({title, imageSource, url, text}) {
  return (
    <div className='card text-center animate__animated animate__fadeInLeftBig'>
      <div className='overflow'>
      <img className='card-image  card-img-top' src={imageSource} alt=''></img>
      </div>
        <div className='card-body'>
          <h4 className='card-title'>{title}
          </h4>
            <p className='card-tex text-secondary'>
              {
                text ? text : "This HTML file is a template If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the body tag."
              }
            </p>
          <a href={url} className="btn btn-outline-secondary reunder-0" target="_blank">
              Go to Web Site
          </a>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: propTypes.string,
  imageSource: PropTypes.string,
  text: propTypes.string
}

export default Card

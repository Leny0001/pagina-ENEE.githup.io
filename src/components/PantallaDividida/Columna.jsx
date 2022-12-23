import React, {useState} from 'react'
import './Columna.css'
import CloseIcon from '@material-ui/icons/Close'
import Image1 from '../../img/represa.jpg'
import Image2 from '../../img/eolica.jpg'
import Image3 from '../../img/prueba.jpg'
import Image4 from '../../img/profile4.jpg'
import Image5 from '../../img/profile5.jpg'
import Image6 from '../../img/profile6.jpg'

const Columna = () => {
        /* let dataC = [
        
    {
        id: 4,
        imgSrc: Image4,
    },

    
    {
        id: 5,
        imgSrc: Image5,
    },

    
    {
        id: 6,
        imgSrc: Image6,
    } */
/* ] */
    let data = [
        {
            id: 1,
            imgSrc: Image1,
        },

        {
            id: 2,
            imgSrc: Image2,
        },

        {
            id: 3,
            imgSrc: Image3,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }
  return (
    <div className='Box'>
        <div className='CContainer justify-content-center align-items-center'>

            <div className='CIzquierda d-flex mt-2 mb-2'>

                <div className='CCol animate__animated animate__zoomIn'>
                    
                    <div className='CRow'>
                        <h2 className='CTitleOne mt-2'>Image Gallery</h2>
                        <div className={model? "model open" : "model"}>
                            <img src={tempimgSrc} alt="" />
                            <CloseIcon onClick={() => setModel(false)} />
                        </div>
                            <div className='CGallery'>
                                {data.map((item, index)=>{
                                    return(
                                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                            <img src={item.imgSrc} style={{width:"100%", marginTop:"10px"}} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                    </div>

                </div>
            
            </div>

            <div className='CDerecha d-flex mt-2 mb-2'>

                <div className='CColl animate__animated animate__zoomIn'>
                    
                    <div className='CRow'>
                        <h2 className='CTitleTwo'>Comment</h2>
                        <hr />
                       {/*  input de comentarios */}
                        <input type="text" name="Write" id="input-one"  placeholder="Write Comment"/>
                        <button className='Write'>Comentar</button>
                            <div className='CComment'>    
                                    {/* {dataC.map((item, index)=>{
                                        return( */}
                                            <div className='coment'/*  key={index} */>
                                                
                                                <img src={Image4} style={{width:"100%", marginTop:"5px"}} alt="" />
                                                <h5 className='Name'>Nombre</h5>
                                                <h5 className='Description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate minima debitis ab, cupiditate magnam.</h5>
                                                
                                                <div className="CLista">
                                                    <ul style={{listStyleType: 'none'}}>
                                                        <li>Reply</li>
                                                        <li>Edit</li>
                                                    </ul>
                                                </div>
                                                <img src={Image5} style={{width:"100%", marginTop:"5px"}} alt="" />
                                                <h5 className='Name'>Nombre</h5>
                                                <h5 className='Description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate minima debitis ab, cupiditate magnam.</h5>
                                                
                                                <div className="CLista">
                                                    <ul style={{listStyleType: 'none'}}>
                                                        <li>Reply</li>
                                                        <li>Edit</li>
                                                    </ul>
                                                </div>

                                             {/*    <script>
                                                    ('#reply').onClick(function(){
                                                        ('$CRespuesta').input('Write')
                                                    })
                                                <div className='CInput'>
                                                    <input id='CRespuesta' type="text" />
                                                </div>
                                                </script> */}

                                                <img src={Image6} style={{width:"100%", marginTop:"5px"}} alt="" />
                                                <h5 className='Name'>Nombre</h5>
                                                <h5 className='Description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate minima debitis ab, cupiditate magnam.</h5>
                                                
                                                <div className="CLista">
                                                    <ul style={{listStyleType: 'none'}}>
                                                        <li id='reply'>Reply</li>
                                                        <li>Edit</li>
                                                    </ul>
                                                </div>
                                            </div>
                                {/*      )
                                    })} */}
                            </div>
                    </div>

                </div>

            </div>


        </div>
    </div>
  )
}

export default Columna
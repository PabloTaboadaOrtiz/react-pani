import React from 'react'
export const NewProject = () => {
    return (
        <div className="content">
            <div className="title-new"></div>
            <div className="sub-title-new"></div>
            <div className="portada-title-new">
                <div className="front-letter">
                    <div className="container-img-new">
                        <img className="img-us"
                            src="INFO_NEW.png?w=164&h=164&fit=crop&auto=format"
                            // src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt="imagen de la nota"
                            loading="lazy"
                        />

                    </div>
                </div>
            </div>
            <div className='container-contact'>
                <p>Contacto: <slot>PROCUCCION@PANOJAFILMS.COM</slot></p>
            </div>
        </div>
    )
}

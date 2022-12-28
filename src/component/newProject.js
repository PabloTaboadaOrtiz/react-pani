import React from 'react'
export const NewProject = () => {
    return (
        <div className="content_new">

            <div className="title-new"></div>

            <div className="new_image_container">

                <div className="sub-title-new"></div>
                <div className="portada-title-new">
                    <div className="front-letter">
                        <div className="container-img-new">
                            <img className="img-new"
                                src="INFO_NEW.png"
                                // src={`${image}?w=164&h=164&fit=crop&auto=format`}
                                // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="imagen de la nota"
                                loading="lazy"
                            />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

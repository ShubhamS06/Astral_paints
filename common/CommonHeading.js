import React from 'react'

function CommonHeading({title, subtitle, lineImg, alt}) {
    return (
        <>
            <p>{subtitle}</p>
            <h2 className={`h3 mb-5`}>{title} 
                <img className='m-lg-4' src={lineImg} alt={alt} />
            </h2>
        </>
    )
}

export default CommonHeading
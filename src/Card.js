import React from 'react'

const Card = ({  name, email,image }) => {
    const styles = {
        width: '200px',
        height:'200px'
    };
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`${image}`} style={styles} alt="robots" />
            
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;
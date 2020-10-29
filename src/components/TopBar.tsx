import React from 'react';

const TopBar = () => {
    const topBarStyle ={
        top:0,
        left: '5rem',
        height: '50px',
        width: "100%",
        backgroundColor: '#3250a2',
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        padding: 5
    }
    return (
        <div className='Top-bar' style={topBarStyle}>
            <h2>Maisonette Customer Care</h2>
        </div>
    )
}

export default TopBar;
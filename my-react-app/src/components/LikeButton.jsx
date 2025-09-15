import React from 'react'
const btnStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

function LikeButton() {
    return (
      <>
          <button className="btn" style={btnStyle} onClick={()=>{alert('click')}}>Click Me!</button>
          <p>This is my first component!</p>
      </>
    )
}

  
  export default LikeButton
  
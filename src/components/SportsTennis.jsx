import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsTennis(){
  return (
    <div>
      <style jsx>{`
  .sportsTennis {
    background-color: beige;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post {
    background-color: aliceblue;
    color: black;
    border-radius: 1px;
    padding: 5px 15px;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
  img {
  height: 100px;
  width: 80px;
  }
`}</style>
      <div className='sportsTennis'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Tennis</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
    Insert summary here
        </p>
        <h4>General Rules</h4>
        <p>
    Insert rules here
        </p>
        <h4>Overview</h4>
        <p>
    Insert brief overview here
        </p>
      </div>
    </div>
  );
}

export default SportsTennis;

import React from 'react';
import PropTypes from 'prop-types';

function SportsCard(props){
  return (
    <div>
      <style jsx>{`
        .sport {
          display: flex;
          padding: 25px;
          margin: 2px;
          border: 1px solid #ccc;
          border-radius: 0px;
          background-color: lightgrey;
          max-width: 400px;
        }
        .sportImg {
          height: 100%;
          width: 100%;
        }
        img {
          object-fit: cover;
          object-position: 50% 20%;
          width: 100%;
          height: 400px;
        }
        .tag {
          text-align: center;
          font-weight: bold;
          font-family: monospace;
          font-size: 20px;
        }
      `}</style>
      <div className='sport'>
        <div className='sportImg'>
          <img src={props.sportImg} />
          <p className='tag'>{props.name}</p>
        </div>
      </div>
    </div>
  );
}

SportsCard.propTypes = {
  name: PropTypes.string,
  sportImg: PropTypes.string
};

export default SportsCard;

import React from 'react';
import PropTypes from 'prop-types';

function SportsCard(props){
  return (
    <div>
      <style jsx>{`
        .sport {
          display: flex;
          padding: 25px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: lightgrey;
          max-width: 400px;
        }
        .sportImg {
          max-height: 100%;
          max-width: 100%;
        }
        img {
          object-fit: cover;
          object-position: 50% 20%;
          width: 100%;
          height: 400px;
        }
      `}</style>
      <div className='sport'>
        <div className='sportImg'>
          <img src={props.sportImg} />
          <h3>{props.name}</h3>
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

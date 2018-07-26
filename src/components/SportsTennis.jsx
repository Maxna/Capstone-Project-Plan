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
    Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.
        </p>
        <h4>General Rules</h4>
        <p>
    The rules of modern tennis have changed little since the 1890s. Two exceptions are that from 1908 to 1961 the server had to keep one foot on the ground at all times, and the adoption of the tiebreak in the 1970s. A recent addition to professional tennis has been the adoption of electronic review technology coupled with a point-challenge system, which allows a player to contest the line call of a point, a system known as Hawk-Eye.
        </p>
        <h4>Overview</h4>
        <p>
          Tennis is an Olympic sport and is played at all levels of society and at all ages. The sport can be played by anyone who can hold a racket, including wheelchair users. The modern game of tennis originated in Birmingham, England, in the late 19th century as lawn tennis.[1] It had close connections both to various field (lawn) games such as croquet and bowls as well as to the older racket sport today called real tennis. During most of the 19th century, in fact, the term tennis referred to real tennis, not lawn tennis: for example, in Disraeli's novel Sybil (1845), Lord Eugene De Vere announces that he will "go down to Hampton Court and play tennis."[2]


        </p>
      </div>
    </div>
  );
}

export default SportsTennis;

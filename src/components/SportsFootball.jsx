import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsFootball(){
  return (
    <div>
      <style jsx>{`
          .sportsFootball {
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
      <div className='sportsFootball'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Football</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
    American football as a whole is the most popular sport in the United States. The most popular forms of the game are professional and college football, with the other major levels being high school and youth football. As of 2012, nearly 1.1 million high school athletes and 70,000 college athletes play the sport in the United States annually, almost all of them men, with a few exceptions. The National Football League, the most popular American football league, has the highest average attendance of any professional sports league in the world; its championship game, the Super Bowl, ranks among the most-watched club sporting events in the world, and the league has an annual revenue of around US$10 billion.
        </p>
        <h4>General Rules</h4>
        <p>
    American football evolved in the United States, originating from the sports of association football (known in the U.S. as soccer) and rugby football. The first match of American football was played on November 6, 1869, between two college teams, Rutgers and Princeton, under rules based on the association football rules of the time.[4] During the latter half of the 1870s, colleges playing association football switched to the Rugby Union code, which allowed carrying the ball. A set of rule changes drawn up from 1880 onward by Walter Camp, the "Father of American Football", established the snap, eleven-player teams, and the concept of downs; later rule changes legalized the forward pass, created the neutral zone, and specified the size and shape of the football. The sport is closely related to Canadian football, which evolved parallel and contemporary to the American game, and most of the features that distinguish American football from rugby and soccer are also present in Canadian football.
        </p>
        <h4>Overview</h4>
        <p>
    American football, referred to as football in the United States and Canada and also known as gridiron,[nb 1] is a team sport played by two teams of eleven players on a rectangular field with goalposts at each end. The offense, which is the team controlling the oval-shaped football, attempts to advance down the field by running with or passing the ball, while the defense, which is the team without control of the ball, aims to stop the offense's advance and aims to take control of the ball for themselves. The offense must advance at least ten yards in four downs, or plays, and otherwise they turn over the football to the defense; if the offense succeeds in advancing ten yards or more, they are given a new set of four downs. Points are primarily scored by advancing the ball into the opposing team's end zone for a touchdown or kicking the ball through the opponent's goalposts for a field goal. The team with the most points at the end of a game wins.
        </p>
      </div>
    </div>
  );
}

export default SportsFootball;

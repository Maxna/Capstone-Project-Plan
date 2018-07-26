import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsBasketball(){
  return (
    <div>
      <style jsx>{`
  .sportsBasketball {
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
      <div className='sportsBasketball'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Basketball</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
    Invented in 1891 by Canadian—American gym teacher James Naismith in Springfield, Massachusetts, basketball has evolved to become one of the world's most popular and widely viewed sports.[1] The National Basketball Association (NBA) is the most significant professional basketball league in the world in terms of popularity, salaries, talent, and level of competition.[2][3] Outside North America, the top clubs from national leagues qualify to continental championships such as the Euroleague and FIBA Americas League. The FIBA Basketball World Cup and Men's Olympic Basketball Tournament are the major international events of the sport and attract top national teams from around the world. Each continent hosts regional competitions for national teams, like EuroBasket and FIBA AmeriCup.
        </p>
        <h4>General Rules</h4>
        <p>
    Players advance the ball by bouncing it while walking or running (dribbling) or by passing it to a teammate, both of which require considerable skill. On offense, players may use a variety of shots—the lay-up, the jump shot, or a dunk; on defense, they may steal the ball from a dribbler, intercept passes, or block shots; either offense or defense may collect a rebound, that is, a missed shot that bounces from rim or backboard. It is a violation to lift or drag one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands then resume dribbling.
        </p>
        <h4>Overview</h4>
        <p>
    Basketball is a team sport in which ten players, five on a side, opposing one another on a rectangular court, have in play the primary objective to shoot a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one or more one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.
        </p>
      </div>
    </div>
  );
}

export default SportsBasketball;

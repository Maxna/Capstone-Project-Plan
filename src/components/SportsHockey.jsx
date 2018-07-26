import React from 'react';
import tuscan from '../assets/images/Tuscan.svg';

function SportsHockey(){
  return (
    <div>
      <style jsx>{`
  .sportsHockey {
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
      <div className='sportsHockey'>
        <img src={tuscan} alt='tuscanLogo' />
        <div>
          <h2>Hockey</h2>
        </div>
        <img src={tuscan} alt='tuscanLogo' />
      </div>
      <div className='post'>
        <h4>Summary</h4>
        <p>
    Ice hockey is a contact team sport played on ice, usually in a rink, in which two teams of skaters use their sticks to shoot a vulcanized rubber puck into their opponent's net to score points. The sport is known to be fast-paced and physical, with teams usually consisting of six players each: one goaltender, and five players who skate up and down the ice trying to take the puck and score a goal against the opposing team.
        </p>
        <h4>General Rules</h4>
        <p>
    Ice hockey is believed to have evolved from simple stick and ball games played in the 18th and 19th century United Kingdom and elsewhere. These games were brought to North America and several similar winter games using informal rules were developed, such as "shinny" and "ice polo". The contemporary sport of ice hockey was developed in Canada, most notably in Montreal, where the first indoor hockey game was played on March 3, 1875. Some characteristics of that game, such as the length of the ice rink and the use of a puck, have been retained to this day. Amateur ice hockey leagues began in the 1880s, and professional ice hockey originated around 1900. The Stanley Cup, emblematic of ice hockey club supremacy, was first awarded in 1893 to recognize the Canadian amateur champion and later became the championship trophy of the NHL. In the early 1900s, the Canadian rules were adopted by the Ligue Internationale de Hockey sur Glace, the precursor of the IIHF and the sport was played for the first time in the Olympics in the 1920 Summer Olympics.
        </p>
        <h4>Overview</h4>
        <p>
          Ice hockey is most popular in Canada, central and eastern Europe, the Nordic countries, Russia and the United States. Ice hockey is the official national winter sport of Canada.[1] In addition, ice hockey is the most popular winter sport in Belarus, Croatia, the Czech Republic, Finland, Latvia, Russia, Slovakia, Sweden, and Switzerland. North America's National Hockey League (NHL) is the highest level for men's ice hockey and the strongest professional ice hockey league in the world. The Kontinental Hockey League (KHL) is the highest league in Russia and much of Eastern Europe. The International Ice Hockey Federation (IIHF) is the formal governing body for international ice hockey, with the IIHF managing international tournaments and maintaining the IIHF World Ranking. Worldwide, there are ice hockey federations in 76 countries.[2]

      In Canada, the United States, Nordic countries, and some other European countries the sport is known simply as hockey; the name "ice hockey" is used in places where "hockey" more often refers to field hockey, such as countries in South America, Asia, Africa, Australasia, and some European countries including the UK and Ireland.
        </p>
      </div>
    </div>
  );
}

export default SportsHockey;

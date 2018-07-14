import React from 'react';

function Profile(){
  const profile = {
    fontFamily: 'sans-serif',
    position: 'relative',
    height: '250px',
    border: '2px solid #ccc',
    overflow: 'hidden',
    marginBottom: '10px'
  };

  const background = {
    backgroundColor: '#2d96de',
    height: '150px',
    width: '100%',
    borderBottom: '3px solid #ccc'
  };

  const profileGroup = {
    position: 'absolute',
    top: '100px',
    left: '30px'
  };

  const profileSubGroup = {
    display: 'flex',
    alignItems: 'flex-end'
  };

  const h1 = {
    margin: '0 20px',
    fontSize: '24px'
  };

  const profileImg = {
    // backgroundImage: 'url(https://i.ytimg.com/vi/VNcBuiM00TE/maxresdefault.jpg)',
    // backgroundSize: '180%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // height: '80px',
    // width: '80px',
    // borderRadius: '10px',
    // border: '3px solid #fff'
  };

  const links = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '0'
  };

  return (
    <div style={profile}>
      <style jsx>{`
        .img {
          background-image: url(https://i.ytimg.com/vi/VNcBuiM00TE/maxresdefault.jpg);
          background-size: 180%;
          background-repeat: no-repeat;
          background-position: center;
          height: 80px;
          width: 80px;
          border-radius: 10px;
          border: 3px solid #fff;
        }

        .img:hover {
          border: 2px solid red;
          animation: shake 1ms infinite alternate;
        }

        @keyframes shake {
          0% {
            transform: rotate(10deg);
          }

          50%{
            transform: scale(5);
          }

          100% {
            transform: rotate(-10deg);
          }
        }

      `}</style>
      <div style={background} className="background"></div>
      <div style={profileGroup}>
        <div style={profileSubGroup}>
          <div style={profileImg} className="img"></div>
          <h1 style={h1}>Thato Haley</h1>
        </div>
        <ul style={links}>
          <li>Tweets</li>
          <li>Following</li>
          <li>Followers</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

import React from 'react';

const ErrorPage = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)',
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
  };

  const boxStyle = {
    maxWidth: '500px',
    background: 'rgba(255,255,255,0.1)',
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
  };

  const headingStyle = {
    fontSize: '8rem',
    margin: '0 0 10px 0',
    letterSpacing: '8px',
    fontWeight: 600,
  };

  const paragraphStyle = {
    fontSize: '1.4rem',
    margin: '0 0 30px 0',
  };

  const buttonStyle = {
    background: 'white',
    color: '#d32f2f',
    border: 'none',
    padding: '14px 40px',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(255,255,255,0.4)',
    transition: 'background 0.3s ease, color 0.3s ease',
  };

  const buttonHoverStyle = {
    background: '#b71c1c',
    color: 'white',
    boxShadow: '0 8px 25px rgba(255,255,255,0.8)',
  };

  // To handle hover styles in inline style, use React state
  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={paragraphStyle}>Oops! The page you're looking for doesn't exist.</p>
        <button
          style={hover ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
          onClick={goHome}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;


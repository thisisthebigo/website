import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom window size hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const TechClubHero = ({ clubName, introduction, logoUrl }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '1.5rem' : '2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      zIndex: 2,
    },
    textContent: {
      flex: isMobile ? 'none' : '1 1 60%',
      paddingRight: isMobile ? 0 : '2rem',
      textAlign: isMobile ? 'center' : 'left',
      marginBottom: isMobile ? '2rem' : 0,
    },
    clubName: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    introduction: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      maxWidth: '600px',
      color: '#94a3b8',
      marginLeft: isMobile ? 'auto' : 0,
      marginRight: isMobile ? 'auto' : 0,
    },
    logoContainer: {
      flex: isMobile ? 'none' : '1 1 40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      maxWidth: isMobile ? '200px' : '300px',
      maxHeight: isMobile ? '200px' : '300px',
      objectFit: 'contain',
      borderRadius: '50%',
      border: '2px solid rgba(96, 165, 250, 0.5)',
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%),
        radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)
      `,
      backgroundSize: '100px 100px',
      opacity: 0.3,
    },
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(96, 165, 250, 0.05), rgba(168, 85, 247, 0.05))',
      zIndex: 1,
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    basicButton: {
      backgroundColor: '#60a5fa',
      color: 'white',
      fontWeight: 'bold',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '1rem',
    },
    gradientButton: {
      position: 'relative',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      fontWeight: 'bold',
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '1rem',
      background: 'linear-gradient(to right, #6366f1, #a855f7)',
    },
  };

  return (
    <div style={styles.container} id="intro">
      <div style={styles.backgroundPattern}></div>
      <div style={styles.gradientOverlay}></div>
      <div style={styles.content}>
        <div style={styles.textContent}>
          <h1 style={styles.clubName}>{clubName}</h1>
          <p style={styles.introduction}>{introduction}</p>
           <div style={styles.buttonContainer}>
            {/* <Link to="/" style={styles.basicButton}>
              Back to Home
            </Link> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScUE0cuZgpk60vhU4e2B76zU-sljhd-gaR0kwNN_6NKLfpcoA/viewform?usp=sf_link"
              style={styles.gradientButton}
            >
              Register Now
            </a>
          </div>
        </div>
        <div style={styles.logoContainer}>
          <img
            src={logoUrl}
            alt={`${clubName} logo`}
            style={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default TechClubHero;
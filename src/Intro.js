import React from 'react';
import './App.css'

const TechClubHero = ({ clubName, introduction, logoUrl }) => {
    const styles = {
        container: {
            backgroundColor: 'black',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            width: '100%',
            zIndex: 2,
        },
        textContent: {
            flex: '1 1 60%',
            paddingRight: '2rem',
        },
        clubName: {
            fontSize: '5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
        },
        introduction: {
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '600px',
        },
        logoContainer: {
            flex: '1 1 40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            maxWidth: '300px',
            maxHeight: '300px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))',
            mixBlendMode: 'color-burn',
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
        radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
        radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)
      `,
            backgroundSize: '100px 100px',
            opacity: 0.5,
        },
        gradientOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))',
            zIndex: 1,
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.backgroundPattern}></div>
            <div style={styles.gradientOverlay}></div>
            <div style={styles.content}>
                <div style={styles.textContent}>
                    <h1 style={styles.clubName}>{clubName}</h1>
                    <p style={styles.introduction}>{introduction}</p>
                </div>
                <div style={styles.logoContainer}>
                    <img src={logoUrl} alt={`${clubName} logo`} style={styles.logo} className="logo-colorburn"/>
                </div>
            </div>
        </div>
    );
};

export default TechClubHero;
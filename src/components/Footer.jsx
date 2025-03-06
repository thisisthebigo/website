import React, { useState, useEffect } from 'react';

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

const TechClubFooter = ({ clubName }) => {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: 'black',
            color: 'white',
            padding: isMobile ? '1rem 0.5rem' : '2rem 2rem',
            borderTop: '1px solid #1f2937',
        },
        content: {
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '0.8rem' : '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0',
            justifyItems: 'center', // Added this
        },
        section: {
            textAlign: 'center', // Always center-align
            width: '100%', // Take full grid cell width
        },
        heading: {
            fontSize: isMobile ? '0.8rem' : '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            whiteSpace: 'nowrap',
            textAlign: 'center',
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: '0.25rem',
            lineHeight: '1.2',
        },
        link: {
            color: '#d1d5db',
            textDecoration: 'none',
            fontSize: isMobile ? '0.7rem' : '0.9rem',
            display: 'block',
            whiteSpace: 'nowrap',
        },
        copyright: {
            textAlign: 'center',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #1f2937',
            color: '#d1d5db',
            fontSize: isMobile ? '0.65rem' : '0.8rem',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.content}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="#intro" style={styles.link}>Home</a></li>
                        <li style={styles.listItem}><a href="#about" style={styles.link}>About</a></li>
                        <li style={styles.listItem}><a href="#events" style={styles.link}>Events</a></li>
                    </ul>
                </div>
                
                <div style={styles.section}>
                    <h3 style={styles.heading}>Connect</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="mailto:thisisthebigo@gmail.com" style={styles.link}>Contact</a></li>
                        <li style={styles.listItem}><a href="mailto:thisisthebigo@gmail.com" style={styles.link}>Join</a></li>
                    </ul>
                </div>
                
                <div style={styles.section}>
                    <h3 style={styles.heading}>Follow</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="https://x.com/codethebigo" style={styles.link}>Twitter</a></li>
                        <li style={styles.listItem}><a href="https://www.linkedin.com/groups/10014219/" style={styles.link}>LinkedIn</a></li>
                        <li style={styles.listItem}><a href="https://www.instagram.com/thisisthebigo/" style={styles.link}>Instagram</a></li>
                        <li style={styles.listItem}><a href="https://github.com/thisisthebigo" style={styles.link}>GitHub</a></li>
                    </ul>
                </div>
            </div>
            
            <div style={styles.copyright}>
                © {currentYear} {clubName}. All rights reserved.
            </div>
        </footer>
    );
};

export default TechClubFooter;

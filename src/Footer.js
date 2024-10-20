import React from 'react';

const TechClubFooter = ({ clubName }) => {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: '#000',
            color: 'white',
            padding: '4rem 2rem',
            position: 'relative',
            overflow: 'hidden',
        },
        content: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
        },
        section: {
            flex: '1 1 200px',
            marginBottom: '2rem',
        },
        heading: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: '0.5rem',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
        },
        copyright: {
            textAlign: 'center',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
        <footer style={styles.footer}>
            <div style={styles.backgroundPattern}></div>
            <div style={styles.gradientOverlay}></div>
            <div style={styles.content}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Home</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>About Us</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Events</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Projects</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Connect</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Contact Us</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Join the Club</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Newsletter</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Follow Us</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Twitter</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>LinkedIn</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>Instagram</a></li>
                        <li style={styles.listItem}><a href="#" style={styles.link}>GitHub</a></li>
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
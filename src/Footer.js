import React from 'react';

const TechClubFooter = ({ clubName }) => {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: 'black', // Exactly matching Announce component
            color: 'white',
            padding: '4rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid #1f2937', // Added border to separate from Announce component
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
            margin: '0.75rem',
        },
        heading: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
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
            color: '#d1d5db',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
                color: '#60a5fa',
            },
        },
        copyright: {
            textAlign: 'center',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1f2937',
            color: '#d1d5db',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.content}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="#intro" style={styles.link}>Home</a></li>
                        <li style={styles.listItem}><a href="#intro" style={styles.link}>About Us</a></li>
                        <li style={styles.listItem}><a href="#events" style={styles.link}>Events</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Connect</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><a href="mailto:thisisthebigo@gmail.com" style={styles.link}>Contact Us</a></li>
                        <li style={styles.listItem}><a href="mailto:thisisthebigo@gmail.com" style={styles.link}>Join the Club</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Follow Us</h3>
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
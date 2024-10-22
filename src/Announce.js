import React, { useState, useRef, useEffect } from 'react';

const IgniteEventAnnouncement = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (containerRef.current && !isMobile) {
                const { left, top } = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - left,
                    y: event.clientY - top,
                });
            }
        };

        const container = containerRef.current;
        if (container && !isMobile) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container && !isMobile) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [isMobile]);

    const styles = {
        container: {
            position: 'relative',
            height: '40rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            color: 'white',
            overflow: 'hidden',
        },
        content: {
            textAlign: 'center',
            maxWidth: '64rem',
            padding: '0 1rem',
            zIndex: 2,
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
        },
        highlight: {
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            padding: '0 0.25rem',
        },
        description: {
            fontSize: '1.5rem',
            marginBottom: '2rem',
        },
        button: {
            backgroundColor: '#60a5fa',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
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
        spotlight: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle 400px at var(--x) var(--y), rgba(96, 165, 250, 0.15), transparent 80%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
        },
        mobile: {
            container: {
                height: 'auto',
                minHeight: '100vh',
                padding: '2rem 1rem',
            },
            title: {
                fontSize: '2.5rem',
            },
            description: {
                fontSize: '1.2rem',
            },
        },
    };

    return (
        <div
            ref={containerRef}
            style={{
                ...styles.container,
                ...(isMobile ? styles.mobile.container : {}),
            }}
            onMouseEnter={() => {
                if (!isMobile) {
                    const spotlight = containerRef.current.querySelector('.spotlight');
                    if (spotlight) spotlight.style.opacity = 1;
                }
            }}
            onMouseLeave={() => {
                if (!isMobile) {
                    const spotlight = containerRef.current.querySelector('.spotlight');
                    if (spotlight) spotlight.style.opacity = 0;
                }
            }}
        >
            <div style={styles.backgroundPattern}></div>
            <div style={styles.gradientOverlay}></div>
            {!isMobile && (
                <div
                    className="spotlight"
                    style={{
                        ...styles.spotlight,
                        '--x': `${mousePosition.x}px`,
                        '--y': `${mousePosition.y}px`,
                    }}
                ></div>
            )}
            <div style={styles.content}>
                <h2 style={{
                    ...styles.title,
                    ...(isMobile ? styles.mobile.title : {}),
                }}>
                    Announcing <span style={styles.highlight}>Ignite</span>
                </h2>
                <p style={{
                    ...styles.description,
                    ...(isMobile ? styles.mobile.description : {}),
                }}>
                    Ready to spark your journey in tech?<br/>
                    Join us for an electrifying evening filled with mind-bending challenges, exciting opportunities, and a chance to showcase your talent! Whether you're a coding wizard or just starting out, there's something for everyone. Get ready to win amazing prizes, connect with like-minded peers, and be part of the next wave of innovators. This is your chance to ignite your passion for tech and become a member of The Big O—where the future is built. 🌟
                </p>
                <a
                    href="#events"
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Explore Events
                </a>
            </div>
        </div>
    );
};

export default IgniteEventAnnouncement;
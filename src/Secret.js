import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SecretEvent = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (containerRef.current) {
                const { left, top } = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - left,
                    y: event.clientY - top,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const styles = {
        container: {
            minHeight: '100vh',
            padding: '2rem 4rem',
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        subtitle: {
            fontSize: '1.5rem',
            color: '#94a3b8',
            marginBottom: '4rem',
            fontStyle: 'italic',
        },
        questionMark: {
            fontSize: '15rem',
            fontWeight: 'bold',
            marginBottom: '4rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        button: {
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            border: 'none',
            borderRadius: '0.5rem',
            color: 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
        },
        spotlight: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle 800px at var(--x) var(--y), rgba(96, 165, 250, 0.15), transparent 80%)',
            opacity: 0.8,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
        },
        backgroundPattern: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
                radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%),
                radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.3,
        },
    };

    return (
        <div ref={containerRef} style={styles.container}>
            <div style={styles.backgroundPattern} />
            <div
                style={{
                    ...styles.spotlight,
                    '--x': `${mousePosition.x}px`,
                    '--y': `${mousePosition.y}px`,
                }}
            />

            <div style={styles.content}>
                <h1 style={styles.title}>Secret Event</h1>
                <p style={styles.subtitle}>ABANDON ALL HOPE YE WHO ENTER HERE</p>
                <div style={styles.questionMark}>?</div>
                <Link to="/" style={styles.button}>
                    Return to Safety
                </Link>
            </div>
        </div>
    );
};

export default SecretEvent;
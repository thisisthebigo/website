import React, { useState, useRef, useEffect } from 'react';

const EventCards = () => {
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

    const events = [
        {
            name: "BinaryBlitz - Code Fast, Win Big!",
            description: "Think you've got what it takes to be the fastest coder? Test your skills in this rapid-fire quiz packed with coding challenges. Race against the clock, solve problems, and compete for the top spot—and of course, win exciting prizes!",
        },
        {
            name: "DartCoding",
            description: "In this head-to-head challenge, your dart throw sets the clock! The better your aim, the more time you get to solve the problem. Outscore your opponent by solving faster, where every second—and every dart—counts!",
        },
        {
            name: "Gotham code crusade",
            description: "Hack your way through Gotham's virtual labyrinth, solving puzzles and cracking codes to save the city before time runs out. Facing a series of brain-bending puzzles and coding challenges testing your teamwork.",
        },
        {
            name: "CodeTales",
            description: "Code Tales is where storytelling meets programming! Unleash your creativity as you transform a narrative into innovative code. Whether it's weaving algorithms into a plot or turning challenges into solutions, this event is your chance to bring stories to life through programming magic!",
        },
        {
            name: "Secret Event - Unleash the Mystery!",
            description: "Get ready for a thrilling, unexpected challenge that will push your tech skills to the edge! Details are hush-hush for now, but trust us—it's going to be unforgettable. Surprises, excitement, and amazing prizes await those brave enough to face the unknown!",
        }
    ];

    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            padding: '4rem 2rem',
            backgroundColor: 'black',
            color: 'white',
            overflow: 'hidden',
        },
        content: {
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            margin: '0 auto',
        },
        heading: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
        },
        highlight: {
            background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
        },
        card: {
            flex: '1 1 300px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease',
        },
        cardTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
        },
        cardDescription: {
            fontSize: '1.1rem',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
        },
        button: {
            position: 'relative',
            padding: '3px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '12px',
            display: 'inline-block',
        },
        buttonBackground: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #6366f1, #a855f7)',
            borderRadius: '12px',
            opacity: 1,
            transition: 'opacity 0.3s ease',
        },
        buttonInner: {
            position: 'relative',
            padding: '16px 48px',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderRadius: '10px',
            transition: 'background-color 0.3s ease',
            textDecoration: 'none',
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
            background: 'radial-gradient(circle 600px at var(--x) var(--y), rgba(96, 165, 250, 0.15), transparent 80%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
        },
    };

    return (
        <div
            id="events"
            ref={containerRef}
            style={styles.container}
            onMouseEnter={() => {
                const spotlight = containerRef.current.querySelector('.spotlight');
                if (spotlight) spotlight.style.opacity = 1;
            }}
            onMouseLeave={() => {
                const spotlight = containerRef.current.querySelector('.spotlight');
                if (spotlight) spotlight.style.opacity = 0;
            }}
        >
            <div style={styles.backgroundPattern}></div>
            <div style={styles.gradientOverlay}></div>
            <div
                className="spotlight"
                style={{
                    ...styles.spotlight,
                    '--x': `${mousePosition.x}px`,
                    '--y': `${mousePosition.y}px`,
                }}
            ></div>
            <div style={styles.content}>
                <h2 style={styles.heading}>
                    <span style={styles.highlight}>Events</span>
                </h2>
                <div style={styles.cardContainer}>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={styles.cardTitle}>{event.name}</h3>
                            <p style={styles.cardDescription}>{event.description}</p>
                        </div>
                    ))}
                </div>
                <div style={styles.buttonContainer}>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfteSmmlB3VKZpPIY8AVrIhNd38FfTxuWpf7fA2TSQG5Wgifg/viewform"
                        style={{ ...styles.button, textDecoration: 'none' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.querySelector('.button-inner').style.backgroundColor = 'transparent';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.querySelector('.button-inner').style.backgroundColor = 'black';
                        }}
                    >
                        <div style={styles.buttonBackground}></div>
                        <div className="button-inner" style={styles.buttonInner}>
                            Register Now
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCards;
import React, { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    Trophy,
    ScrollText,
    ArrowRight, Phone
} from 'lucide-react';
import {Link} from "react-router-dom";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}


const GothamCodeCrusade = () => {
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


    const { width } = useWindowSize();

    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            padding: width <= 768 ? '1.5rem' : '2rem 4rem',
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
        },
        // header: {
        //     textAlign: 'center',
        //     marginBottom: '4rem',
        // },
        title: {
            fontSize: width <= 480 ? '2rem' : width <= 768 ? '2.5rem' : '4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        subtitle: {
            fontSize: width <= 768 ? '1rem' : '1.25rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: width <= 768 ? '1rem' : '1.5rem',
            marginBottom: width <= 768 ? '2rem' : '4rem',
        },
        infoCard: {
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '1rem',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid #1f2937',
            transition: 'all 0.3s ease',
        },
        infoCardHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
        },
        iconContainer: {
            padding: '0.5rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '0.5rem',
        },
        icon: {
            width: '1.5rem',
            height: '1.5rem',
            color: '#60a5fa',
        },
        cardTitle: {
            fontSize: width <= 768 ? '1.1rem' : '1.25rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        cardContent: {
            fontSize: width <= 768 ? '0.9rem' : '1rem',
            color: '#d1d5db',
        },
        roundsSection: {
            marginBottom: '4rem',
        },
        roundsSectionTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        roundCard: {
            position: 'relative',
            padding: '1.5rem',
            backgroundColor: '#111827',
            borderRadius: '0.75rem',
            border: '1px solid #1f2937',
            transition: 'transform 0.3s ease',
        },
        roundNumber: {
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#60a5fa',
            marginBottom: '1rem',
        },
        roundTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem',
        },
        roundDescription: {
            color: '#94a3b8',
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#d1d5db',
        },
        prizeItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
        },
        prizeAmount: {
            color: '#60a5fa',
            fontWeight: 'bold',
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
        header: {
            textAlign: 'center',
            marginBottom: '2rem',
        },
        buttonContainer: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem',
            flexWrap: 'wrap',
        },
        basicButton: {
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
            textAlign: 'center',
            fontSize: width <= 768 ? '0.875rem' : '1rem',
            '&:hover': {
                backgroundColor: '#3b82f6',
            },
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
            fontSize: width <= 768 ? '0.875rem' : '1rem',
            background: 'linear-gradient(to right, #6366f1, #a855f7)',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        contactCard: {
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '1rem',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid #1f2937',
            marginBottom: '2rem',
            maxWidth: width <= 768 ? '100%' : '400px',
            margin: '0 auto 2rem auto',
        },
        contactHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
        },
        contactTitle: {
            fontSize: width <= 768 ? '1.1rem' : '1.25rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        coordinatorInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#d1d5db',
            marginBottom: '0.5rem',
            fontSize: width <= 768 ? '0.9rem' : '1rem',
        },
    };

    const InfoCard = ({ icon: Icon, title, children }) => (
        <div style={styles.infoCard}>
            <div style={styles.infoCardHeader}>
                <div style={styles.iconContainer}>
                    <Icon style={styles.icon} />
                </div>
                <h3 style={styles.cardTitle}>{title}</h3>
            </div>
            <div style={styles.cardContent}>{children}</div>
        </div>
    );

    const RoundCard = ({ number, title, description }) => (
        <div
            style={styles.roundCard}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <div style={styles.roundNumber}>{number}</div>
            <h4 style={styles.roundTitle}>{title}</h4>
            <p style={styles.roundDescription}>{description}</p>
        </div>
    );

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
                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.title}>Gotham Code Crusade</h1>
                    <p style={styles.subtitle}>
                        An immersive, competitive escape room where teams solve coding and logic-based puzzles
                        to save Gotham from digital chaos.
                    </p>
                </div>

                {/* Buttons */}
                <div style={styles.buttonContainer}>
                    <Link to={'/'}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                        <button style={styles.basicButton}>
                            Back to Home
                        </button>
                    </Link>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfteSmmlB3VKZpPIY8AVrIhNd38FfTxuWpf7fA2TSQG5Wgifg/viewform"
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        <button style={styles.gradientButton}>
                            Register Now
                        </button>
                    </a>
                </div>

                {/* Key Info Grid */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={MapPin} title="Venue">
                        Civil Seminar Hall, ANA Block (Ground Floor)
                    </InfoCard>
                    <InfoCard icon={Calendar} title="Date">
                        November 12, 2024
                    </InfoCard>
                    <InfoCard icon={Clock} title="Duration">
                        3 hours of intense problem-solving
                    </InfoCard>
                    <InfoCard icon={Users} title="Team Size">
                        2-4 participants per team
                    </InfoCard>
                </div>

                {/* Rounds Section */}
                <div style={styles.roundsSection}>
                    <h2 style={styles.roundsSectionTitle}>Round Structure</h2>
                    <div style={styles.gridContainer}>
                        <RoundCard
                            number="1"
                            title="Quiz Quest"
                            description="Navigate through a series of challenging coding puzzles and riddles to unlock crucial clues for your journey."
                        />
                        <RoundCard
                            number="2"
                            title="Treasure Hunt"
                            description="Use your gathered intelligence to track down hidden clues across the digital landscape. Only the top three teams will advance."
                        />
                        <RoundCard
                            number="3"
                            title="Break-in Bat"
                            description="Race against time to locate hidden laptops on campus and solve the final set of riddles that will save Gotham."
                        />
                    </div>
                </div>

                {/* Rules and Guidelines */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={ScrollText} title="Rules & Guidelines">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={{width: '1rem', height: '1rem', color: '#60a5fa'}}/>
                                Teams must consist of 2-4 members
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={{width: '1rem', height: '1rem', color: '#60a5fa'}}/>
                                Total event duration: 3 hours
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={{width: '1rem', height: '1rem', color: '#60a5fa'}}/>
                                Teams must advance through all rounds
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Trophy} title="Prizes">
                        <div style={styles.list}>
                            <div style={styles.prizeItem}>
                                <span>🥇 First Prize</span>
                                <span style={styles.prizeAmount}>To Be Declared</span>
                            </div>
                            <div style={styles.prizeItem}>
                                <span>🥈 Runner-Up</span>
                                <span style={styles.prizeAmount}>To Be Declared</span>
                            </div>
                            <div style={styles.prizeItem}>
                                <span>🎨 Decorations Budget</span>
                                <span style={styles.prizeAmount}>To Be Declared</span>
                            </div>
                        </div>
                    </InfoCard>
                </div>
                <div style={styles.contactCard}>
                    <div style={styles.contactHeader}>
                        <div style={styles.iconContainer}>
                            <Phone style={styles.icon}/>
                        </div>
                        <h3 style={styles.contactTitle}>Student Coordinators.<br/> Need Help, Whatsapp us!</h3>
                    </div>
                    <div style={styles.coordinatorInfo}>
                        <Phone size={16} style={{color: '#60a5fa'}}/>
                        <span>Abhijit: +91 96787 81811</span>
                    </div>
                    <div style={styles.coordinatorInfo}>
                        <Phone size={16} style={{color: '#60a5fa'}}/>
                        <span>Anoop: +91 63623 21227</span>
                    </div>
                    <div style={styles.coordinatorInfo}>
                        <Phone size={16} style={{color: '#60a5fa'}}/>
                        <span>Dhairya: +91 90450 55914</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GothamCodeCrusade;
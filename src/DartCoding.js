import React, { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    Clock,
    MapPin,
    Target,
    Laptop,
    Trophy,
    AlertCircle,
    ArrowRight,
    Timer,
    UserCog,
    Crosshair,
    Check, Phone
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

const DartCoding = () => {
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
            padding: width <= 768 ? '1.5rem' : '2rem 4rem',
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
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
            color: '#d1d5db',
            fontSize: width <= 768 ? '0.9rem' : '1rem',
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
        },
        listItem: {
            display: 'flex',
            alignItems: 'start',
            gap: '0.5rem',
            color: '#d1d5db',
        },
        listItemIcon: {
            width: '1rem',
            height: '1rem',
            color: '#60a5fa',
            marginTop: '0.25rem',
            flexShrink: 0,
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
        sectionTitle: {
            fontSize: width <= 768 ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
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
                    <h1 style={styles.title}>Dart Coding</h1>
                    <p style={styles.subtitle}>
                        Test your rapid coding skills in this unique challenge where your dart-throwing precision
                        determines your coding time. Think fast, code faster!
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
                        Open spot near Oya
                    </InfoCard>
                    <InfoCard icon={Calendar} title="Date">
                        November 11, 2024
                    </InfoCard>
                    <InfoCard icon={Clock} title="Duration">
                        2-3 hours of intense coding
                    </InfoCard>
                    <InfoCard icon={Target} title="Target Audience">
                        Open to all students (Freshmen encouraged)
                    </InfoCard>
                </div>

                {/* Event Flow */}
                <h2 style={styles.sectionTitle}>How It Works</h2>
                <div style={styles.gridContainer}>
                    <InfoCard icon={Timer} title="Event Flow">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                First 10 minutes: Event introduction and rules explanation
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Two participants compete head-to-head
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Immediate evaluation and prize distribution
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                On-time registration available if time permits
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Laptop} title="Requirements">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Personal laptop
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Internet connection
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Preferred compiler (AI assistance disabled)
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Game Rules */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={Crosshair} title="Game Mechanics">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Throw darts to determine your coding time
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Solve problem statements within allocated time
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Three dart throws total for time extensions
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Final evaluation after last dart's time expires
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={UserCog} title="Evaluation Criteria">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Number of working solutions
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Output accuracy
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Code efficiency
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon}/>
                                Code quality in case of no submissions
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Rules and Prizes */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={AlertCircle} title="Rules & Regulations">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                No AI or external assistance allowed
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Coding must stop when time expires
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                No participant interference allowed
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Original code only; plagiarism leads to disqualification
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Trophy} title="Prizes">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                Exciting prizes to be announced soon! 🏆
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
                        <span>Abhishek: +91 63747 95699</span>
                    </div>
                    <div style={styles.coordinatorInfo}>
                        <Phone size={16} style={{color: '#60a5fa'}}/>
                        <span>Ojaswit: +91 85889 80555</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DartCoding;
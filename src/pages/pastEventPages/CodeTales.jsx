import React, { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    Clock,
    MapPin,
    Code,
    Trophy,
    ArrowRight,
    Users,
    Sparkles,
    ScrollText, Phone
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


const CodeTales = () => {
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
            maxWidth: '800px',
            margin: '0 auto',
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: width <= 768 ? '1rem' : '1.5rem',
            marginBottom: width <= 768 ? '2rem' : '4rem',
        },
        fullWidthCard: {
            gridColumn: '1 / -1',
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '1rem',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid #1f2937',
        },
        codeBlock: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            color: '#60a5fa',
            whiteSpace: 'pre-wrap',
            margin: '1rem 0',
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
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: width <= 768 ? '1.1rem' : '1.25rem',
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

    const codeExample = `print("Welcome to the magical world of Pyland!")
print("You are a young adventurer seeking a lost treasure.")

path = input("You reach a fork in the road. Do you go (a) left towards the dark forest or (b) right towards the mountains? ")

if path == 'a':
    print("You enter the dark forest. Strange noises surround you...")
    # Story continues with more choices...`;

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
                    <h1 style={styles.title}>Code Tales</h1>
                    <p style={styles.subtitle}>
                        Where coding meets storytelling! Create interactive adventures through programming.
                        Perfect for beginners and creative minds alike. Turn your stories into engaging
                        choose-your-own-adventure experiences through code.
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
                    {/* <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfteSmmlB3VKZpPIY8AVrIhNd38FfTxuWpf7fA2TSQG5Wgifg/viewform"
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        <button style={styles.gradientButton}>
                            Register Now
                        </button>
                    </a> */}
                </div>


                {/* Key Info Grid */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={MapPin} title="Venue">
                        MBA Seminar Hall
                    </InfoCard>
                    <InfoCard icon={Calendar} title="Date">
                        November 12, 2024
                    </InfoCard>
                    <InfoCard icon={Clock} title="Duration">
                        2 hours of creative coding
                    </InfoCard>
                    <InfoCard icon={Users} title="Target Audience">
                        Freshmen (no prior coding experience needed)
                    </InfoCard>
                </div>

                {/* Event Concept */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={Sparkles} title="What Makes It Special">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Blend creative writing with basic programming concepts
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Create interactive stories where readers make choices
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Learn coding through storytelling
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Perfect for beginners - no prior coding experience required
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Example Code */}
                <div style={styles.gridContainer}>
                    <div style={styles.fullWidthCard}>
                        <div style={styles.infoCardHeader}>
                            <div style={styles.iconContainer}>
                                <Code style={styles.icon}/>
                            </div>
                            <h3 style={styles.cardTitle}>Story Example</h3>
                        </div>
                        <p style={{...styles.cardContent, marginBottom: '1rem'}}>
                            Here's a glimpse of how your interactive story might look in code:
                        </p>
                        <pre style={styles.codeBlock}>{codeExample}</pre>
                    </div>
                </div>

                {/* Event Structure */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={ScrollText} title="Event Flow">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                15 minutes: Introduction and concept explanation
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                45 minutes: Story creation and coding
                            </div>
                            {/*<div style={styles.listItem}>*/}
                            {/*    <ArrowRight style={styles.listItemIcon}/>*/}
                            {/*    Interactive demonstrations and sharing*/}
                            {/*</div>*/}
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Evaluation and feedback
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Trophy} title="Evaluation Criteria">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Story creativity and engagement
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Effective use of programming concepts
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Interactive element implementation
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon}/>
                                Prompting Skills
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Prizes */}
                <div style={styles.gridContainer}>
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
                        <span>Anugrah: +91 95655 40240</span>
                    </div>
                    <div style={styles.coordinatorInfo}>
                        <Phone size={16} style={{color: '#60a5fa'}}/>
                        <span>Kavya: +91 63773 41417</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeTales;
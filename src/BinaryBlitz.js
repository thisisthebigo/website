import React, { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    MapPin,
    Target,
    Brain,
    AlertCircle,
    ArrowRight,
    Layers,
    Timer,
    Zap,
    Check,
    Award,
    List
} from 'lucide-react';


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

const BinaryBlitz = () => {
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
            // '@media (max-width: 768px)': {
            //     padding: '1.5rem',  // Down from 2rem 4rem
            // },
            padding: width <= 768 ? '1.5rem' : '2rem 4rem',
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
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
            // '@media (max-width: 768px)': {
            //     fontSize: '1rem',  // Down from 1.25rem
            // },
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: width <= 768 ? '1rem' : '1.5rem',
            marginBottom: width <= 768 ? '2rem' : '4rem',
            // '@media (max-width: 768px)': {
            //     gap: '1rem',  // Down from 1.5rem
            //     marginBottom: '2rem',  // Down from 4rem
            // },
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
            // '@media (max-width: 768px)': {
            //     fontSize: '1.1rem',  // Down from 1.25rem
            // },
        },
        cardContent: {
            color: '#d1d5db',
            fontSize: width <= 768 ? '0.9rem' : '1rem',
            // '@media (max-width: 768px)': {
            //     fontSize: '0.9rem',  // Slightly smaller for better readability
            // },
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
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: width <= 768 ? '1.5rem' : '2rem',
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
                    <h1 style={styles.title}>BinaryBlitz</h1>
                    <p style={styles.subtitle}>
                        Challenge your coding knowledge in this multi-round elimination quiz that tests your understanding
                        from basic syntax to complex problem-solving. Think fast, answer faster!
                    </p>
                </div>

                {/* Key Info Grid */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={MapPin} title="Venue">
                        Civil/MBA Seminar Hall
                    </InfoCard>
                    <InfoCard icon={Calendar} title="Date">
                        November 11, 2024
                    </InfoCard>
                    <InfoCard icon={Target} title="Target Audience">
                        College freshmen (beginners)
                    </InfoCard>
                    <InfoCard icon={Brain} title="Event Type">
                        Multi-round elimination quiz
                    </InfoCard>
                </div>

                {/* Question Types */}
                <h2 style={styles.sectionTitle}>Question Types</h2>
                <div style={styles.gridContainer}>
                    <InfoCard icon={List} title="Multiple Choice & Fill-ins">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Single/Multiple correct answers (1 point)
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Complete code snippets (2 points)
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Best suitable answer type
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Layers} title="Code & Pattern">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Code arrangement tasks (3 points)
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Pattern matching (2 points)
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Output prediction (3 points)
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Round Structure */}
                <h2 style={styles.sectionTitle}>Round Structure</h2>
                <div style={styles.gridContainer}>
                    <InfoCard icon={Timer} title="Round Progression">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Round 1: Basic syntax and fundamentals
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Middle Rounds: Data structures and algorithms
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Final Rounds: System design and complex problems
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Zap} title="Elimination Pattern">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Cumulative score-based elimination
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Progressive elimination percentage
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Speed-based tiebreakers
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Rules and Scoring */}
                <div style={styles.gridContainer}>
                    <InfoCard icon={AlertCircle} title="Rules & Guidelines">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Number of rounds varies by participant count
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Mixed question types in each round
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Negative marking only in final rounds
                            </div>
                            <div style={styles.listItem}>
                                <ArrowRight style={styles.listItemIcon} />
                                Time limits strictly enforced
                            </div>
                        </div>
                    </InfoCard>
                    <InfoCard icon={Award} title="Scoring System">
                        <div style={styles.list}>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                MCQ: 1 point
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Fill in the Blanks & Pattern Matching: 2 points
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                Code Arrangement & Output: 3 points
                            </div>
                            <div style={styles.listItem}>
                                <Check style={styles.listItemIcon} />
                                True/False with Explanation: 2 points
                            </div>
                        </div>
                    </InfoCard>
                </div>
            </div>
        </div>
    );
};

export default BinaryBlitz;
import React from 'react';
import { Calendar, Award, Zap } from 'lucide-react';

const Events = () => {
    const styles = {
        container: {
            padding: '40px 20px',
            backgroundColor: 'black',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        content: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        section: {
            marginBottom: '40px'
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: '40px',
            position: 'relative'
        },
        sectionText: {
            color: '#94a3b8',
            fontSize: '1.1rem',
            textAlign: 'center'
        },
        cardsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 400px))',
            gap: '30px',
            justifyContent: 'center'
        },
        eventCard: {
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
            overflow: 'hidden'
        },
        cardGlow: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
            opacity: '0.7'
        },
        eventIconContainer: {
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            borderRadius: '12px',
            padding: '15px',
            width: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px'
        },
        eventIcon: {
            width: '24px',
            height: '24px',
            color: '#60a5fa'
        },
        eventTitle: {
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '10px'
        },
        eventDescription: {
            color: '#94a3b8',
            lineHeight: '1.7',
            fontSize: '1.1rem',
            marginBottom: '20px'
        },
        button: {
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            marginTop: 'auto',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        },
        buttonHover: {
            ':hover': {
                backgroundColor: '#2563eb',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                {/* Upcoming Events Section */}
                {/*<section style={styles.section}>*/}
                {/*    <h2 style={styles.sectionTitle}>Upcoming Events</h2>*/}
                {/*    <p style={styles.sectionText}>Coming Soon!</p>*/}
                {/*</section>*/}

                {/* Past Events Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Past Events</h2>
                    <div style={styles.cardsContainer}>
                        <div style={styles.eventCard}>
                            <div style={styles.cardGlow} />
                            <div style={styles.eventIconContainer}>
                                <Zap style={styles.eventIcon} />
                            </div>
                            <h3 style={styles.eventTitle}>Ignite O(1)</h3>
                            <p style={styles.eventDescription}>
                                Ignite O(1) was a high-energy event filled with mind-bending challenges, exciting opportunities, and amazing prizes. It marked the launch of TheBigO and left participants inspired and thrilled to embark on their tech journeys.
                            </p>
                            <button style={{...styles.button, ...styles.buttonHover}}>
                                Explore More
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;
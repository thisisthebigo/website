import React from 'react';
import { Users, Target, Lightbulb, BookOpen, Handshake } from 'lucide-react';

const Announce = () => {
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem 4rem',
            '@media (max-width: 768px)': {
                padding: '1.5rem',
            },
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
        },
        section: {
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '0.5rem',
            textAlign: 'center',
            '@media (max-width: 768px)': {
                fontSize: '1.75rem',
            },
        },
        sectionText: {
            fontSize: '1.1rem',
            color: '#d1d5db',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto',
            '@media (max-width: 768px)': {
                fontSize: '1rem',
                textAlign: 'center',
            },
        },
        aboutSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto',
        },
        visionMissionGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr',
                gap: '2rem',
            },
        },
        visionMissionBox: {
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '1rem',
            padding: '2rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid #1f2937',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '100%',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            },
        },
        visionMissionText: {
            fontSize: '1.1rem',
            color: '#d1d5db',
            lineHeight: '1.7',
            '@media (max-width: 768px)': {
                fontSize: '1rem',
                textAlign: 'center',
            },
        },
        coreValuesList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            padding: 0,
            '@media (max-width: 1024px)': {
                gridTemplateColumns: '1fr',
            },
        },
        coreValueItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            borderRadius: '1rem',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid #1f2937',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            },
        },
        iconContainer: {
            padding: '0.75rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '0.75rem',
            flexShrink: 0,
        },
        icon: {
            width: '1.5rem',
            height: '1.5rem',
            color: '#60a5fa',
        },
        coreValueText: {
            fontSize: '1rem',
            color: '#d1d5db',
            lineHeight: '1.6',
            '@media (max-width: 768px)': {
                fontSize: '0.9rem',
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                {/* Section 1: Brief Introduction */}
                <section style={styles.section}>
                    <div style={styles.aboutSection}>
                        <h2 style={styles.sectionTitle}>About The Big O Club</h2>
                        <p style={styles.sectionText}>
                            The Big O Club is a vibrant, student-led initiative at our university, designed to bring together technology enthusiasts from diverse disciplines. Founded by a group of second-year students, the club was established to address the lack of networking opportunities and collaboration among tech-minded students. Our goal is to create an inclusive platform where students can exchange ideas, share expertise, and work on innovative projects that drive both personal and professional growth.
                        </p>
                    </div>
                </section>

                {/* Section 2: Vision & Mission */}
                <section style={styles.section}>
                    <div style={styles.visionMissionGrid}>
                        <div style={styles.visionMissionBox}>
                            <h2 style={styles.sectionTitle}>Vision</h2>
                            <p style={styles.visionMissionText}>
                                To foster a collaborative and inclusive environment where students from all fields can unite, learn, and innovate together, pushing the boundaries of technology and personal development.
                            </p>
                        </div>
                        <div style={styles.visionMissionBox}>
                            <h2 style={styles.sectionTitle}>Mission</h2>
                            <p style={styles.visionMissionText}>
                                The Big O Club is committed to creating a space where students from all disciplines can converge, collaborate, and challenge each other in their personal and professional growth. We aim to enhance teamwork, skill development, and a sense of community while encouraging exploration of emerging technologies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Core Values */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Core Values</h2>
                    <ul style={styles.coreValuesList}>
                        <li style={styles.coreValueItem}>
                            <div style={styles.iconContainer}>
                                <Users style={styles.icon} />
                            </div>
                            <p style={styles.coreValueText}>
                                <strong>Inclusivity:</strong> We welcome all students, regardless of their technical background, and strive to cultivate a supportive and collaborative atmosphere.
                            </p>
                        </li>
                        <li style={styles.coreValueItem}>
                            <div style={styles.iconContainer}>
                                <Target style={styles.icon} />
                            </div>
                            <p style={styles.coreValueText}>
                                <strong>Diversity:</strong> We bring together individuals with expertise across different fields, promoting interdisciplinary learning and innovation.
                            </p>
                        </li>
                        <li style={styles.coreValueItem}>
                            <div style={styles.iconContainer}>
                                <Lightbulb style={styles.icon} />
                            </div>
                            <p style={styles.coreValueText}>
                                <strong>Skill Development:</strong> We encourage members to enhance their technical and soft skills through peer support, workshops, and friendly competition.
                            </p>
                        </li>
                        <li style={styles.coreValueItem}>
                            <div style={styles.iconContainer}>
                                <BookOpen style={styles.icon} />
                            </div>
                            <p style={styles.coreValueText}>
                                <strong>Innovation:</strong> We introduce students to emerging technologies and cutting-edge discoveries, sparking curiosity and enthusiasm for the ever-evolving tech landscape.
                            </p>
                        </li>
                        <li style={styles.coreValueItem}>
                            <div style={styles.iconContainer}>
                                <Handshake style={styles.icon} />
                            </div>
                            <p style={styles.coreValueText}>
                                <strong>Collaboration:</strong> We believe in the power of teamwork and actively promote joint projects, knowledge sharing, and creative problem-solving.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Announce;
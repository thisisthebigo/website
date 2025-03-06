import React, { useState, useEffect } from 'react';
import { Users, Target, Lightbulb, BookOpen, Handshake } from 'lucide-react';

// Custom hook to track window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Announce = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    section: {
      marginBottom: isMobile ? '2rem' : '4rem',
    },
    sectionTitle: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    sectionText: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#d1d5db',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: isMobile ? 'left' : 'center',
    },
    visionMissionGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1.5rem' : '3rem',
    },
    visionMissionBox: {
      backgroundColor: 'rgba(17, 24, 39, 0.5)',
      borderRadius: '1rem',
      padding: '2rem',
      backdropFilter: 'blur(8px)',
      border: '1px solid #1f2937',
    },
    coreValuesList: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '1rem' : '1.5rem',
      padding: 0,
    },
    coreValueItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      backgroundColor: 'rgba(17, 24, 39, 0.5)',
      borderRadius: '1rem',
      padding: isMobile ? '1rem' : '1.5rem',
      backdropFilter: 'blur(8px)',
      border: '1px solid #1f2937',
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
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#d1d5db',
      lineHeight: '1.6',
    },
  };

  const coreValues = [
    { icon: Users, title: 'Inclusivity', text: 'We welcome all students...' },
    { icon: Target, title: 'Diversity', text: 'We bring together individuals...' },
    { icon: Lightbulb, title: 'Skill Development', text: 'We encourage members...' },
    { icon: BookOpen, title: 'Innovation', text: 'We introduce students...' },
    { icon: Handshake, title: 'Collaboration', text: 'We believe in the power...' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* About Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About The Big O Club</h2>
          <p style={styles.sectionText}>
            The Big O Club is a vibrant, student-led initiative at our university, designed to bring together technology enthusiasts from diverse disciplines. Founded by a group of second-year students, the club was established to address the lack of networking opportunities and collaboration among tech-minded students. Our goal is to create an inclusive platform where students can exchange ideas, share expertise, and work on innovative projects that drive both personal and professional growth.
          </p>
        </section>

        {/* Vision & Mission */}
        <section style={styles.section}>
          <div style={styles.visionMissionGrid}>
            <div style={styles.visionMissionBox}>
              <h2 style={styles.sectionTitle}>Vision</h2>
              <p style={styles.sectionText}>
                To foster a collaborative and inclusive environment where students from all fields can unite, learn, and innovate together, pushing the boundaries of technology and personal development.
              </p>
            </div>
            <div style={styles.visionMissionBox}>
              <h2 style={styles.sectionTitle}>Mission</h2>
              <p style={styles.sectionText}>
                The Big O Club is committed to creating a space where students from all disciplines can converge, collaborate, and challenge each other in their personal and professional growth. We aim to enhance teamwork, skill development, and a sense of community while encouraging exploration of emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Core Values</h2>
          <ul style={{...styles.coreValuesList, gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr'}}>
            {[
              { icon: Users, title: 'Inclusivity', text: 'We welcome all students, regardless of their technical background, and strive to cultivate a supportive and collaborative atmosphere.' },
              { icon: Target, title: 'Diversity', text: 'We bring together individuals with expertise across different fields, promoting interdisciplinary learning and innovation.' },
              { icon: Lightbulb, title: 'Skill Development', text: 'We encourage members to enhance their technical and soft skills through peer support, workshops, and friendly competition.' },
              { icon: BookOpen, title: 'Innovation', text: 'We introduce students to emerging technologies and cutting-edge discoveries, sparking curiosity and enthusiasm for the ever-evolving tech landscape.' },
              { icon: Handshake, title: 'Collaboration', text: 'We believe in the power of teamwork and actively promote joint projects, knowledge sharing, and creative problem-solving.' },
            ].map((item, index) => (
              <li key={index} style={styles.coreValueItem}>
                <div style={styles.iconContainer}>
                  <item.icon style={styles.icon} />
                </div>
                <p style={styles.coreValueText}>
                  <strong>{item.title}:</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Announce;
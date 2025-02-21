import React from 'react';
import { Link } from 'react-router-dom';
import BinaryBlitzImg from '../assets/BinaryBlitz.jpg';
import DartCodingImg from '../assets/DartCoding.jpg';
import CodeTalesImg from '../assets/CodeTales.jpg';
import GCCImg from '../assets/GCC.jpg';
import SecretImg from '../assets/Secret.jpg';

const pastEvents = [
  {
    id: 1,
    title: 'BinaryBlitz',
    date: 'November 11, 2024',
    description:
      'An exciting quiz event featuring coding challenges and rapid-fire rounds.',
    image: BinaryBlitzImg,
    path: '/past-events/binary-blitz',
  },
  {
    id: 2,
    title: 'Dart Coding',
    date: 'November 11, 2024',
    description:
      'Test your rapid coding skills in this unique challenge where your dart-throwing precision determines your coding time. Think fast, code faster!',
    image: DartCodingImg,
    path: '/past-events/dart-coding',
  },
  {
    id: 3,
    title: 'Code Tales',
    date: 'November 12, 2024',
    description:
      'Where coding meets storytelling! Create interactive adventures through programming. Perfect for beginners and creative minds alike. Turn your stories into engaging choose-your-own-adventure experiences through code.',
    image: CodeTalesImg,
    path: '/past-events/code-tales',
  },
  {
    id: 4,
    title: 'Gotham Code Crusade',
    date: 'November 12, 2024',
    description:
      ' An immersive, competitive escape room where teams solve coding and logic-based puzzles to save Gotham from digital chaos.',
    image: GCCImg,
    path: '/past-events/escape-room',
  },
  {
    id: 5,
    title: 'Secret Event',
    date: 'November 12, 2024',
    description:
      ' ABANDON ALL HOPE YE WHO ENTER HERE',
    image: SecretImg,
    path: '/past-events/secret-event',
  },
];

const PastEvents = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 md:px-16 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Past Events</h1>
        <p className="mt-4 text-lg text-gray-400">
          Explore our past events and see how we’ve evolved.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 transition transform hover:scale-105"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
              {event.title}
            </h2>
            <p className="text-lg text-gray-400 mb-2">{event.date}</p>
            <p className="text-gray-300 mb-2">{event.description}</p>
            {/* <p className="text-blue-400 font-bold mb-4">
              Venue: {event.venue}
            </p> */}
            <Link
              to={event.path}
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full transition transform hover:scale-105"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;

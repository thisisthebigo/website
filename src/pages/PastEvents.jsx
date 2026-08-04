import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BinaryBlitzImg from '../assets/BinaryBlitz.jpg';
import DartCodingImg from '../assets/DartCoding.jpg';
import CodeTalesImg from '../assets/CodeTales.jpg';
import GCCImg from '../assets/GCC.jpg';
import SecretImg from '../assets/Secret.jpg';

const PastEvents = () => {
    const [timeStr, setTimeStr] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const str = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
            setTimeStr(str);
        };
        const interval = setInterval(updateClock, 1000);
        updateClock();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-['Space_Grotesk'] antialiased overflow-x-hidden min-h-screen bg-[#050505] text-[#e2e8f0]">
            <nav className="fixed top-0 w-full z-50 border-b border-emerald-900/30 bg-black/90 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-[var(--emerald-matrix)] font-bold text-xl tracking-tighter font-mono">O[1]</span>
                        </div>
                        <div className="hidden lg:flex items-center space-x-4 border-l border-emerald-900/50 pl-6">
                            <div className="flex flex-col">
                                <span className="text-[8px] font-mono text-emerald-500/60 uppercase leading-none">Kernel_Status</span>
                                <span className="text-[10px] font-mono text-emerald-400">0x8004_STABLE</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] font-mono text-emerald-500/60 uppercase leading-none">Net_Traffic</span>
                                <span className="text-[10px] font-mono text-emerald-400">1.2GB/s</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-8 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-500/70">
                        <Link className="hover:text-[var(--emerald-matrix)] transition-colors" to="/">_Home</Link>
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">_Archive</a>
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">_Modules</a>
                        <Link className="text-[var(--emerald-matrix)]" to="/past-events">_Execution_Logs</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                            <a className="bg-[var(--emerald-matrix)] hover:bg-emerald-400 text-black px-4 py-1.5 text-xs font-bold font-mono tracking-tighter flex items-center gap-2" href="https://chat.whatsapp.com/BF1rNw5lEFBLYX7q0vNVzi" target="_blank" rel="noopener noreferrer">
                            <span>INIT_SEQUENCE</span>
                            <span className="material-symbols-outlined text-sm">terminal</span>
                        </a>
                    </div>
                </div>
            </nav>

            <header className="relative pt-32 pb-20 border-b border-emerald-900/20 overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-emerald-500/20 bg-emerald-500/5 font-mono text-[10px] text-[var(--emerald-matrix)] uppercase tracking-[0.3em]">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        Datastream Active // Vault_01
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter font-mono uppercase">
                        ARCHIVE_DATA // <span className="text-[var(--emerald-matrix)] matrix-glow-text">EXECUTION_LOGS</span>
                    </h1>
                    <p className="text-emerald-100/40 font-mono text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        Exploring historical event sequences and system evolutions.
                    </p>
                </div>
            </header>

            <main className="py-24 relative min-h-screen">
                <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex items-center justify-between mb-16 border-b border-emerald-900/30 pb-8">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-emerald-500">folder_open</span>
                            <span className="font-mono text-xs text-emerald-500/70 uppercase tracking-widest">Listing 0x05 Entries</span>
                        </div>
                        <div className="hidden md:flex flex-col items-end gap-1 font-mono text-[9px] text-emerald-500/40">
                            <span>SYS_STATUS::HEALTHY</span>
                            <span>DATA_INTEGRITY::VERIFIED</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Card 1: BinaryBlitz */}
                        <div className="bento-card p-6 flex flex-col group">
                            <div className="glitch-overlay mb-6 border border-emerald-900/30 overflow-hidden aspect-[16/10]">
                                <img alt="BinaryBlitz" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src={BinaryBlitzImg} />
                                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-mono font-bold text-[var(--emerald-matrix)] group-hover:matrix-glow-text transition-all uppercase">BinaryBlitz</h4>
                                <span className="font-mono text-[9px] text-emerald-500/50 border border-emerald-900/50 px-2 py-0.5">[DATE::2024.Q4]</span>
                            </div>
                            <p className="text-emerald-100/40 text-[13px] leading-relaxed mb-8 flex-grow">
                                An exciting quiz event featuring coding challenges and rapid-fire rounds. Nodes synchronized for high-speed algorithmic resolution.
                            </p>
                            <Link to="/past-events/binary-blitz" className="w-full bg-[var(--emerald-matrix)] text-black py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all uppercase flex items-center justify-center gap-2">
                                ACCESS_LOG_0x01
                                <span className="material-symbols-outlined text-sm">login</span>
                            </Link>
                        </div>

                        {/* Card 2: Dart Coding */}
                        <div className="bento-card p-6 flex flex-col group">
                            <div className="glitch-overlay mb-6 border border-emerald-900/30 overflow-hidden aspect-[16/10]">
                                <img alt="Dart Coding" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src={DartCodingImg} />
                                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-mono font-bold text-[var(--emerald-matrix)] group-hover:matrix-glow-text transition-all uppercase">Dart Coding</h4>
                                <span className="font-mono text-[9px] text-emerald-500/50 border border-emerald-900/50 px-2 py-0.5">[DATE::2024.Q4]</span>
                            </div>
                            <p className="text-emerald-100/40 text-[13px] leading-relaxed mb-8 flex-grow">
                                Testing rapid coding skills in this unique challenge where your speed determines your survival. Precision-based logic deployment.
                            </p>
                            <Link to="/past-events/dart-coding" className="w-full bg-[var(--emerald-matrix)] text-black py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all uppercase flex items-center justify-center gap-2">
                                ACCESS_LOG_0x02
                                <span className="material-symbols-outlined text-sm">login</span>
                            </Link>
                        </div>

                        {/* Card 3: Code Tales */}
                        <div className="bento-card p-6 flex flex-col group">
                            <div className="glitch-overlay mb-6 border border-emerald-900/30 overflow-hidden aspect-[16/10]">
                                <img alt="Code Tales" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src={CodeTalesImg} />
                                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-mono font-bold text-[var(--emerald-matrix)] group-hover:matrix-glow-text transition-all uppercase">Code Tales</h4>
                                <span className="font-mono text-[9px] text-emerald-500/50 border border-emerald-900/50 px-2 py-0.5">[DATE::2024.Q4]</span>
                            </div>
                            <p className="text-emerald-100/40 text-[13px] leading-relaxed mb-8 flex-grow">
                                Where coding meets storytelling. Creating interactive adventures through programming. Creative minds aligning via script.
                            </p>
                            <Link to="/past-events/code-tales" className="w-full bg-[var(--emerald-matrix)] text-black py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all uppercase flex items-center justify-center gap-2">
                                ACCESS_LOG_0x03
                                <span className="material-symbols-outlined text-sm">login</span>
                            </Link>
                        </div>

                        {/* Card 4: Gotham Code Crusade */}
                        <div className="bento-card p-6 flex flex-col group">
                            <div className="glitch-overlay mb-6 border border-emerald-900/30 overflow-hidden aspect-[16/10]">
                                <img alt="Gotham Code Crusade" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src={GCCImg} />
                                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-mono font-bold text-[var(--emerald-matrix)] group-hover:matrix-glow-text transition-all uppercase">Gotham Code</h4>
                                <span className="font-mono text-[9px] text-emerald-500/50 border border-emerald-900/50 px-2 py-0.5">[DATE::2024.Q4]</span>
                            </div>
                            <p className="text-emerald-100/40 text-[13px] leading-relaxed mb-8 flex-grow">
                                An immersive, competitive escape room where teams solve coding and logic puzzles to save the system from chaos.
                            </p>
                            <Link to="/past-events/escape-room" className="w-full bg-[var(--emerald-matrix)] text-black py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all uppercase flex items-center justify-center gap-2">
                                ACCESS_LOG_0x04
                                <span className="material-symbols-outlined text-sm">login</span>
                            </Link>
                        </div>

                        {/* Card 5: Secret Event */}
                        <div className="bento-card p-6 flex flex-col group">
                            <div className="glitch-overlay mb-6 border border-emerald-900/30 overflow-hidden aspect-[16/10]">
                                <img alt="Secret Event" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src={SecretImg} />
                                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-mono font-bold text-[var(--emerald-matrix)] group-hover:matrix-glow-text transition-all uppercase">Secret Event</h4>
                                <span className="font-mono text-[9px] text-emerald-500/50 border border-emerald-900/50 px-2 py-0.5">[DATE::UNIDENTIFIED]</span>
                            </div>
                            <p className="text-emerald-100/40 text-[13px] leading-relaxed mb-8 flex-grow">
                                ABANDON ALL HOPE YE WHO ENTER HERE. A deep-dive into legacy systems and undocumented protocols. Proceed with caution.
                            </p>
                            <Link to="/past-events/secret-event" className="w-full bg-[var(--emerald-matrix)] text-black py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all uppercase flex items-center justify-center gap-2">
                                ACCESS_LOG_0x05
                                <span className="material-symbols-outlined text-sm">login</span>
                            </Link>
                        </div>

                        {/* Card 6: Scanning Next Block */}
                        <div className="bento-card p-6 flex flex-col border-dashed border-emerald-900/50 bg-emerald-950/5 relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 scan-line"></div>
                            <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-40 group-hover:opacity-60 transition-opacity">
                                <span className="material-symbols-outlined text-4xl text-emerald-500 mb-4 animate-pulse">downloading</span>
                                <h4 className="text-sm font-mono text-emerald-500 mb-2 uppercase tracking-widest">Scanning_Next_Block...</h4>
                                <p className="text-[9px] font-mono text-emerald-500/50">AWAITING SYSTEM UPDATE FOR Q1_2025 DATASETS</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="bg-black/80 border border-emerald-900/50 px-8 py-4 flex items-center gap-12 font-mono text-[10px] text-emerald-500/40">
                            <div className="flex flex-col">
                                <span className="text-emerald-500/60 uppercase">System_Load</span>
                                <span className="text-emerald-400">14.2%</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-emerald-500/60 uppercase">Buffer_Cache</span>
                                <span className="text-emerald-400">256MB/sec</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-emerald-500/60 uppercase">Network_Latency</span>
                                <span className="text-emerald-400">0.02ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-20 bg-[#020202] border-t border-emerald-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 md:col-span-2">
                            <div className="text-[var(--emerald-matrix)] font-bold text-2xl tracking-tighter font-mono mb-8">O[1]</div>
                            <p className="text-emerald-100/20 text-xs font-mono max-w-sm leading-loose uppercase tracking-widest">
                                A subsidiary of the future. Optimized for maximum creative complexity. Operating in the shadows, building for the light.
                            </p>
                        </div>
                        <div>
                            <h6 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-500/40">__Navigation</h6>
                            <ul className="space-y-4 text-xs font-mono text-emerald-100/40">
                                <li><Link className="hover:text-[var(--emerald-matrix)] transition-colors" to="/">/HOME</Link></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">/DATA_ABOUT</a></li>
                                <li><Link className="hover:text-[var(--emerald-matrix)] transition-colors text-[var(--emerald-matrix)]" to="/past-events">/EXECUTION_LOGS</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-500/40">__Network_Nodes</h6>
                            <ul className="space-y-4 text-xs font-mono text-emerald-100/40">
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">@X_TERMINAL</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">@GIT_REPO</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">@LINKED_ID</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-emerald-900/20 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-[10px] font-mono text-emerald-900 uppercase tracking-widest">
                            © 2026 THE_BIG_O_PROTOCOL. ALL_INTELLECTUAL_ASSETS_RESERVED.
                        </div>
                        <div className="flex items-center space-x-10">
                            <div className="flex items-center space-x-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest">Sys_Status: OPTIMAL</span>
                            </div>
                            <div className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">timer</span>
                                <span id="system-clock">{timeStr}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PastEvents;

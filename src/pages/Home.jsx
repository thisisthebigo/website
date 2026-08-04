import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeStr = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
            const clockElement = document.getElementById('system-clock');
            if (clockElement) clockElement.textContent = timeStr;
        };
        const intervalId = setInterval(updateClock, 1000);
        updateClock();

        // Smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            clearInterval(intervalId);
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <div className="font-['Space_Grotesk'] antialiased overflow-x-hidden bg-obsidian text-slate-200">
            <nav className="fixed top-0 w-full z-50 border-b border-emerald-900/30 bg-black/90 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full border border-emerald-500/30" />
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
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#about">_About</a>
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#mission">_Mission</a>
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#values">_Values</a>
                        <a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#events">_Events</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a className="bg-[var(--emerald-matrix)] hover:bg-emerald-400 text-black px-4 py-1.5 text-xs font-bold font-mono tracking-tighter flex items-center gap-2" href="https://chat.whatsapp.com/BF1rNw5lEFBLYX7q0vNVzi" target="_blank" rel="noopener noreferrer">
                            <span>INIT_SEQUENCE</span>
                            <span className="material-symbols-outlined text-sm">terminal</span>
                        </a>
                    </div>
                </div>
            </nav>

            <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-40"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-emerald-500/20 bg-emerald-500/5 font-mono text-[10px] text-[var(--emerald-matrix)] uppercase tracking-[0.3em]">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            System Live // Phase_02
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none font-mono">
                            THE BIG <span className="text-[var(--emerald-matrix)] matrix-glow-text">O</span>
                        </h1>
                        <p className="text-lg text-emerald-100/60 mb-10 max-w-lg leading-relaxed font-['Space_Grotesk']">
                            A high-fidelity collective of architects, engineers, and visionaries. We optimize human complexity and build the infrastructure of tomorrow through code and community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://chat.whatsapp.com/BF1rNw5lEFBLYX7q0vNVzi" target="_blank" rel="noopener noreferrer" className="bg-[var(--emerald-matrix)] text-black px-8 py-4 font-mono font-bold text-sm hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3">
                                COMMAND_LINE
                                <span className="material-symbols-outlined">chevron_right</span>
                            </a>
                            <a href="#events" className="border border-emerald-900 bg-black hover:border-emerald-500 px-8 py-4 font-bold transition-all font-mono text-sm text-emerald-500 flex items-center justify-center">
                                GET_MODULES
                            </a>
                        </div>
                    </div>
                    <div className="relative flex justify-center py-12">
                        <div className="relative w-full aspect-square max-w-md flex items-center justify-center">
                            <div className="wireframe-sphere w-64 h-64 md:w-80 md:h-80 opacity-60 animate-[pulse_4s_infinite_ease-in-out]"></div>
                            <div className="absolute inset-0 border border-emerald-900/30 rounded-full scale-125 animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute inset-0 border border-emerald-900/20 rounded-full scale-[1.1] animate-[spin_40s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img alt="Big O Club Logo" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full opacity-90 mix-blend-screen" src="/logo.jpg" />
                            </div>
                            <div className="absolute top-0 right-0 bg-black border border-emerald-500/50 p-3 text-[9px] font-mono text-emerald-400">
                                LATENCY: 12ms<br />LOAD: 0.12%
                            </div>
                            <div className="absolute bottom-10 left-0 bg-black border border-emerald-500/50 p-2 text-[9px] font-mono text-emerald-400 -rotate-12">
                                ENCRYPTION: AES-256
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 border-y border-emerald-900/20 bg-black/50" id="about">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-mono text-[var(--emerald-matrix)] text-xs uppercase tracking-[0.6em] mb-4">__Structure_Analysis</h2>
                        <h3 className="text-4xl md:text-5xl font-mono font-bold mb-8 text-white">Engineering the Future</h3>
                        <p className="text-lg text-emerald-100/40 leading-relaxed">
                            The Big O Club functions as a distributed network of talent. We bridge the gap between academic theory and technical mastery through hands-on development and cross-disciplinary collaboration.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10" id="mission">
                        <div className="bento-card p-12 group overflow-hidden">
                            <div className="absolute top-4 right-6 font-mono text-[10px] text-emerald-900">PATH_LOG // 0x01</div>
                            <span className="material-symbols-outlined text-4xl text-[var(--emerald-matrix)] mb-8">radar</span>
                            <h4 className="text-2xl font-mono font-bold mb-4 text-emerald-50 text-white">The Vision</h4>
                            <p className="text-emerald-100/50 leading-relaxed font-light">
                                To establish a decentralised ecosystem of innovation where boundaries between disciplines dissolve, allowing for the rapid prototyping of future technologies.
                            </p>
                            <div className="mt-10 h-0.5 w-16 bg-emerald-900 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-700"></div>
                        </div>
                        <div className="bento-card p-12 group overflow-hidden">
                            <div className="absolute top-4 right-6 font-mono text-[10px] text-emerald-900">PATH_LOG // 0x02</div>
                            <span className="material-symbols-outlined text-4xl text-[var(--emerald-matrix)] mb-8">target</span>
                            <h4 className="text-2xl font-mono font-bold mb-4 text-white">The Mission</h4>
                            <p className="text-emerald-100/50 leading-relaxed font-light">
                                Forging technical leaders through algorithmic challenges, peer-led workshops, and real-world deployment. We don't just learn tech; we build it.
                            </p>
                            <div className="mt-10 h-0.5 w-16 bg-emerald-900 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden" id="values">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div>
                            <h2 className="font-mono text-[var(--emerald-matrix)] text-xs uppercase tracking-[0.6em] mb-4">__Protocol_Parameters</h2>
                            <h3 className="text-4xl md:text-5xl font-mono font-bold text-white">Core Values</h3>
                        </div>
                        <div className="text-emerald-900 font-mono text-[10px] hidden md:block uppercase tracking-widest">
                            System_uptime: 99.999% // Status: Running
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="bento-card md:col-span-8 p-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-14 h-14 shrink-0 bg-emerald-500/10 flex items-center justify-center text-[var(--emerald-matrix)]">
                                <span className="material-symbols-outlined text-3xl">hub</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-mono font-bold mb-3 text-white">Radical Inclusivity</h4>
                                <p className="text-emerald-100/40 text-sm leading-relaxed">Our protocol accepts input from all sources. We believe intelligence is distributed, and innovation happens at the intersection of diverse perspectives and backgrounds.</p>
                            </div>
                        </div>
                        <div className="bento-card md:col-span-4 p-10">
                            <div className="w-14 h-14 mb-8 bg-emerald-500/10 flex items-center justify-center text-[var(--emerald-matrix)]">
                                <span className="material-symbols-outlined text-3xl">diversity_1</span>
                            </div>
                            <h4 className="text-xl font-mono font-bold mb-3 text-white">Cross-Linkage</h4>
                            <p className="text-emerald-100/40 text-sm leading-relaxed">Breaking down silos. Connecting bio-tech with AI, and design with deep systems engineering.</p>
                        </div>
                        <div className="bento-card md:col-span-4 p-10">
                            <div className="w-14 h-14 mb-8 bg-emerald-500/10 flex items-center justify-center text-[var(--emerald-matrix)]">
                                <span className="material-symbols-outlined text-3xl">query_stats</span>
                            </div>
                            <h4 className="text-xl font-mono font-bold mb-3 text-white">Skill Up-Scale</h4>
                            <p className="text-emerald-100/40 text-sm leading-relaxed">Continuous iterative growth. Every member is a node that evolves through constant learning and feedback loops.</p>
                        </div>
                        <div className="bento-card md:col-span-8 p-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-14 h-14 shrink-0 bg-emerald-500/10 flex items-center justify-center text-[var(--emerald-matrix)]">
                                <span className="material-symbols-outlined text-3xl">model_training</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-mono font-bold mb-3 text-white">Pure Innovation</h4>
                                <p className="text-emerald-100/40 text-sm leading-relaxed">We operate at the bleeding edge. Our focus is not on what tech can do today, but what it must do tomorrow. Research-driven, implementation-focused.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-black border-t border-emerald-900/20" id="events">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-20 border-b border-emerald-900/30 pb-10">
                        <div>
                            <h2 className="font-mono text-[var(--emerald-matrix)] text-xs uppercase tracking-[0.6em] mb-4">__Archive_Data</h2>
                            <h3 className="text-4xl md:text-5xl font-mono font-bold text-white">Execution Logs</h3>
                        </div>
                        <Link to="/past-events" className="hidden md:flex items-center gap-2 font-mono text-[10px] text-emerald-500 hover:text-white transition-colors">
                            [ SCAN_ALL_EVENTS ]
                        </Link>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="bento-card group flex flex-col md:flex-row overflow-hidden border-emerald-900/30">
                            <div className="md:w-1/2 p-12 bg-emerald-950/10 flex items-center justify-center border-b md:border-b-0 md:border-r border-emerald-900/30">
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-6xl text-[var(--emerald-matrix)] mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">dynamic_form</span>
                                    <h4 className="text-3xl font-mono font-bold tracking-tight text-white uppercase">Ignite O(1)</h4>
                                    <div className="font-mono text-[10px] text-emerald-500/60 mt-4 tracking-[0.3em]">TIMESTAMP::2024.Q1.001</div>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-12 flex flex-col justify-between">
                                <div>
                                    <h5 className="font-mono text-emerald-500 mb-6 text-[10px] uppercase tracking-[0.4em]">// EVENT_MANIFEST</h5>
                                    <p className="text-emerald-100/50 mb-10 leading-relaxed text-sm font-light">
                                        Successful initialization of the Big O network. The event synchronized 200+ active nodes through competitive logic puzzles and collaborative design sprints. Archive data indicates 98.7% member satisfaction post-execution.
                                    </p>
                                </div>
                                <Link to="/past-events" className="block w-full text-center border border-emerald-900 text-emerald-400 py-4 font-mono text-xs font-bold hover:bg-emerald-500 hover:text-black transition-all">
                                    READ_DATA_BLOB
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#">/HOME</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="#about">/DATA_ABOUT</a></li>
                                <li><Link className="hover:text-[var(--emerald-matrix)] transition-colors" to="/past-events">/EVENT_LOGS</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-emerald-500/40">__Network_Nodes</h6>
                            <ul className="space-y-4 text-xs font-mono text-emerald-100/40">
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="https://x.com/codethebigo" target="_blank" rel="noopener noreferrer">@X_TERMINAL</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="https://github.com/thisisthebigo" target="_blank" rel="noopener noreferrer">@GIT_REPO</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="https://www.linkedin.com/groups/10014219/" target="_blank" rel="noopener noreferrer">@LINKED_ID</a></li>
                                <li><a className="hover:text-[var(--emerald-matrix)] transition-colors" href="https://www.instagram.com/thebigo_ait" target="_blank" rel="noopener noreferrer">@INSTA_GRAM</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-emerald-900/20 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-[10px] font-mono text-emerald-900 uppercase tracking-widest">
                            © 2026 THE_BIG_O_PROTOCAL. ALL_INTELLECTUAL_ASSETS_RESERVED.
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
                                <span id="system-clock">00:00:00 UTC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

/**
 * ==============================================================================
 * MARVEL MULTIVERSE NEXUS — APPLICATION CONTROLLER
 * ==============================================================================
 * Alpine.js reactive state machine, Web Audio multi-harmonic synth,
 * real-time timeline filtering, gamified fan ranking, and local persistence.
 *
 * Modules:
 *  1. State & Constants
 *  2. Universe Theme & Reality Reactivity
 *  3. Audio Engine & Multi-Harmonic Space Synth
 *  4. Search, Filtering, Sorting & Pagination
 *  5. Watch Tracking, Milestones & Credential Badge Generator
 *  6. Cosmic VFX & Reality Switches (Thanos Snap, Hulk Snap, Incursions)
 *  7. Modal Navigation & Helper Utilities
 *  8. Infinity Gauntlet Stone Collection
 *  9. Multiverse Map
 * ==============================================================================
 */

/**
 * 🌟 Marvel Fan Rank Milestone Definitions (Single Source of Truth)
 */
const MARVEL_RANK_MILESTONES = [
    {
        percent: 100,
        level: 5,
        rankTitle: 'MULTIVERSE MASTER',
        rankBadgeIcon: '🏆',
        clearanceCode: 'NEXUS-HE-WHO-REMAINS',
        rankQuote: 'I have seen all of time and space. The timeline is complete.',
        author: 'He Who Remains',
        perk: 'Omniscient Multiverse Timeline Authority & Absolute Mastery'
    },
    {
        percent: 75,
        level: 4,
        rankTitle: 'COSMIC GUARDIAN',
        rankBadgeIcon: '⚡',
        clearanceCode: 'WATCHER-OMNI-NEXUS',
        rankQuote: 'There are things in the universe that cannot be unseen.',
        author: 'The Watcher',
        perk: 'Cosmic Vision Across Multiple Dimensional Timelines'
    },
    {
        percent: 50,
        level: 3,
        rankTitle: "EARTH'S MIGHTIEST AVENGER",
        rankBadgeIcon: '🛡️',
        clearanceCode: 'AVENGERS-PRIME-A1',
        rankQuote: 'Whatever it takes. Together.',
        author: 'Steve Rogers',
        perk: 'Authorized for Avengers Compound High-Threat Tactical Briefings'
    },
    {
        percent: 25,
        level: 2,
        rankTitle: 'S.H.I.E.L.D. AGENT',
        rankBadgeIcon: '🕵️',
        clearanceCode: 'SHIELD-LVL-7',
        rankQuote: 'Welcome to Level 7. The world is full of secrets.',
        author: 'Phil Coulson',
        perk: 'Unlocked Classified S.H.I.E.L.D. Intel & Timeline Credentials'
    },
    {
        percent: 0,
        level: 1,
        rankTitle: 'MARVEL RECRUIT',
        rankBadgeIcon: '🌟',
        clearanceCode: 'INITIATE-TVA-001',
        rankQuote: 'Every journey across the multiverse begins with a single step.',
        author: 'Miss Minutes',
        perk: 'Entry-Level Access to the Multiverse Sacred Timeline'
    }
];

/**
 * 💎 Infinity Stones — 6 stones, each earned by a specific watch milestone.
 * The `check(stats, watchedIds, projectsByUniverse)` function returns true when earned.
 */
const INFINITY_STONES = [
    {
        id: 'space',
        name: 'Space Stone',
        lore: 'Watch all MCU Phase 1 (Timeline #1–12)',
        color: '#3B82F6',
        emoji: '💠',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="#93C5FD"/></svg>',
        check: (stats, watchedIds, pbu) => {
            const phase1 = (pbu && pbu.MCU ? pbu.MCU : []).filter(p => p.timelineOrder <= 12);
            return phase1.length > 0 && phase1.every(p => watchedIds.includes(p.id));
        }
    },
    {
        id: 'mind',
        name: 'Mind Stone',
        lore: 'Watch all MCU Phase 2 (Timeline #13–24)',
        color: '#F59E0B',
        emoji: '👁️',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="#FBBF24" stroke="#F59E0B" stroke-width="1.5"/><circle cx="12" cy="12" r="3.5" fill="#FEF3C7"/><path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="#FDE68A" stroke-width="2" stroke-linecap="round"/></svg>',
        check: (stats, watchedIds, pbu) => {
            const phase2 = (pbu && pbu.MCU ? pbu.MCU : []).filter(p => p.timelineOrder > 12 && p.timelineOrder <= 24);
            return phase2.length > 0 && phase2.every(p => watchedIds.includes(p.id));
        }
    },
    {
        id: 'reality',
        name: 'Reality Stone',
        lore: 'Watch all MCU Phase 3 (Timeline #25–40)',
        color: '#E62429',
        emoji: '🌀',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-6.36-2.64M12 7a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5a5 5 0 0 1-3.54-1.46M12 10a2 2 0 1 1-2 2" stroke="#EF4444" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="#FCA5A5"/></svg>',
        check: (stats, watchedIds, pbu) => {
            const phase3 = (pbu && pbu.MCU ? pbu.MCU : []).filter(p => p.timelineOrder > 24 && p.timelineOrder <= 40);
            return phase3.length > 0 && phase3.every(p => watchedIds.includes(p.id));
        }
    },
    {
        id: 'power',
        name: 'Power Stone',
        lore: 'Watch all Fox X-Men universe titles',
        color: '#9333EA',
        emoji: '💥',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" fill="#A855F7" stroke="#C084FC" stroke-width="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#E9D5FF" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="1.8" fill="#FAF5FF"/></svg>',
        check: (stats, watchedIds, pbu) => {
            const fox = (pbu && pbu.Fox) ? pbu.Fox : [];
            return fox.length > 0 && fox.every(p => watchedIds.includes(p.id));
        }
    },
    {
        id: 'soul',
        name: 'Soul Stone',
        lore: 'Watch all Sony Spider-Verse universe titles',
        color: '#F97316',
        emoji: '☀️',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.5" stroke="#FB923C" stroke-width="2" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="4.5" fill="#F97316"/><circle cx="12" cy="12" r="2" fill="#FFEDD5"/></svg>',
        check: (stats, watchedIds, pbu) => {
            const sony = (pbu && pbu.Sony) ? pbu.Sony : [];
            return sony.length > 0 && sony.every(p => watchedIds.includes(p.id));
        }
    },
    {
        id: 'time',
        name: 'Time Stone',
        lore: 'Watch all 119 titles across all realities',
        color: '#10B981',
        emoji: '⏳',
        iconSvg: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="#34D399" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="#10B981" stroke-width="1.8" fill="#064E3B"/><circle cx="12" cy="12" r="1.8" fill="#A7F3D0"/></svg>',
        check: (stats) => stats.progressPercent >= 100
    },
];

function marvelApp() {
    return {
        // ==========================================================================
        // 1. STATE & CONSTANTS
        // ==========================================================================

        // Filter & Search State
        search: '',
        sortMode: 'timeline', // 'timeline' | 'release'
        category: 'All',
        universe: 'All',
        guideFilter: 'All',
        hideWatched: false,
        mobileFiltersOpen: false,
        viewMode: 'grid', // 'grid' | 'list'

        // Pagination: 24 cards per batch
        visibleCount: 24,

        // Shared AudioContext & Pre-computed Stats
        _audioCtx: null,
        _staticStats: null,

        // User & Modal State
        watchedIds: [],
        selectedProject: null,
        randomModalOpen: false,
        randomPick: null,
        showThemeFlash: false,
        soundEnabled: true,
        categories: ['All', 'Movie', 'Series', 'Special Presentation'],

        // Cosmic VFX & Gamified State
        snapMode: 'normal', // 'normal' | 'thanos_snapped' | 'hulk_restored'
        snappedBackupWatchedIds: [],
        incursionAlert: null,
        screenGlitch: false,
        tvaPortalActive: false,
        logoReaction: null,

        // Spider-Sense & Fan Level Up State
        _lastSpiderAudioTime: 0,
        fanLevelUpModalOpen: false,
        currentLevelUp: null,
        _highestMilestone: parseInt(localStorage.getItem('marvel_highest_milestone') || '0', 10),

        // Universe Theme Configuration
        universeThemes: typeof universeThemes !== 'undefined' ? universeThemes : {},
        quoteAnimKey: 0,
        quoteGlitch: false,

        // 💎 Infinity Gauntlet Mode
        gauntletModalOpen: false,
        _prevStoneCount: 0,
        _projectsByUniverse: null,  // populated in initApp

        // ==========================================================================
        // 2. UNIVERSE THEME & REALITY REACTIVITY
        // ==========================================================================

        /**
         * Universe Theme Key prioritizing current universe selection
         */
        get activeThemeKey() {
            if (this.universe && this.universe !== 'All') {
                if (this.universeThemes[this.universe]) return this.universe;
            }
            if (this.guideFilter && this.guideFilter !== 'All') {
                if (this.universeThemes[this.guideFilter]) return this.guideFilter;
            }
            if (this.category && this.category !== 'All') {
                if (this.universeThemes[this.category]) return this.category;
            }
            return 'All';
        },

        /**
         * The currently active theme object with colors, badge, quote, and pitch
         */
        get activeTheme() {
            return this.universeThemes[this.activeThemeKey] || this.universeThemes['All'] || {
                name: 'Multiverse Nexus',
                badge: 'MULTIVERSE SAGA • ALL TITLES',
                primary: '#E62429',
                secondary: '#F59E0B',
                glow1: 'rgba(230, 36, 41, 0.25)',
                glow2: 'rgba(245, 158, 11, 0.18)',
                quote: 'We’re all stories in the end. Just make it a good one.',
                author: 'The Doctor',
                pitch: 440
            };
        },

        /**
         * Clean sanitized quote text without surrounding quotes
         */
        get currentQuote() {
            const raw = this.activeTheme?.quote || 'We’re all stories in the end. Just make it a good one.';
            return raw.replace(/^["“”']+|["“”']+$/g, '').trim();
        },

        /**
         * Author name of currently active quote
         */
        get currentAuthor() {
            return this.activeTheme?.author || 'The Doctor';
        },

        // ==========================================================================
        // 3. AUDIO ENGINE & MULTI-HARMONIC SPACE SYNTH
        // ==========================================================================

        /**
         * Safe AudioContext getter with guaranteed auto-resume
         */
        getAudioContext() {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return null;
                if (!this._audioCtx || this._audioCtx.state === 'closed') {
                    this._audioCtx = new AudioCtx();
                }
                if (this._audioCtx && this._audioCtx.state === 'suspended') {
                    this._audioCtx.resume();
                }
                return this._audioCtx;
            } catch (e) {
                return null;
            }
        },

        /**
         * Synthesize clean harmonic Web Audio UI chime
         */
        playChime(pitch = 520) {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(pitch, now);
                osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, now + 0.12);

                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.2);
            } catch (e) { }
        },

        /**
         * 👑 Audio: Thanos Infinity Gauntlet Snap
         */
        playThanosSnapAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                // 1. Snapping transient
                const oscSnap = ctx.createOscillator();
                const gainSnap = ctx.createGain();
                oscSnap.type = 'triangle';
                oscSnap.frequency.setValueAtTime(3600, now);
                oscSnap.frequency.exponentialRampToValueAtTime(180, now + 0.07);
                gainSnap.gain.setValueAtTime(0.45, now);
                gainSnap.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
                oscSnap.connect(gainSnap);
                gainSnap.connect(ctx.destination);
                oscSnap.start(now);
                oscSnap.stop(now + 0.09);

                // 2. Cosmic sub-bass shockwave
                const oscBass = ctx.createOscillator();
                const gainBass = ctx.createGain();
                oscBass.type = 'sine';
                oscBass.frequency.setValueAtTime(110, now + 0.02);
                oscBass.frequency.exponentialRampToValueAtTime(28, now + 1.1);
                gainBass.gain.setValueAtTime(0.4, now + 0.02);
                gainBass.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
                oscBass.connect(gainBass);
                gainBass.connect(ctx.destination);
                oscBass.start(now + 0.02);
                oscBass.stop(now + 1.15);
            } catch (e) { }
        },

        /**
         * 💚 Audio: Hulk Nano Gauntlet Snap
         */
        playHulkSnapAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                // Gamma Energy Swell
                const oscSwell = ctx.createOscillator();
                const gainSwell = ctx.createGain();
                oscSwell.type = 'sawtooth';
                oscSwell.frequency.setValueAtTime(80, now);
                oscSwell.frequency.exponentialRampToValueAtTime(360, now + 0.35);
                gainSwell.gain.setValueAtTime(0.001, now);
                gainSwell.gain.linearRampToValueAtTime(0.25, now + 0.25);
                gainSwell.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);
                oscSwell.connect(gainSwell);
                gainSwell.connect(ctx.destination);
                oscSwell.start(now);
                oscSwell.stop(now + 0.4);

                // C-Major Triumph Chord Burst (C4, E4, G4, C5)
                [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + 0.35);
                    gain.gain.setValueAtTime(0.18, now + 0.35);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5 + idx * 0.1);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + 0.35);
                    osc.stop(now + 1.6);
                });
            } catch (e) { }
        },

        /**
         * 🚪 Audio: TVA TemPad Timedoor Whoosh
         */
        playTVAPortalAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.exponentialRampToValueAtTime(45, now + 0.4);
                gain.gain.setValueAtTime(0.22, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.5);
            } catch (e) { }
        },

        /**
         * ⚡ Audio: Incursion Reality Shift Tone
         */
        playIncursionAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(640, now + 0.2);
                gain.gain.setValueAtTime(0.16, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.32);
            } catch (e) { }
        },

        /**
         * 🕷️ Audio: Spider-Sense Electric Tingle / Chime
         */
        playSpiderSenseAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                const osc1 = ctx.createOscillator();
                const osc2 = ctx.createOscillator();
                const gain = ctx.createGain();

                osc1.type = 'triangle';
                osc2.type = 'sine';

                osc1.frequency.setValueAtTime(880, now);
                osc1.frequency.linearRampToValueAtTime(1174.66, now + 0.12);
                osc1.frequency.linearRampToValueAtTime(987.77, now + 0.24);

                osc2.frequency.setValueAtTime(1318.51, now);
                osc2.frequency.linearRampToValueAtTime(1567.98, now + 0.12);
                osc2.frequency.linearRampToValueAtTime(1318.51, now + 0.24);

                gain.gain.setValueAtTime(0.001, now);
                gain.gain.linearRampToValueAtTime(0.2, now + 0.04);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

                osc1.connect(gain);
                osc2.connect(gain);
                gain.connect(ctx.destination);

                osc1.start(now);
                osc2.start(now);
                osc1.stop(now + 0.3);
                osc2.stop(now + 0.3);
            } catch (e) { }
        },

        /**
         * 🌟 Audio: Epic Marvel Level-Up Heroic Fanfare
         */
        playFanfareAudio() {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            try {
                const now = ctx.currentTime;
                const fanfareNotes = [
                    { freq: 261.63, start: 0, dur: 0.18, vol: 0.22 },
                    { freq: 392.00, start: 0.14, dur: 0.18, vol: 0.22 },
                    { freq: 523.25, start: 0.28, dur: 0.22, vol: 0.26 },
                    { freq: 659.25, start: 0.44, dur: 0.26, vol: 0.28 },
                    { freq: 783.99, start: 0.62, dur: 0.85, vol: 0.32 },
                    { freq: 1046.50, start: 0.62, dur: 0.85, vol: 0.22 }
                ];

                fanfareNotes.forEach(note => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(note.freq, now + note.start);
                    gain.gain.setValueAtTime(0.001, now + note.start);
                    gain.gain.linearRampToValueAtTime(note.vol, now + note.start + 0.03);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.dur);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + note.start);
                    osc.stop(now + note.start + note.dur + 0.05);
                });
            } catch (e) { }
        },


        // ==========================================================================
        // 4. SEARCH, FILTERING, SORTING & PAGINATION
        // ==========================================================================

        /**
         * Fast filtered & sorted view of Marvel projects
         */
        get filteredProjects() {
            const source = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            let list = [...source];

            if (this.search.trim()) {
                const q = this.search.toLowerCase().trim();
                list = list.filter(p =>
                    p.title.toLowerCase().includes(q) ||
                    (p.description && p.description.toLowerCase().includes(q)) ||
                    p.universe.toLowerCase().includes(q) ||
                    (p.category && p.category.toLowerCase().includes(q)) ||
                    (p.platform && p.platform.toLowerCase().includes(q)) ||
                    (p.languages && p.languages.some(l => l.toLowerCase().includes(q)))
                );
            }

            if (this.category !== 'All') {
                list = list.filter(p => p.category === this.category);
            }
            if (this.universe !== 'All') {
                list = list.filter(p => p.universe === this.universe);
            }
            if (this.guideFilter !== 'All') {
                list = list.filter(p => p.guide === this.guideFilter);
            }
            if (this.hideWatched) {
                list = list.filter(p => !this.isWatched(p.id));
            }

            if (this.sortMode === 'timeline') {
                list.sort((a, b) => a.timelineOrder - b.timelineOrder);
            } else {
                list.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
            }

            return list;
        },

        /**
         * Paginated view: shows only first visibleCount items
         */
        get visibleProjects() {
            return this.filteredProjects.slice(0, this.visibleCount);
        },

        /**
         * Whether more projects exist beyond current batch
         */
        get hasMoreProjects() {
            return this.visibleCount < this.filteredProjects.length;
        },

        loadMore() {
            this.visibleCount += 24;
        },

        showAll() {
            this.visibleCount = this.filteredProjects.length;
        },

        /**
         * Number of currently applied filters
         */
        get activeFilterCount() {
            let count = 0;
            if (this.search) count++;
            if (this.category !== 'All') count++;
            if (this.universe !== 'All') count++;
            if (this.guideFilter !== 'All') count++;
            if (this.hideWatched) count++;
            if (this.sortMode !== 'timeline') count++;
            return count;
        },

        /**
         * Get phase label for timeline dividers
         */
        getPhaseLabel(project, index) {
            if (this.sortMode !== 'timeline' || ['Fox', 'Sony', 'Netflix', 'ABC'].includes(this.universe)) return null;
            if (index === 0) return null;

            const visibleList = this.visibleProjects;
            const prev = visibleList[index - 1];
            if (!prev) return null;

            const phases = [
                { max: 12, label: 'PHASE 1 — THE BEGINNING' },
                { max: 24, label: 'PHASE 2 — AGE OF HEROES' },
                { max: 40, label: 'PHASE 3 — THE INFINITY SAGA' },
                { max: 58, label: 'PHASE 4 — THE MULTIVERSE SAGA' },
                { max: 75, label: 'PHASE 5 — THE KANG DYNASTY' },
                { max: Infinity, label: 'PHASE 6 — SECRET WARS & BEYOND' }
            ];

            const getPhase = (order) => phases.findIndex(p => order <= p.max);
            const prevPhase = getPhase(prev.timelineOrder);
            const currPhase = getPhase(project.timelineOrder);

            if (currPhase !== prevPhase && currPhase >= 0) {
                return phases[currPhase].label;
            }
            return null;
        },

        resetFilters() {
            this.search = '';
            this.category = 'All';
            this.universe = 'All';
            this.guideFilter = 'All';
            this.sortMode = 'timeline';
            this.hideWatched = false;
            this.visibleCount = 24;
        },

        // ==========================================================================
        // 5. WATCH TRACKING, MILESTONES & CREDENTIAL BADGES
        // ==========================================================================

        isWatched(id) {
            return this.watchedIds.includes(id);
        },

        toggleWatched(id) {
            if (!id) return;
            const oldPercent = this.stats.progressPercent;
            const oldStoneCount = this.collectedStones.length;

            if (this.isWatched(id)) {
                this.watchedIds = this.watchedIds.filter(i => i !== id);
            } else {
                this.watchedIds.push(id);
                this.playChime(880);
            }
            localStorage.setItem('marvel_watched_ids', JSON.stringify(this.watchedIds));

            const newPercent = this.stats.progressPercent;
            if (newPercent > oldPercent) {
                this.checkLevelUpMilestone(oldPercent, newPercent);
            }

            // Check if a new Infinity Stone was earned
            const newStoneCount = this.collectedStones.length;
            if (newStoneCount > oldStoneCount) {
                this.checkNewStoneEarned(oldStoneCount, newStoneCount);
            }
        },

        /**
         * Global collection stats
         */
        get stats() {
            const s = this._staticStats || {};
            const watchedCount = this.watchedIds.length;
            const total = s.total || 0;
            return {
                ...s,
                watchedCount,
                progressPercent: total ? Math.round((watchedCount / total) * 100) : 0
            };
        },

        /**
         * Compute user's fan level based on total watched percent
         */
        get userRank() {
            const percent = this.stats.progressPercent;
            const milestone = MARVEL_RANK_MILESTONES.find(m => percent >= m.percent) || MARVEL_RANK_MILESTONES[MARVEL_RANK_MILESTONES.length - 1];
            return { title: milestone.rankBadgeIcon + ' ' + milestone.rankTitle, level: milestone.level };
        },

        /**
         * Next chronologically unwatched title
         */
        get nextUnwatchedProject() {
            const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            const mcuUnwatched = list
                .filter(p => p.universe === 'MCU' && !this.isWatched(p.id))
                .sort((a, b) => a.timelineOrder - b.timelineOrder);

            if (mcuUnwatched.length > 0) return mcuUnwatched[0];

            const anyUnwatched = list
                .filter(p => !this.isWatched(p.id))
                .sort((a, b) => a.timelineOrder - b.timelineOrder);

            return anyUnwatched[0] || list[0] || null;
        },

        /**
         * Check if watch progress crossed milestone threshold
         */
        checkLevelUpMilestone(oldP, newP) {
            for (const m of MARVEL_RANK_MILESTONES) {
                if (m.percent > 0 && oldP < m.percent && newP >= m.percent && this._highestMilestone < m.percent) {
                    this._highestMilestone = m.percent;
                    localStorage.setItem('marvel_highest_milestone', String(m.percent));
                    this.showLevelUpModal(m);
                    break;
                }
            }
        },

        showLevelUpModal(milestone) {
            this.currentLevelUp = milestone;
            this.fanLevelUpModalOpen = true;
            this.playFanfareAudio();
            if (typeof triggerFanfareVFX === 'function') {
                setTimeout(() => triggerFanfareVFX(), 200);
            }
        },

        openFanRankModal() {
            const percent = this.stats.progressPercent;
            const milestone = MARVEL_RANK_MILESTONES.find(m => percent >= m.percent) || MARVEL_RANK_MILESTONES[MARVEL_RANK_MILESTONES.length - 1];
            this.showLevelUpModal(milestone);
        },

        /**
         * 📥 Download Official Marvel Multiverse Nexus Credential Badge (Canvas PNG)
         */
        downloadRankBadge() {
            const m = this.currentLevelUp || MARVEL_RANK_MILESTONES[MARVEL_RANK_MILESTONES.length - 1];

            const canvas = document.createElement('canvas');
            canvas.width = 900;
            canvas.height = 540;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Background
            const bgGrad = ctx.createLinearGradient(0, 0, 900, 540);
            bgGrad.addColorStop(0, '#0F0305');
            bgGrad.addColorStop(0.5, '#1E060A');
            bgGrad.addColorStop(1, '#050102');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, 900, 540);

            // Tech Grid Lines
            ctx.strokeStyle = 'rgba(230, 36, 41, 0.12)';
            ctx.lineWidth = 1;
            for (let x = 30; x < 900; x += 30) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, 540);
                ctx.stroke();
            }
            for (let y = 30; y < 540; y += 30) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(900, y);
                ctx.stroke();
            }

            // Outer Borders
            ctx.strokeStyle = '#E62429';
            ctx.lineWidth = 4;
            ctx.strokeRect(20, 20, 860, 500);

            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(26, 26, 848, 488);

            // Header Banner
            ctx.fillStyle = '#E62429';
            ctx.fillRect(40, 40, 820, 50);

            ctx.font = '900 24px "Inter", sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('MARVEL MULTIVERSE NEXUS • OFFICIAL CREDENTIAL', 60, 74);

            // Rank Badge Icon & Shield
            ctx.font = '72px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
            ctx.fillText(m.rankBadgeIcon || '🛡️', 60, 210);

            // Rank Title
            ctx.font = '900 36px "Inter", sans-serif';
            ctx.fillStyle = '#F59E0B';
            ctx.fillText(m.rankTitle || 'MARVEL FAN', 170, 175);

            // Clearance Code
            ctx.font = '700 16px "JetBrains Mono", monospace';
            ctx.fillStyle = '#94A3B8';
            ctx.fillText('CLEARANCE: ' + (m.clearanceCode || 'AUTH-000') + '  |  LEVEL ' + (m.level || 1), 170, 210);

            // Quote Box
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(60, 250, 780, 85);
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
            ctx.lineWidth = 1;
            ctx.strokeRect(60, 250, 780, 85);

            ctx.font = 'italic 18px "Inter", sans-serif';
            ctx.fillStyle = '#E2E8F0';
            const quoteText = '“' + (m.rankQuote || 'Part of the journey is the end.') + '”';
            ctx.fillText(quoteText, 80, 290);
            ctx.font = '700 14px "Inter", sans-serif';
            ctx.fillStyle = '#F59E0B';
            ctx.fillText('— ' + (m.author || 'Marvel Studios'), 80, 318);

            // Progress Bar Track
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(60, 370, 780, 24);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.strokeRect(60, 370, 780, 24);

            // Progress Fill
            const pWidth = Math.max(10, (780 * (this.stats.progressPercent || 0)) / 100);
            const pGrad = ctx.createLinearGradient(60, 370, 840, 370);
            pGrad.addColorStop(0, '#E62429');
            pGrad.addColorStop(0.5, '#F59E0B');
            pGrad.addColorStop(1, '#10B981');
            ctx.fillStyle = pGrad;
            ctx.fillRect(62, 372, pWidth - 4, 20);

            // Progress Stats Text
            ctx.font = '700 16px "JetBrains Mono", monospace';
            ctx.fillStyle = '#F8FAFC';
            ctx.fillText('PROGRESS: ' + this.stats.progressPercent + '% COMPLETE (' + this.stats.watchedCount + ' / ' + this.stats.total + ' TITLES WATCHED)', 60, 425);

            // Verification Seal
            ctx.font = '600 12px "JetBrains Mono", monospace';
            ctx.fillStyle = '#64748B';
            ctx.fillText('AUTHENTICATED BY TVA TEMPORAL ARCHIVES • SACRED TIMELINE CONTINUITY VERIFIED', 60, 480);

            // Export & Download
            const link = document.createElement('a');
            link.download = 'marvel-rank-' + (m.rankTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')) + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            this.playChime(1046.50);
        },

        // ==========================================================================
        // 6. COSMIC VFX & REALITY SWITCHES
        // ==========================================================================

        /**
         * 👑 ACTION: Enhanced Thanos Snap
         */
        triggerThanosSnap() {
            this.playThanosSnapAudio();
            if (typeof triggerThanosSnapVFX === 'function') {
                triggerThanosSnapVFX();
            }

            if (this.watchedIds.length > 0) {
                this.snappedBackupWatchedIds = [...this.watchedIds];
                this.watchedIds = [];
                localStorage.setItem('marvel_watched_ids', JSON.stringify([]));
            }

            this.snapMode = 'thanos_snapped';
            this.logoReaction = 'thanos';
            setTimeout(() => {
                this.logoReaction = null;
            }, 1800);
        },

        /**
         * 💚 ACTION: Enhanced Hulk Snap
         */
        triggerHulkSnap() {
            this.playHulkSnapAudio();
            if (typeof triggerHulkSnapVFX === 'function') {
                triggerHulkSnapVFX();
            }

            if (this.snappedBackupWatchedIds.length > 0) {
                this.watchedIds = [...this.snappedBackupWatchedIds];
                localStorage.setItem('marvel_watched_ids', JSON.stringify(this.watchedIds));
            } else {
                const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
                this.watchedIds = list.slice(0, 30).map(p => p.id);
                localStorage.setItem('marvel_watched_ids', JSON.stringify(this.watchedIds));
            }

            this.snapMode = 'hulk_restored';
            this.logoReaction = 'hulk';
            setTimeout(() => {
                this.logoReaction = null;
            }, 1800);
        },

        /**
         * 🌌 Alternate Universe Switch with Doctor Strange Portal Transition
         */
        triggerUniverseIncursion(uniName) {
            this.showThemeFlash = true;
            this.quoteGlitch = true;
            this.quoteAnimKey++;

            // 🌀 Doctor Strange Portal rings + sparks
            if (typeof triggerPortalTransition === 'function') {
                const portalColor = (uniName && uniName !== 'All')
                    ? (this.universeThemes[uniName] || this.activeTheme).primary
                    : this.activeTheme.primary;
                triggerPortalTransition(portalColor);
            }

            if (uniName && uniName !== 'All') {
                const theme = this.universeThemes[uniName] || this.activeTheme;
                this.screenGlitch = true;
                this.incursionAlert = {
                    title: theme.name || (uniName + ' Universe'),
                    badge: theme.badge || 'INCURSION DETECTED',
                    code: 'REALITY FREQ • ' + uniName.toUpperCase() + ' TIMELINE'
                };
                this.playIncursionAudio();

                setTimeout(() => {
                    this.screenGlitch = false;
                }, 300);

                if (this._incursionTimeout) clearTimeout(this._incursionTimeout);
                this._incursionTimeout = setTimeout(() => {
                    this.incursionAlert = null;
                }, 5500);
            } else {
                this.incursionAlert = null;
                this.screenGlitch = false;
                this.playChime(440);
            }

            setTimeout(() => {
                this.showThemeFlash = false;
                this.quoteGlitch = false;
            }, 300);
        },

        triggerSoftThemeReaction() {
            this.showThemeFlash = true;
            this.quoteGlitch = true;
            this.quoteAnimKey++;
            this.incursionAlert = null;
            this.screenGlitch = false;
            this.playChime(this.activeTheme.pitch);

            setTimeout(() => {
                this.showThemeFlash = false;
                this.quoteGlitch = false;
            }, 300);
        },

        triggerThemeReaction() {
            if (this.universe && this.universe !== 'All') {
                this.triggerUniverseIncursion(this.universe);
            } else {
                this.triggerSoftThemeReaction();
            }
        },

        setQuickUniverse(uni) {
            this.resetFilters();
            this.universe = uni;
            if (uni === 'All') {
                this.triggerSoftThemeReaction();
            } else {
                this.triggerUniverseIncursion(uni);
            }
        },

        setQuickGuide(guide) {
            this.resetFilters();
            this.guideFilter = guide;
            this.triggerSoftThemeReaction();
        },

        setQuickCategory(cat) {
            this.resetFilters();
            this.category = cat;
            this.triggerSoftThemeReaction();
        },

        // ==========================================================================
        // 8. INFINITY GAUNTLET STONE COLLECTION
        // ==========================================================================

        /**
         * Computed array of stone IDs that are currently earned
         */
        get collectedStones() {
            if (!this._projectsByUniverse) return [];
            return INFINITY_STONES
                .filter(s => s.check(this.stats, this.watchedIds, this._projectsByUniverse))
                .map(s => s.id);
        },

        /**
         * All 6 stone definitions with earned status attached
         */
        get stonesWithStatus() {
            if (!this._projectsByUniverse) return INFINITY_STONES.map(s => ({ ...s, earned: false }));
            const earned = new Set(this.collectedStones);
            return INFINITY_STONES.map(s => ({ ...s, earned: earned.has(s.id) }));
        },

        /**
         * True when all 6 stones have been collected
         */
        get gauntletComplete() {
            return this.collectedStones.length === INFINITY_STONES.length;
        },

        /**
         * Called after toggleWatched — fires fanfare + VFX when a new stone is earned
         */
        checkNewStoneEarned(oldCount, newCount) {
            if (newCount <= oldCount) return;
            const newlyEarned = this.stonesWithStatus.filter(s => s.earned).slice(oldCount);
            if (newlyEarned.length === 0) return;

            const stone = newlyEarned[0];
            this.playStoneAudio(stone.color);

            // Show brief incursion-style alert for the new stone
            if (this._stoneAlertTimeout) clearTimeout(this._stoneAlertTimeout);
            this.incursionAlert = {
                title: stone.emoji + ' ' + stone.name + ' ACQUIRED!',
                badge: 'INFINITY STONE COLLECTED',
                code: stone.lore
            };
            this._stoneAlertTimeout = setTimeout(() => {
                this.incursionAlert = null;
            }, 4000);

            // If all 6 collected, show level-up fanfare
            if (this.gauntletComplete) {
                setTimeout(() => this.playFanfareAudio(), 800);
            }
        },

        /**
         * Audio: unique tone per stone color using Web Audio synthesis
         * @param {string} color - hex color of the stone
         */
        playStoneAudio(color) {
            if (!this.soundEnabled) return;
            const ctx = this.getAudioContext();
            if (!ctx) return;

            // Map stone color to a unique frequency
            const freqMap = {
                '#3B82F6': 523.25,  // Space — C5
                '#F59E0B': 659.25,  // Mind  — E5
                '#E62429': 783.99,  // Reality — G5
                '#9333EA': 880.00,  // Power — A5
                '#F97316': 987.77,  // Soul  — B5
                '#10B981': 1046.50, // Time  — C6
            };
            const freq = freqMap[color] || 660;

            try {
                const now = ctx.currentTime;
                // Shimmer: two oscillators a perfect 5th apart
                [freq, freq * 1.5].forEach((f, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(f, now + i * 0.08);
                    gain.gain.setValueAtTime(0.001, now + i * 0.08);
                    gain.gain.linearRampToValueAtTime(0.22, now + i * 0.08 + 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.9);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.08);
                    osc.stop(now + i * 0.08 + 1.0);
                });
            } catch (e) { }
        },

        // ==========================================================================
        // 7. MODAL NAVIGATION & HELPER UTILITIES
        // ==========================================================================

        openProject(p) {
            if (p) {
                this.selectedProject = p;
                this.playTVAPortalAudio();
            }
        },

        navigateModal(direction) {
            if (!this.selectedProject) return;
            const currentList = this.filteredProjects;
            if (!currentList.length) return;
            const index = currentList.findIndex(p => p.id === this.selectedProject.id);
            if (index === -1) return;
            const nextIndex = (index + direction + currentList.length) % currentList.length;
            this.selectedProject = currentList[nextIndex];
            this.playTVAPortalAudio();
        },

        pickRandomProject() {
            const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            const unwatched = list.filter(p => !this.isWatched(p.id));
            const pool = unwatched.length > 0 ? unwatched : list;
            if (!pool.length) return;
            const random = pool[Math.floor(Math.random() * pool.length)];
            this.randomPick = random;
            this.randomModalOpen = true;
            this.playChime(600);
        },

        jumpToNextUnwatched() {
            const next = this.nextUnwatchedProject;
            if (!next) return;

            this.resetFilters();
            this.playChime(750);

            this.$nextTick(() => {
                const card = document.getElementById('project-card-' + next.id) || document.getElementById('project-list-' + next.id);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('ring-4', 'ring-red-500', 'scale-[1.02]');
                    setTimeout(() => {
                        card.classList.remove('ring-4', 'ring-red-500', 'scale-[1.02]');
                    }, 2500);
                } else {
                    this.openProject(next);
                }
            });
        },

        getCustomFreeLink(p) {
            if (!p) return 'https://t.me/+7oiLC4M_Ok4yYjk9';
            return p.customLink || 'https://t.me/+7oiLC4M_Ok4yYjk9';
        },

        getStreamingPlatformInfo(p) {
            if (!p) return { name: 'Disney+', url: 'https://www.disneyplus.com', badgeClass: 'bg-blue-950/80 text-blue-300 border-blue-700/80 hover:bg-blue-900', icon: '▶' };
            const q = encodeURIComponent(p.title);

            if (p.universe === 'Sony' || p.platform === 'Sony Pictures') {
                return {
                    name: 'Sony / Prime',
                    url: `https://www.amazon.com/s?k=${encodeURIComponent(p.title + ' marvel movie')}`,
                    badgeClass: 'bg-pink-950/80 text-pink-300 border-pink-700/80 hover:bg-pink-900',
                    icon: '▶'
                };
            }

            if (p.universe === 'Netflix' || p.platform === 'Netflix') {
                return {
                    name: 'Netflix',
                    url: `https://www.netflix.com/search?q=${q}`,
                    badgeClass: 'bg-red-950/80 text-red-300 border-red-700/80 hover:bg-red-900',
                    icon: '▶'
                };
            }

            if (p.platform === 'Hulu') {
                return {
                    name: 'Hulu',
                    url: `https://www.hulu.com/search?q=${q}`,
                    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80 hover:bg-emerald-900',
                    icon: '▶'
                };
            }

            return {
                name: 'Disney+',
                url: `https://www.disneyplus.com/search?q=${q}`,
                badgeClass: 'bg-blue-950/80 text-blue-300 border-blue-700/80 hover:bg-blue-900',
                icon: '▶'
            };
        },

        isSpiderTitle(p) {
            if (!p) return false;
            const t = (p.title || '').toLowerCase();
            return t.includes('spider') ||
                t.includes('venom') ||
                t.includes('miles') ||
                t.includes('morales') ||
                t.includes('carnage') ||
                t.includes('kraven') ||
                t.includes('noir') ||
                t.includes('web') ||
                p.universe === 'Sony';
        },

        triggerSpiderSense(id) {
            this.playSpiderSenseAudio();
        },

        sortedLanguages(langs) {
            if (!langs) return [];
            return [...langs].sort((a, b) => {
                if (a === 'Tamil') return -1;
                if (b === 'Tamil') return 1;
                return 0;
            });
        },

        formatLanguagePreview(langs) {
            if (!langs || !langs.length) return '';
            if (langs.length === 1) return langs[0];
            if (langs.includes('Tamil')) return 'Tamil +' + (langs.length - 1);
            return langs[0] + ' +' + (langs.length - 1);
        },

        getCategoryColor(c) {
            const colors = {
                'Movie': 'bg-[#E62429]',
                'Series': 'bg-blue-600',
                'Special Presentation': 'bg-amber-600'
            };
            return colors[c] || 'bg-zinc-700';
        },

        getUniverseColor(u) {
            const colors = {
                'MCU': 'bg-[#E62429]',
                'Fox': 'bg-blue-500',
                'Sony': 'bg-yellow-500',
                'Netflix': 'bg-red-700',
                'ABC': 'bg-amber-600',
                'Universal': 'bg-emerald-600',
                'Lionsgate': 'bg-purple-600',
                'Disney': 'bg-cyan-600',
                'CBS': 'bg-slate-600',
                'Republic': 'bg-slate-600',
                'Direct': 'bg-slate-600'
            };
            return colors[u] || 'bg-zinc-600';
        },

        getGuideColor(g) {
            const colors = {
                'Essential': 'bg-emerald-600 text-white',
                'Recommended': 'bg-blue-500 text-white',
                'Optional': 'bg-zinc-700 text-slate-300'
            };
            return colors[g] || 'bg-zinc-600';
        },

        bulkWatchUniverse(uni) {
            const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            const ids = list.filter(p => p.universe === uni).map(p => p.id);
            const merged = new Set([...this.watchedIds, ...ids]);
            this.watchedIds = [...merged];
            localStorage.setItem('marvel_watched_ids', JSON.stringify(this.watchedIds));
            this.playChime(880);
        },

        bulkUnwatchUniverse(uni) {
            const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            const idsToRemove = new Set(list.filter(p => p.universe === uni).map(p => p.id));
            this.watchedIds = this.watchedIds.filter(id => !idsToRemove.has(id));
            localStorage.setItem('marvel_watched_ids', JSON.stringify(this.watchedIds));
        },

        // ==========================================================================
        // INITIALIZATION
        // ==========================================================================

        async initApp() {
            try {
                const saved = localStorage.getItem('marvel_watched_ids');
                this.watchedIds = saved ? JSON.parse(saved) : [];
                localStorage.removeItem('marvel_public_images');
            } catch (e) {
                this.watchedIds = [];
            }

            if (typeof enableLazyProjectGraphics === 'function' && typeof marvelProjects !== 'undefined') {
                enableLazyProjectGraphics(marvelProjects);
            }

            const list = typeof marvelProjects !== 'undefined' ? marvelProjects : [];
            this._staticStats = {
                total: list.length,
                essential: list.filter(p => p.guide === 'Essential').length,
                mcu: list.filter(p => p.universe === 'MCU').length,
                fox: list.filter(p => p.universe === 'Fox').length,
                sony: list.filter(p => p.universe === 'Sony').length,
                netflix: list.filter(p => p.universe === 'Netflix').length,
                abc: list.filter(p => p.universe === 'ABC').length,
                series: list.filter(p => p.category === 'Series').length,
                movies: list.filter(p => p.category === 'Movie').length
            };

            // Build projectsByUniverse lookup once for stone checks & map rendering
            this._projectsByUniverse = list.reduce((acc, p) => {
                if (!acc[p.universe]) acc[p.universe] = [];
                acc[p.universe].push(p);
                return acc;
            }, {});

            if (typeof initCosmicGalaxyCanvas === 'function') {
                this.$nextTick ? this.$nextTick(() => initCosmicGalaxyCanvas()) : setTimeout(() => initCosmicGalaxyCanvas(), 50);
            }

            const progressBar = document.getElementById('scroll-progress');
            if (progressBar) {
                let ticking = false;
                const updateScroll = () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                            const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)) : 0;
                            progressBar.style.width = progress + '%';
                            ticking = false;
                        });
                        ticking = true;
                    }
                };
                window.addEventListener('scroll', updateScroll, { passive: true });
                updateScroll();
            }

            const unlockAudio = () => {
                const ctx = this.getAudioContext();
                if (ctx && ctx.state === 'suspended') {
                    ctx.resume();
                }
            };
            window.addEventListener('pointerdown', unlockAudio, { once: true, passive: true });
            window.addEventListener('keydown', unlockAudio, { once: true, passive: true });
        }
    };
}

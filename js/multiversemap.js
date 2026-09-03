/**
 * ==============================================================================
 * MULTIVERSE MAP — Interactive SVG Branch Tree Renderer
 * PORTAL TRANSITION — Doctor Strange Ring-Burst Screen Overlay
 * ==============================================================================
 */

// =============================================================================
// MAP NODE CONFIG — Position each universe around the center root
// =============================================================================

const MAP_UNIVERSE_NODES = [
    { key: 'MCU',       label: 'MCU',          color: '#E62429', emoji: '🛡️', angle: 270 },
    { key: 'Fox',       label: 'Fox X-Men',    color: '#3B82F6', emoji: '⚡', angle: 315 },
    { key: 'Sony',      label: 'Spider-Verse', color: '#E11D48', emoji: '🕷️', angle: 0   },
    { key: 'Netflix',   label: 'Defenders',    color: '#E50914', emoji: '⚔️', angle: 45  },
    { key: 'ABC',       label: 'S.H.I.E.L.D', color: '#F59E0B', emoji: '🕵️', angle: 90  },
    { key: 'Universal', label: 'Hulk',         color: '#10B981', emoji: '💚', angle: 135 },
    { key: 'Lionsgate', label: 'Punisher',     color: '#9333EA', emoji: '💀', angle: 180 },
    { key: 'Disney',    label: 'Disney',       color: '#06B6D4', emoji: '✨', angle: 225 },
];

// =============================================================================
// 🗺️ MULTIVERSE MAP RENDERER
// =============================================================================

/**
 * Render an interactive SVG multiverse map inside the given container.
 * @param {HTMLElement} container        - Element to render SVG into
 * @param {Object}      stats            - app.stats object { watchedCount, total, ... }
 * @param {number[]}    watchedIds       - Array of watched project IDs
 * @param {Object}      projectsByUniverse - { MCU: [projects], Fox: [...], ... }
 * @param {Function}    onSelect         - Called with universe key when node clicked
 */
function renderMultiverseMap(container, stats, watchedIds, projectsByUniverse, onSelect) {
    if (!container) return;

    // Use a canonical responsive coordinate system that scales cleanly to any screen width (mobile & desktop)
    const W = 640;
    const H = 480;
    const cx = W / 2;
    const cy = H / 2;
    const orbitR = 170;

    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Interactive Multiverse Map — click a universe to filter');
    svg.style.display = 'block';
    svg.style.maxHeight = '100%';
    svg.id = 'multiverse-map-svg';

    // ── Defs: gradients ─────────────────────────────────────────────────────
    const defs = document.createElementNS(NS, 'defs');

    // Soft glow filter
    const filter = document.createElementNS(NS, 'filter');
    filter.setAttribute('id', 'mmap-glow');
    filter.setAttribute('x', '-60%'); filter.setAttribute('y', '-60%');
    filter.setAttribute('width', '220%'); filter.setAttribute('height', '220%');
    const feBlur = document.createElementNS(NS, 'feGaussianBlur');
    feBlur.setAttribute('stdDeviation', '5');
    feBlur.setAttribute('result', 'blur');
    const feMerge = document.createElementNS(NS, 'feMerge');
    const feMN1 = document.createElementNS(NS, 'feMergeNode');
    feMN1.setAttribute('in', 'blur');
    const feMN2 = document.createElementNS(NS, 'feMergeNode');
    feMN2.setAttribute('in', 'SourceGraphic');
    feMerge.appendChild(feMN1);
    feMerge.appendChild(feMN2);
    filter.appendChild(feBlur);
    filter.appendChild(feMerge);
    defs.appendChild(filter);
    svg.appendChild(defs);

    // ── Starfield ────────────────────────────────────────────────────────────
    for (let i = 0; i < 50; i++) {
        const star = document.createElementNS(NS, 'circle');
        star.setAttribute('cx', Math.random() * W);
        star.setAttribute('cy', Math.random() * H);
        star.setAttribute('r', (Math.random() * 1.2 + 0.3).toFixed(2));
        star.setAttribute('fill', `rgba(255,255,255,${(Math.random() * 0.25 + 0.08).toFixed(2)})`);
        svg.appendChild(star);
    }

    // ── Branch lines from center to each universe ────────────────────────────
    MAP_UNIVERSE_NODES.forEach(node => {
        const rad = (node.angle * Math.PI) / 180;
        const nx = cx + orbitR * Math.cos(rad);
        const ny = cy + orbitR * Math.sin(rad);

        // Per-node gradient
        const gid = `mmap-grad-${node.key}`;
        const grad = document.createElementNS(NS, 'linearGradient');
        grad.setAttribute('id', gid);
        grad.setAttribute('x1', cx); grad.setAttribute('y1', cy);
        grad.setAttribute('x2', nx); grad.setAttribute('y2', ny);
        grad.setAttribute('gradientUnits', 'userSpaceOnUse');
        const s1 = document.createElementNS(NS, 'stop');
        s1.setAttribute('offset', '0%');  s1.setAttribute('stop-color', 'rgba(0,240,255,0.3)');
        const s2 = document.createElementNS(NS, 'stop');
        s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', node.color);
        grad.appendChild(s1); grad.appendChild(s2);
        defs.appendChild(grad);

        const line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', cx); line.setAttribute('y1', cy);
        line.setAttribute('x2', nx); line.setAttribute('y2', ny);
        line.setAttribute('stroke', `url(#${gid})`);
        line.setAttribute('stroke-width', '1.5');
        line.setAttribute('class', 'map-branch-line');
        line.setAttribute('opacity', '0.55');
        svg.appendChild(line);
    });

    // ── Center "NEXUS" Root Node ─────────────────────────────────────────────
    const rootG = document.createElementNS(NS, 'g');
    rootG.style.cursor = 'pointer';
    rootG.setAttribute('aria-label', 'All Realities — show everything');
    rootG.setAttribute('role', 'button');
    rootG.setAttribute('tabindex', '0');

    const rootGlow = document.createElementNS(NS, 'circle');
    rootGlow.setAttribute('cx', cx); rootGlow.setAttribute('cy', cy);
    rootGlow.setAttribute('r', '40');
    rootGlow.setAttribute('fill', 'none');
    rootGlow.setAttribute('stroke', 'rgba(0,240,255,0.25)');
    rootGlow.setAttribute('stroke-width', '10');
    rootGlow.setAttribute('filter', 'url(#mmap-glow)');
    rootG.appendChild(rootGlow);

    const rootBg = document.createElementNS(NS, 'circle');
    rootBg.setAttribute('cx', cx); rootBg.setAttribute('cy', cy);
    rootBg.setAttribute('r', '32');
    rootBg.setAttribute('fill', '#0B1020');
    rootBg.setAttribute('stroke', '#00F0FF');
    rootBg.setAttribute('stroke-width', '1.5');
    rootG.appendChild(rootBg);

    const rootText = document.createElementNS(NS, 'text');
    rootText.setAttribute('x', cx); rootText.setAttribute('y', cy - 5);
    rootText.setAttribute('text-anchor', 'middle');
    rootText.setAttribute('dominant-baseline', 'middle');
    rootText.setAttribute('font-size', '9');
    rootText.setAttribute('font-weight', '900');
    rootText.setAttribute('font-family', 'Orbitron, monospace');
    rootText.setAttribute('fill', '#00F0FF');
    rootText.setAttribute('letter-spacing', '0.06em');
    rootText.textContent = 'NEXUS';
    rootG.appendChild(rootText);

    const rootSub = document.createElementNS(NS, 'text');
    rootSub.setAttribute('x', cx); rootSub.setAttribute('y', cy + 9);
    rootSub.setAttribute('text-anchor', 'middle');
    rootSub.setAttribute('font-size', '6.5');
    rootSub.setAttribute('fill', 'rgba(0,240,255,0.55)');
    rootSub.setAttribute('font-family', 'monospace');
    rootSub.textContent = 'ALL REALITIES';
    rootG.appendChild(rootSub);

    rootG.addEventListener('click', () => onSelect('All'));
    rootG.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect('All'); }
    });
    svg.appendChild(rootG);

    // ── Universe Nodes ───────────────────────────────────────────────────────
    MAP_UNIVERSE_NODES.forEach(node => {
        const rad = (node.angle * Math.PI) / 180;
        const nx = cx + orbitR * Math.cos(rad);
        const ny = cy + orbitR * Math.sin(rad);

        // Calculate watch progress for this universe
        const projList = (projectsByUniverse && projectsByUniverse[node.key]) || [];
        const total = projList.length;
        const watched = total > 0
            ? projList.filter(p => watchedIds.includes(p.id)).length
            : 0;
        const progress = total > 0 ? watched / total : 0;

        const group = document.createElementNS(NS, 'g');
        group.setAttribute('class', 'map-universe-node');
        group.setAttribute('role', 'button');
        group.setAttribute('aria-label', `${node.label}: ${watched} of ${total} watched`);
        group.setAttribute('tabindex', '0');

        // Halo glow
        const halo = document.createElementNS(NS, 'circle');
        halo.setAttribute('cx', nx); halo.setAttribute('cy', ny);
        halo.setAttribute('r', '30');
        halo.setAttribute('fill', 'none');
        halo.setAttribute('stroke', node.color);
        halo.setAttribute('stroke-width', '8');
        halo.setAttribute('opacity', '0.12');
        halo.setAttribute('filter', 'url(#mmap-glow)');
        group.appendChild(halo);

        // Background circle
        const bg = document.createElementNS(NS, 'circle');
        bg.setAttribute('cx', nx); bg.setAttribute('cy', ny);
        bg.setAttribute('r', '22');
        bg.setAttribute('fill', '#090D18');
        bg.setAttribute('stroke', node.color);
        bg.setAttribute('stroke-width', '1.5');
        group.appendChild(bg);

        // Progress arc
        if (progress > 0) {
            const r = 22;
            const circ = 2 * Math.PI * r;
            const dash = circ * progress;
            const arc = document.createElementNS(NS, 'circle');
            arc.setAttribute('cx', nx); arc.setAttribute('cy', ny);
            arc.setAttribute('r', r);
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke', node.color);
            arc.setAttribute('stroke-width', '3.5');
            arc.setAttribute('stroke-dasharray', `${dash.toFixed(1)} ${circ.toFixed(1)}`);
            arc.setAttribute('stroke-linecap', 'round');
            arc.setAttribute('transform', `rotate(-90, ${nx}, ${ny})`);
            arc.setAttribute('opacity', '0.85');
            group.appendChild(arc);
        }

        // Emoji icon
        const icon = document.createElementNS(NS, 'text');
        icon.setAttribute('x', nx); icon.setAttribute('y', ny - 2);
        icon.setAttribute('text-anchor', 'middle');
        icon.setAttribute('dominant-baseline', 'middle');
        icon.setAttribute('font-size', '13');
        icon.textContent = node.emoji;
        group.appendChild(icon);

        // watched/total count
        const count = document.createElementNS(NS, 'text');
        count.setAttribute('x', nx); count.setAttribute('y', ny + 13);
        count.setAttribute('text-anchor', 'middle');
        count.setAttribute('font-size', '6.5');
        count.setAttribute('font-family', 'monospace');
        count.setAttribute('font-weight', '700');
        count.setAttribute('fill', node.color);
        count.textContent = `${watched}/${total}`;
        group.appendChild(count);

        // Label below the circle
        const lbl = document.createElementNS(NS, 'text');
        lbl.setAttribute('x', nx); lbl.setAttribute('y', ny + 34);
        lbl.setAttribute('text-anchor', 'middle');
        lbl.setAttribute('font-size', '7.5');
        lbl.setAttribute('font-weight', '800');
        lbl.setAttribute('font-family', 'Outfit, sans-serif');
        lbl.setAttribute('fill', '#FFFFFF');
        lbl.setAttribute('letter-spacing', '0.03em');
        lbl.textContent = node.label.toUpperCase();
        group.appendChild(lbl);

        group.addEventListener('click', () => onSelect(node.key));
        group.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(node.key); }
        });

        svg.appendChild(group);
    });

    container.innerHTML = '';
    container.appendChild(svg);
}


// =============================================================================
// 🌀 PORTAL TRANSITION — Doctor Strange Ring Burst
// =============================================================================

/**
 * Fire a Doctor Strange portal animation over the full viewport.
 * Concentric spinning rings + 24 spark particles, auto-removes in 1.4s.
 * Skipped entirely if user prefers-reduced-motion.
 *
 * @param {string} primaryColor - The active universe theme color (hex)
 */
function triggerPortalTransition(primaryColor) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Clean up any existing overlay first
    const prev = document.getElementById('portal-trans-overlay');
    if (prev) prev.remove();

    const color = primaryColor || '#00F0FF';

    const overlay = document.createElement('div');
    overlay.id = 'portal-trans-overlay';
    overlay.className = 'portal-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    // Central radial glow
    const glow = document.createElement('div');
    glow.className = 'portal-center-glow';
    glow.style.background = `radial-gradient(circle, ${hexToRgba(color, 0.5)} 0%, ${hexToRgba(color, 0.12)} 55%, transparent 80%)`;
    overlay.appendChild(glow);

    // Concentric rings: [size, color, dashPattern, spinDuration, direction, openDuration, opacity, thickness]
    const ringConfigs = [
        { size: 280, c: color,     dash: '6 5',  spin: '1.1s', dir: 'portal-trans-cw',  open: '1.3s', op: 0.9, w: 2   },
        { size: 200, c: '#00F0FF', dash: '4 6',  spin: '0.7s', dir: 'portal-trans-ccw', open: '1.3s', op: 0.7, w: 1.5 },
        { size: 350, c: color,     dash: '10 8', spin: '1.6s', dir: 'portal-trans-cw',  open: '1.3s', op: 0.45,w: 1.5 },
        { size: 140, c: '#FFFFFF', dash: '3 5',  spin: '0.5s', dir: 'portal-trans-ccw', open: '1.3s', op: 0.35,w: 1   },
        { size: 420, c: '#F59E0B', dash: '12 9', spin: '2.2s', dir: 'portal-trans-cw',  open: '1.3s', op: 0.2, w: 1   },
    ];

    ringConfigs.forEach((r, i) => {
        const ring = document.createElement('div');
        ring.className = 'portal-trans-ring';
        ring.style.width  = `${r.size}px`;
        ring.style.height = `${r.size}px`;
        ring.style.border = `${r.w}px dashed ${r.c}`;
        ring.style.opacity = r.op;
        ring.style.animation = `${r.dir} ${r.spin} linear infinite, portal-trans-open ${r.open} ease-out forwards`;
        ring.style.animationDelay = `${i * 0.04}s`;
        ring.style.boxShadow = `0 0 8px ${hexToRgba(r.c, 0.4)}`;
        overlay.appendChild(ring);
    });

    // 24 spark particles
    const sparkColors = [color, '#F59E0B', '#00F0FF', '#FFFFFF', '#E11D48'];
    for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * 2 * Math.PI;
        const radius = 85 + Math.random() * 70;
        const sx = (Math.cos(angle) * radius).toFixed(1) + 'px';
        const sy = (Math.sin(angle) * radius).toFixed(1) + 'px';
        const sz = (2 + Math.random() * 3.5).toFixed(1) + 'px';
        const sc = sparkColors[i % sparkColors.length];

        const spark = document.createElement('div');
        spark.className = 'portal-spark-particle';
        spark.style.setProperty('--sx', sx);
        spark.style.setProperty('--sy', sy);
        spark.style.background = sc;
        spark.style.boxShadow = `0 0 5px ${sc}`;
        spark.style.width = sz;
        spark.style.height = sz;
        spark.style.animationDelay = (Math.random() * 0.35).toFixed(2) + 's';
        overlay.appendChild(spark);
    }

    document.body.appendChild(overlay);

    // Auto-remove after animation lifecycle
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 1450);
}

/**
 * Convert a hex color to rgba string with given alpha.
 * @param {string} hex   - '#RRGGBB'
 * @param {number} alpha - 0–1
 * @returns {string}
 */
function hexToRgba(hex, alpha) {
    if (!hex || !hex.startsWith('#')) return `rgba(0,240,255,${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    return `rgba(${r},${g},${b},${alpha})`;
}

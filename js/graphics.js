/**
 * Marvel Multiverse Timeline - Vector Graphics & SVG Poster Engine
 * Rich superhero vector illustration motifs (Shields, Hammers, Arc Reactors, Eldritch Mandalas, Claws, Wings, and Spider-Noir).
 * Features on-demand lazy generation & in-memory memoization.
 */

const universeColors = {
  MCU: { primary: '#E62429', secondary: '#F59E0B', bg1: '#3D0709', bg2: '#120204', glow: 'rgba(230,36,41,0.5)' },
  Fox: { primary: '#3B82F6', secondary: '#FACC15', bg1: '#0B2046', bg2: '#030B1C', glow: 'rgba(59,130,246,0.5)' },
  Sony: { primary: '#E11D48', secondary: '#38BDF8', bg1: '#360914', bg2: '#0D0205', glow: 'rgba(225,29,72,0.5)' },
  Universal: { primary: '#10B981', secondary: '#A3E635', bg1: '#063623', bg2: '#02120C', glow: 'rgba(16,185,129,0.5)' },
  Lionsgate: { primary: '#A855F7', secondary: '#F43F5E', bg1: '#2A0845', bg2: '#0F031A', glow: 'rgba(168,85,247,0.5)' },
  Disney: { primary: '#06B6D4', secondary: '#60A5FA', bg1: '#082F49', bg2: '#02131F', glow: 'rgba(6,182,212,0.5)' },
  Netflix: { primary: '#E50914', secondary: '#FFAA00', bg1: '#330507', bg2: '#0D0102', glow: 'rgba(229,9,20,0.5)' },
  ABC: { primary: '#F59E0B', secondary: '#3B82F6', bg1: '#261A05', bg2: '#0C0802', glow: 'rgba(245,158,11,0.5)' },
  CBS: { primary: '#64748B', secondary: '#94A3B8', bg1: '#1E293B', bg2: '#0B1120', glow: 'rgba(100,116,139,0.5)' },
  Republic: { primary: '#64748B', secondary: '#94A3B8', bg1: '#1E293B', bg2: '#0B1120', glow: 'rgba(100,116,139,0.5)' },
  Direct: { primary: '#64748B', secondary: '#94A3B8', bg1: '#1E293B', bg2: '#0B1120', glow: 'rgba(100,116,139,0.5)' }
};

function wrapSvgText(text, maxCharsPerLine = 22) {
  const words = String(text).split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Determines the thematic superhero motif based on title keywords and universe
function getProjectTheme(title = '', universe = 'MCU') {
  const t = title.toLowerCase();
  if (t.includes('noir') || t.includes('spider-noir')) {
    return 'spider-noir';
  }
  if (t.includes('spider') || t.includes('venom') || t.includes('miles') || t.includes('morales') || t.includes('carnage') || t.includes('kraven') || t.includes('web')) {
    return 'spiderman';
  }
  if (t.includes('iron man') || t.includes('armor') || t.includes('stark') || t.includes('ironheart') || t.includes('war machine')) {
    return 'ironman';
  }
  if (t.includes('captain america') || t.includes('falcon') || t.includes('winter soldier') || t.includes('brave new world')) {
    return 'cap';
  }
  if (t.includes('loki') || t.includes('tva')) {
    return 'loki';
  }
  if (t.includes('thor') || t.includes('asgard') || t.includes('ragnarok') || t.includes('thunder') || t.includes('love and thunder')) {
    return 'thor';
  }
  if (t.includes('wakanda') || t.includes('black panther') || t.includes('shuri')) {
    return 'wakanda';
  }
  if (t.includes('doctor strange') || t.includes('wanda') || t.includes('agatha') || t.includes('vision') || t.includes('madness') || t.includes('witch') || t.includes('multiverse of madness')) {
    return 'magic';
  }
  if (t.includes('deadpool')) {
    return 'deadpool';
  }
  if (t.includes('wolverine') || t.includes('x-men') || t.includes('logan') || t.includes('mutant') || t.includes('magneto') || t.includes('gambit') || t.includes('gifted') || t.includes('legion') || t.includes('dark phoenix')) {
    return 'xmen';
  }
  if (t.includes('punisher')) {
    return 'punisher';
  }
  if (t.includes('moon knight')) {
    return 'moonknight';
  }
  if (t.includes('ghost rider')) {
    return 'ghostrider';
  }
  if (t.includes('blade')) {
    return 'blade';
  }
  if (t.includes('fantastic') || t.includes('silver surfer')) {
    return 'fantasticfour';
  }
  if (t.includes('guardians') || t.includes('galaxy') || t.includes('groot') || t.includes('marvels') || t.includes('captain marvel') || t.includes('nova') || t.includes('secret invasion') || t.includes('eternals')) {
    return 'cosmic';
  }
  if (t.includes('daredevil') || t.includes('echo') || t.includes('hawkeye') || t.includes('jessica jones') || t.includes('luke cage') || t.includes('iron fist') || t.includes('defenders')) {
    return 'street';
  }
  if (t.includes('hulk') || t.includes('she-hulk') || t.includes('gamma')) {
    return 'hulk';
  }
  if (universe === 'Fox') return 'xmen';
  if (universe === 'Sony') return 'spiderman';
  return 'avengers';
}

// Generates intricate superhero SVG vector art motifs with shield rings, glows, energy bursts, and heroic emblems
function getThemeSvgGraphic(theme, primary, secondary, cx, cy, scale = 1) {
  switch (theme) {
    case 'spider-noir':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- 1930s Detective Noir Trench & Fedora Silhouette with Web Lattice -->
          <circle cx="0" cy="0" r="64" fill="#0C0E14" stroke="#94A3B8" stroke-width="2" stroke-opacity="0.4"/>
          <circle cx="0" cy="0" r="50" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="6 4" stroke-opacity="0.6"/>
          <!-- Spider Web Compass -->
          <path d="M-64 0 H64 M0 -64 V64 M-45 -45 L45 45 M-45 45 L45 -45" stroke="#64748B" stroke-opacity="0.3" stroke-width="1.2"/>
          <!-- Fedora Hat Brim -->
          <path d="M-42 -6 Q0 -18 42 -6 Q0 -10 -42 -6 Z" fill="#E2E8F0" stroke="#0F172A" stroke-width="1.5"/>
          <!-- Fedora Crown -->
          <path d="M-22 -6 L-18 -36 Q0 -42 18 -36 L22 -6 Z" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5"/>
          <!-- Fedora Dark Ribbon with Gold Pin -->
          <path d="M-20 -12 L-19 -18 Q0 -22 19 -18 L20 -12 Z" fill="#090A0F"/>
          <circle cx="0" cy="-15" r="2.5" fill="#F59E0B"/>
          <!-- Noir Goggles / Spider Eyes -->
          <ellipse cx="-11" cy="4" rx="8" ry="11" fill="#F8FAFC" stroke="#0F172A" stroke-width="2" transform="rotate(-12 -11 4)"/>
          <ellipse cx="11" cy="4" rx="8" ry="11" fill="#F8FAFC" stroke="#0F172A" stroke-width="2" transform="rotate(12 11 4)"/>
          <ellipse cx="-11" cy="4" rx="4" ry="6" fill="#0EA5E9" fill-opacity="0.8" transform="rotate(-12 -11 4)"/>
          <ellipse cx="11" cy="4" rx="4" ry="6" fill="#0EA5E9" fill-opacity="0.8" transform="rotate(12 11 4)"/>
          <!-- Trenchcoat Pop-Collar -->
          <path d="M-28 16 L-14 36 L0 24 L14 36 L28 16 L34 26 L18 48 L-18 48 L-34 26 Z" fill="#1E293B" stroke="#64748B" stroke-width="1.5"/>
          <!-- Retro 1930s Gold Badge Strip -->
          <path d="M-12 30 H12" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
        </g>
      `;

    case 'cap':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Vibranium Shield Concentric Rings -->
          <circle cx="0" cy="0" r="66" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
          <circle cx="0" cy="0" r="53" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
          <circle cx="0" cy="0" r="40" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
          <circle cx="0" cy="0" r="27" fill="#1D4ED8" stroke="#1E40AF" stroke-width="1.5"/>
          <!-- Vibranium Star Emblem -->
          <polygon points="0,-22 6.8,-6.8 23.3,-6.8 9.9,3.7 14.8,19.7 0,9.9 -14.8,19.7 -9.9,3.7 -23.3,-6.8 -6.8,-6.8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
          <!-- Speed / Kinetic Deflection Streaks -->
          <path d="M-88 -14 H-72 M-82 0 H-70 M-88 14 H-72 M72 -14 H88 M70 0 H82 M72 14 H88" stroke="#F8FAFC" stroke-opacity="0.6" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `;

    case 'thor':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Asgardian Rune Halo -->
          <circle cx="0" cy="0" r="66" fill="none" stroke="${secondary}" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="14 8"/>
          <circle cx="0" cy="0" r="48" fill="#042F2E" fill-opacity="0.8" stroke="#14B8A6" stroke-width="2.5"/>
          <!-- Mjolnir Hammer Head -->
          <rect x="-22" y="-28" width="44" height="28" rx="4" fill="#CBD5E1" stroke="#475569" stroke-width="2.5"/>
          <path d="M-22 -28 L-14 -35 H14 L22 -28 Z M-22 0 L-14 7 H14 L22 0 Z" fill="#94A3B8"/>
          <circle cx="0" cy="-14" r="6" fill="#0284C7" stroke="#38BDF8" stroke-width="1.5"/>
          <!-- Hammer Handle & Pommel Strap -->
          <rect x="-5" y="0" width="10" height="38" rx="2" fill="#78350F" stroke="#F59E0B" stroke-width="1.5"/>
          <path d="M0 38 Q-12 48 -4 54 Q4 48 0 38" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
          <!-- Electric Lightning Bolts -->
          <path d="M-52 -38 L-30 -12 L-38 -6 L-16 28" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M52 -38 L30 -12 L38 -6 L16 28" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round"/>
        </g>
      `;

    case 'ironman':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Stark Holographic HUD & Telemetry Reticle -->
          <circle cx="0" cy="0" r="68" fill="none" stroke="#00F0FF" stroke-opacity="0.3" stroke-width="1.2" stroke-dasharray="12 6"/>
          <circle cx="0" cy="0" r="56" fill="#0A060C" stroke="#DC2626" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="48" fill="none" stroke="#F59E0B" stroke-opacity="0.6" stroke-width="1.5" stroke-dasharray="6 4"/>

          <!-- High-Tech Targeting Crosshair Ticks -->
          <line x1="-66" y1="0" x2="-54" y2="0" stroke="#00F0FF" stroke-width="2"/>
          <line x1="54" y1="0" x2="66" y2="0" stroke="#00F0FF" stroke-width="2"/>
          <line x1="0" y1="-66" x2="0" y2="-54" stroke="#00F0FF" stroke-width="2"/>
          <line x1="0" y1="54" x2="0" y2="66" stroke="#00F0FF" stroke-width="2"/>
          <circle cx="-54" cy="0" r="2" fill="#00F0FF"/>
          <circle cx="54" cy="0" r="2" fill="#00F0FF"/>

          <!-- Symmetrical Ear Pods with Gold Core Rings -->
          <rect x="-33" y="-12" width="6" height="20" rx="3" fill="#7F1D1D" stroke="#DC2626" stroke-width="1.5"/>
          <circle cx="-30" cy="-2" r="2" fill="#FACC15"/>
          <rect x="27" y="-12" width="6" height="20" rx="3" fill="#7F1D1D" stroke="#DC2626" stroke-width="1.5"/>
          <circle cx="30" cy="-2" r="2" fill="#FACC15"/>

          <!-- Iron Man Red Helmet Outer Shell (Crimson Armor) -->
          <path
            d="
              M 0 -38
              C -22 -38 -30 -22 -30 -6
              L -25 18
              C -18 30 -10 38 0 40
              C 10 38 18 30 25 18
              L 30 -6
              C 30 -22 22 -38 0 -38
              Z
            "
            fill="#B91C1C"
            stroke="#DC2626"
            stroke-width="2"
            filter="drop-shadow(0 0 12px rgba(220, 38, 38, 0.7))"
          />

          <!-- Forehead Titanium Inset & Center Seam -->
          <polygon points="0,-36 -9,-24 0,-18 9,-24" fill="#7F1D1D" stroke="#DC2626" stroke-width="1"/>
          <line x1="0" y1="-34" x2="0" y2="-22" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/>

          <!-- Multi-Faceted Metallic Gold Faceplate -->
          <path
            d="
              M 0 -22
              L -15 -22
              L -19 -8
              L -14 8
              L -8 26
              L 0 30
              L 8 26
              L 14 8
              L 19 -8
              L 15 -22
              Z
            "
            fill="#FBBF24"
            stroke="#D97706"
            stroke-width="1.5"
          />

          <!-- Temple Notches & Cheek Armor Plates -->
          <polygon points="-15,-20 -7,-20 -9,-8 -16,-8" fill="#F59E0B"/>
          <polygon points="15,-20 7,-20 9,-8 16,-8" fill="#F59E0B"/>
          <path d="M-18 -2 L-12 10 L-7 24" stroke="#D97706" stroke-width="1.5" fill="none"/>
          <path d="M18 -2 L12 10 L7 24" stroke="#D97706" stroke-width="1.5" fill="none"/>

          <!-- Glowing Arc Slit Eyes with Anamorphic Laser Flares -->
          <!-- Horizontal Cyan Glow Flares -->
          <line x1="-24" y1="-3" x2="-2" y2="-3" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
          <line x1="2" y1="-3" x2="24" y2="-3" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
          <!-- Pure White / Cyan Core Eyes -->
          <polygon
            points="-15,-4 -4,-4 -6,-1 -14,-1"
            fill="#FFFFFF"
            stroke="#00F0FF"
            stroke-width="1.5"
            filter="drop-shadow(0 0 6px #00F0FF)"
          />
          <polygon
            points="15,-4 4,-4 6,-1 14,-1"
            fill="#FFFFFF"
            stroke="#00F0FF"
            stroke-width="1.5"
            filter="drop-shadow(0 0 6px #00F0FF)"
          />

          <!-- Nose & Mouth Vent Grille -->
          <line x1="-4" y1="11" x2="4" y2="11" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="-7" y1="18" x2="7" y2="18" stroke="#78350F" stroke-width="2.2" stroke-linecap="round"/>

          <!-- Chin Kinetic Guard with Gold Center Tip -->
          <polygon points="-5,28 0,34 5,28" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1"/>
          <polygon points="-2,29 0,33 2,29" fill="#FACC15"/>

          <!-- Mini Arc Reactor Pulse Glow at Base -->
          <polygon points="0,42 -4,48 4,48" fill="#00F0FF" opacity="0.8" filter="drop-shadow(0 0 6px #00F0FF)"/>
        </g>
      `;

    case 'spiderman':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Web Compass Background Halo -->
          <circle cx="0" cy="0" r="66" fill="#0C1322" stroke="#E11D48" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="50" fill="#1E1B4B" stroke="#38BDF8" stroke-opacity="0.3" stroke-width="1.2" stroke-dasharray="6 4"/>
          <!-- Spider Web Radial Lattice Spokes -->
          <path d="M-66 0 H66 M0 -66 V66 M-46 -46 L46 46 M-46 46 L46 -46" stroke="#38BDF8" stroke-opacity="0.25" stroke-width="1"/>

          <!-- Dark Navy Shoulders Suit Base -->
          <path d="M-36 28 C-36 18 -18 16 0 16 C18 16 36 18 36 28 L38 42 H-38 Z" fill="#0F172A" stroke="#1E3A8A" stroke-width="1.5"/>
          <path d="M-22 24 L-28 42 M22 24 L28 42" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>

          <!-- Classic Spider-Man Mask Oval (Crimson Base) -->
          <path
            d="
              M 0 -38
              C -24 -38 -28 -20 -28 0
              C -28 20 -16 34 0 38
              C 16 34 28 20 28 0
              C 28 -20 24 -38 0 -38
              Z
            "
            fill="#DC2626"
            stroke="#991B1B"
            stroke-width="2"
            filter="drop-shadow(0 0 12px rgba(225, 29, 72, 0.7))"
          />

          <!-- Concentric Webbing Grid Radiating From Nose Bridge -->
          <!-- Web Spokes -->
          <path d="M0 -38 V38" stroke="#18181B" stroke-width="1.2"/>
          <path d="M0 -2 L-28 -20 M0 -2 L28 -20" stroke="#18181B" stroke-width="1.2"/>
          <path d="M0 -2 L-28 -4 M0 -2 L28 -4" stroke="#18181B" stroke-width="1.2"/>
          <path d="M0 -2 L-26 14 M0 -2 L26 14" stroke="#18181B" stroke-width="1.2"/>
          <path d="M0 -2 L-16 34 M0 -2 L16 34" stroke="#18181B" stroke-width="1.2"/>
          <path d="M0 -2 L-14 -34 M0 -2 L14 -34" stroke="#18181B" stroke-width="1.2"/>

          <!-- Web Concentric Scallop Arcs -->
          <path d="M-6 -10 Q0 -14 6 -10 M-12 -18 Q0 -24 12 -18 M-18 -26 Q0 -33 18 -26" stroke="#18181B" stroke-width="1.1" fill="none"/>
          <path d="M-6 8 Q0 12 6 8 M-12 16 Q0 22 12 16 M-18 24 Q0 30 18 24" stroke="#18181B" stroke-width="1.1" fill="none"/>

          <!-- Iconic Sharp Angular White Spider-Man Mask Lenses (With Thick Black Rubber Trim) -->
          <!-- Left Lens Outer Black Frame -->
          <path d="M-4 -3 L-23 -14 C-26 -6 -24 10 -15 15 C-8 12 -4 4 -4 -3 Z" fill="#0F172A" stroke="#000000" stroke-width="1.8"/>
          <!-- Left Lens White Inner -->
          <path d="M-6 -2 L-20 -11 C-23 -4 -21 8 -15 12 C-9 10 -6 3 -6 -2 Z" fill="#FFFFFF" filter="drop-shadow(0 0 5px rgba(255,255,255,0.9))"/>
          <!-- Left Lens Blue Specular Rim Light -->
          <path d="M-20 -11 C-23 -4 -21 8 -15 12" stroke="#38BDF8" stroke-width="1" fill="none"/>

          <!-- Right Lens Outer Black Frame -->
          <path d="M4 -3 L23 -14 C26 -6 24 10 15 15 C8 12 4 4 4 -3 Z" fill="#0F172A" stroke="#000000" stroke-width="1.8"/>
          <!-- Right Lens White Inner -->
          <path d="M6 -2 L20 -11 C23 -4 21 8 15 12 C9 10 6 3 6 -2 Z" fill="#FFFFFF" filter="drop-shadow(0 0 5px rgba(255,255,255,0.9))"/>
          <!-- Right Lens Blue Specular Rim Light -->
          <path d="M20 -11 C23 -4 21 8 15 12" stroke="#38BDF8" stroke-width="1" fill="none"/>

          <!-- Iconic 8-Legged Spider Chest Emblem Centered Below -->
          <ellipse cx="0" cy="36" rx="3.5" ry="5" fill="#000000"/>
          <circle cx="0" cy="30" r="2.5" fill="#000000"/>
          <path d="M-3 33 Q-10 27 -14 24 M-3 35 Q-12 33 -16 35 M-3 37 Q-11 41 -13 46 M-2 39 Q-7 46 -8 50" stroke="#000000" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M3 33 Q10 27 14 24 M3 35 Q12 33 16 35 M3 37 Q11 41 13 46 M2 39 Q7 46 8 50" stroke="#000000" stroke-width="1.2" stroke-linecap="round"/>
        </g>
      `;

    case 'loki':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Minimalist Asgardian Green Emblem Disc -->
          <circle cx="0" cy="0" r="64" fill="#022C22" stroke="#10B981" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="52" fill="none" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="6 4"/>

          <!-- Iconic Sweeping Golden Horns of Loki (Bold Silhouette) -->
          <!-- Left Horn -->
          <path d="M-10 -8 C-24 -28 -46 -46 -38 -64 C-28 -50 -14 -28 -2 -14 Z" fill="#FACC15" stroke="#B45309" stroke-width="1.8" filter="drop-shadow(0 0 10px rgba(250,204,21,0.6))"/>
          <!-- Right Horn -->
          <path d="M10 -8 C24 -28 46 -46 38 -64 C28 -50 14 -28 2 -14 Z" fill="#FACC15" stroke="#B45309" stroke-width="1.8" filter="drop-shadow(0 0 10px rgba(250,204,21,0.6))"/>

          <!-- Iconic Golden Crown Tiara Band -->
          <polygon points="0,-16 16,-4 0,8 -16,-4" fill="#FACC15" stroke="#B45309" stroke-width="1.8"/>
          <!-- Central Glowing Emerald Jewel -->
          <circle cx="0" cy="-4" r="5" fill="#10B981" stroke="#047857" stroke-width="1" filter="drop-shadow(0 0 8px #34D399)"/>
          <circle cx="-1.5" cy="-5.5" r="1.5" fill="#ECFDF5"/>

          <!-- Clean Chevron Cape Collar Base -->
          <path d="M-24 16 L0 32 L24 16 L18 24 L0 38 L-18 24 Z" fill="#F59E0B"/>
          <polygon points="0,14 10,24 -10,24" fill="#10B981"/>
        </g>
      `;

    case 'wakanda':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Royal Wakandan Vibranium Shield & Geometric Halo -->
          <circle cx="0" cy="0" r="66" fill="#07040D" stroke="#A855F7" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="52" fill="#110724" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="6 3"/>
          <circle cx="0" cy="0" r="40" fill="none" stroke="#C084FC" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="12 4"/>

          <!-- Full Royal Vibranium Fang Claw Necklace (Radiating 10 Teeth) -->
          <path d="M-38 20 Q0 48 38 20" fill="none" stroke="#581C87" stroke-width="3" stroke-linecap="round"/>
          <polygon points="-32,18 -29,32 -25,18" fill="#E2E8F0" stroke="#A855F7" stroke-width="0.8"/>
          <polygon points="-24,22 -20,38 -17,22" fill="#F8FAFC" stroke="#C084FC" stroke-width="0.8"/>
          <polygon points="-16,26 -11,44 -8,26" fill="#FACC15" stroke="#9333EA" stroke-width="0.8"/>
          <polygon points="-8,30 -2,48 2,30" fill="#F8FAFC" stroke="#C084FC" stroke-width="1"/>
          <polygon points="8,30 2,48 -2,30" fill="#F8FAFC" stroke="#C084FC" stroke-width="1"/>
          <polygon points="16,26 11,44 8,26" fill="#FACC15" stroke="#9333EA" stroke-width="0.8"/>
          <polygon points="24,22 20,38 17,22" fill="#F8FAFC" stroke="#C084FC" stroke-width="0.8"/>
          <polygon points="32,18 29,32 25,18" fill="#E2E8F0" stroke="#A855F7" stroke-width="0.8"/>

          <!-- Sleek Obsidian Panther Helmet (Sculpted Armor) -->
          <path
            d="
              M 0 -38
              C -24 -38 -30 -22 -30 -5
              L -26 15
              C -19 30 -10 36 0 38
              C 10 36 19 30 26 15
              L 30 -5
              C 30 -22 24 -38 0 -38
              Z
            "
            fill="#09090B"
            stroke="#A855F7"
            stroke-width="2"
            filter="drop-shadow(0 0 12px rgba(168, 85, 247, 0.75))"
          />

          <!-- Upright Razor-Sharp Panther Ears (Titanium Trim) -->
          <polygon points="-18,-18 -30,-38 -7,-27" fill="#09090B" stroke="#E2E8F0" stroke-width="1.5"/>
          <polygon points="-19,-20 -27,-34 -11,-27" fill="#9333EA"/>
          <polygon points="18,-18 30,-38 7,-27" fill="#09090B" stroke="#E2E8F0" stroke-width="1.5"/>
          <polygon points="19,-20 27,-34 11,-27" fill="#9333EA"/>

          <!-- Brow Ridge & Forehead Kinetic Energy Circuitry -->
          <path d="M-15 -14 L0 -24 L15 -14" fill="none" stroke="#E2E8F0" stroke-width="1.6" stroke-linecap="round"/>
          <polygon points="0,-26 -3,-18 0,-14 3,-18" fill="#FACC15"/>
          <line x1="0" y1="-14" x2="0" y2="-2" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
          <!-- Forehead Chevron Lines -->
          <path d="M-10 -20 L0 -27 L10 -20" fill="none" stroke="#9333EA" stroke-width="1.2"/>

          <!-- Radiant Violet-White Feline Slit Eyes with Anamorphic Glow Flares -->
          <line x1="-24" y1="-3" x2="-2" y2="-3" stroke="#C084FC" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
          <line x1="2" y1="-3" x2="24" y2="-3" stroke="#C084FC" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
          <polygon
            points="-19,-5 -5,-6 -3,-2 -17,-1"
            fill="#FFFFFF"
            stroke="#C084FC"
            stroke-width="1.2"
            filter="drop-shadow(0 0 6px #FFFFFF)"
          />
          <polygon
            points="19,-5 5,-6 3,-2 17,-1"
            fill="#FFFFFF"
            stroke="#C084FC"
            stroke-width="1.2"
            filter="drop-shadow(0 0 6px #FFFFFF)"
          />

          <!-- Tribal Cheekbone Kinetic Ribbons -->
          <line x1="-18" y1="5" x2="-9" y2="8" stroke="#C084FC" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="-18" y1="12" x2="-9" y2="15" stroke="#9333EA" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="18" y1="5" x2="9" y2="8" stroke="#C084FC" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="18" y1="12" x2="9" y2="15" stroke="#9333EA" stroke-width="1.8" stroke-linecap="round"/>

          <!-- Muzzle & Silver Fang Detailing -->
          <polygon points="0,4 -6,13 6,13" fill="#18181B" stroke="#9333EA" stroke-width="1"/>
          <polygon points="-4,14 -2,18 0,14" fill="#F8FAFC"/>
          <polygon points="4,14 2,18 0,14" fill="#F8FAFC"/>
          <path d="M-8 19 L0 24 L8 19" stroke="#E2E8F0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </g>
      `;

    case 'magic':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Eldritch Mystic Mandala Circle -->
          <circle cx="0" cy="0" r="66" fill="none" stroke="#F59E0B" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="6 4"/>
          <circle cx="0" cy="0" r="52" fill="none" stroke="#EF4444" stroke-opacity="0.75" stroke-width="2"/>
          <!-- Sacred Geometry Hexagrams -->
          <polygon points="0,-52 45,26 -45,26" fill="none" stroke="#F59E0B" stroke-width="2"/>
          <polygon points="0,52 45,-26 -45,-26" fill="none" stroke="#F59E0B" stroke-width="2"/>
          <!-- Eye of Agamotto / Chaos Stone Core -->
          <circle cx="0" cy="0" r="28" fill="#450A0A" stroke="#F59E0B" stroke-width="3"/>
          <path d="M-24 0 Q0 -18 24 0 Q0 18 -24 0 Z" fill="#10B981" stroke="#F59E0B" stroke-width="2"/>
          <circle cx="0" cy="0" r="7" fill="#ECFDF5" filter="drop-shadow(0 0 6px #10B981)"/>
        </g>
      `;

    case 'deadpool':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Crossed Katana Swords Background -->
          <line x1="-54" y1="-54" x2="54" y2="54" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="54" y1="-54" x2="-54" y2="54" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="52" fill="#DC2626" stroke="#991B1B" stroke-width="3.5"/>
          <!-- Split Black Eye Patches -->
          <path d="M-4 0 V-48 A48 48 0 0 0 -48 0 A48 48 0 0 0 -4 48 V0 Z" fill="#0F172A"/>
          <path d="M4 0 V-48 A48 48 0 0 1 48 0 A48 48 0 0 1 4 48 V0 Z" fill="#0F172A"/>
          <!-- Expressive White Mask Eyes -->
          <ellipse cx="-20" cy="0" rx="7" ry="12" fill="#FFFFFF" transform="rotate(-15 -20 0)"/>
          <ellipse cx="20" cy="0" rx="7" ry="12" fill="#FFFFFF" transform="rotate(15 20 0)"/>
        </g>
      `;

    case 'xmen':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- X-Gene Mutant Crest -->
          <circle cx="0" cy="0" r="66" fill="#1E3A8A" stroke="#3B82F6" stroke-width="3.5"/>
          <circle cx="0" cy="0" r="50" fill="#0F172A" stroke="#FACC15" stroke-width="2.5"/>
          <!-- Stylized Bold X-Men 'X' -->
          <path d="M-26 -26 L26 26 M26 -26 L-26 26" stroke="#FACC15" stroke-width="14" stroke-linecap="round"/>
          <path d="M-26 -26 L26 26 M26 -26 L-26 26" stroke="#1E293B" stroke-width="5" stroke-linecap="round"/>
          <!-- Wolverine Adamantium Claws Slashes -->
          <path d="M-60 -42 L-38 -15 M-54 -30 L-32 -3 M-48 -18 L-26 9" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M60 -42 L38 -15 M54 -30 L32 -3 M48 -18 L26 9" stroke="#E2E8F0" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `;

    case 'punisher':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Heavy Tactical Armor Ring -->
          <circle cx="0" cy="0" r="64" fill="#090A0F" stroke="#71717A" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="50" fill="#18181B" stroke="#DC2626" stroke-width="1.5"/>
          <!-- Iconic Punisher Skull Face -->
          <path d="M-26 -30 C-26 -38 26 -38 26 -30 C26 -16 32 4 24 16 L20 16 L20 38 L14 38 L14 20 L8 20 L8 38 L2 38 L2 20 L-2 20 L-2 38 L-8 38 L-8 20 L-14 20 L-14 38 L-20 38 L-20 16 L-24 16 C-32 4 -26 -16 -26 -30 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.5"/>
          <!-- Deep Dark Eye Sockets -->
          <ellipse cx="-11" cy="-12" rx="6" ry="9" fill="#090A0F" transform="rotate(-10 -11 -12)"/>
          <ellipse cx="11" cy="-12" rx="6" ry="9" fill="#090A0F" transform="rotate(10 11 -12)"/>
          <polygon points="0,-4 -4,6 4,6" fill="#090A0F"/>
        </g>
      `;

    case 'moonknight':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Midnight Lunar Halo Disc -->
          <circle cx="0" cy="0" r="66" fill="#040817" stroke="#38BDF8" stroke-opacity="0.5" stroke-width="2"/>
          <circle cx="0" cy="0" r="50" fill="#0B132B" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="6 3"/>

          <!-- Giant Intersecting Khonshu Crescent Dart Behind Hood -->
          <path d="M-22 -48 Q48 0 -22 48 Q26 0 -22 -48 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.5" filter="drop-shadow(0 0 12px rgba(255,255,255,0.85))"/>

          <!-- Classic Comic White Hood Silhouette & Shoulders -->
          <path
            d="
              M 0 -42
              C -26 -42 -34 -22 -32 6
              C -30 24 -18 36 0 42
              C 18 36 30 24 32 6
              C 34 -22 26 -42 0 -42
              Z
            "
            fill="#F8FAFC"
            stroke="#0F172A"
            stroke-width="2.5"
            filter="drop-shadow(0 0 10px rgba(255,255,255,0.7))"
          />

          <!-- Comic Ink Shadows on Cowl Rim -->
          <path d="M0 -42 L0 -28" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
          <path d="M-32 6 C-30 24 -18 36 0 42 C-14 36 -22 24 -24 6 Z" fill="#CBD5E1"/>

          <!-- Pitch-Black Face Void (Classic Comic Mystery Face) -->
          <path
            d="
              M 0 -30
              C -18 -30 -22 -14 -20 2
              C -18 16 -12 24 0 28
              C 12 24 18 16 20 2
              C 22 -14 18 -30 0 -30
              Z
            "
            fill="#020617"
            stroke="#0F172A"
            stroke-width="1.5"
          />

          <!-- Glowing White/Gold Crescent Moon on Forehead -->
          <path d="M-5 -22 Q3 -16 -5 -10 Q-1 -16 -5 -22 Z" fill="#FACC15" stroke="#FEF08A" stroke-width="0.8" filter="drop-shadow(0 0 6px #FACC15)"/>

          <!-- Sharp Glowing Triangular Comic Eyes (Piercing Lunar Gaze) -->
          <polygon points="-14,-4 -5,-8 -6,-1" fill="#FFFFFF" filter="drop-shadow(0 0 6px #38BDF8)"/>
          <polygon points="14,-4 5,-8 6,-1" fill="#FFFFFF" filter="drop-shadow(0 0 6px #38BDF8)"/>
          <circle cx="-9" cy="-4" r="1.2" fill="#38BDF8"/>
          <circle cx="9" cy="-4" r="1.2" fill="#38BDF8"/>

          <!-- Comic Chest Crescent Sigil -->
          <path d="M-14 26 Q0 18 14 26 Q0 22 -14 26 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1.2"/>
        </g>
      `;

    case 'ghostrider':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Hellfire Circular Shockwave Disc -->
          <circle cx="0" cy="0" r="66" fill="#180404" stroke="#EF4444" stroke-width="2.5" filter="drop-shadow(0 0 16px rgba(239,68,68,0.8))"/>
          <circle cx="0" cy="0" r="50" fill="#2D0606" stroke="#F97316" stroke-width="1.8" stroke-dasharray="6 3"/>

          <!-- Dynamic Roaring Comic Hellfire (Classic Splash Art Flames) -->
          <!-- Outer Crimson Flame Tendrils -->
          <path d="M-28 -4 C-46 -36 -22 -68 0 -76 C22 -68 46 -36 28 -4 C38 -18 34 -44 18 -54 C0 -64 -18 -54 -38 -18 Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5" filter="drop-shadow(0 0 14px #EF4444)"/>
          <path d="M-42 -14 C-50 -32 -38 -50 -26 -54 C-32 -40 -26 -26 -20 -16 Z" fill="#EF4444"/>
          <path d="M42 -14 C50 -32 38 -50 26 -54 C32 -40 26 -26 20 -16 Z" fill="#EF4444"/>

          <!-- Mid Vibrant Orange Fire Burst -->
          <path d="M-22 -8 C-34 -32 -16 -56 0 -62 C16 -56 34 -32 22 -8 C28 -18 24 -40 12 -46 C0 -54 -12 -46 -24 -18 Z" fill="#F97316"/>
          <!-- Inner Brilliant Golden-Yellow Core Flame -->
          <path d="M-15 -10 C-22 -26 -10 -44 0 -48 C10 -44 22 -26 15 -10 C20 -16 14 -32 6 -38 C0 -42 -6 -38 -15 -16 Z" fill="#FEF08A"/>

          <!-- Spiked Biker Leather Jacket Shoulders -->
          <path d="M-36 26 L-20 16 L0 24 L20 16 L36 26 L38 44 H-38 Z" fill="#0F172A" stroke="#000000" stroke-width="2"/>
          <polygon points="-34,22 -30,10 -26,22" fill="#E2E8F0" stroke="#0F172A" stroke-width="1"/>
          <polygon points="-26,20 -22,8 -18,20" fill="#E2E8F0" stroke="#0F172A" stroke-width="1"/>
          <polygon points="26,20 22,8 18,20" fill="#E2E8F0" stroke="#0F172A" stroke-width="1"/>
          <polygon points="34,22 30,10 26,22" fill="#E2E8F0" stroke="#0F172A" stroke-width="1"/>

          <!-- Grinning Human Bone Skull (Classic Comic Ink Style) -->
          <!-- Cranium Top -->
          <path
            d="
              M -18 -8
              C -24 -24 24 -24 18 -8
              C 20 2 26 12 16 18
              L 12 28
              L -12 28
              L -16 18
              C -26 12 -20 2 -18 -8
              Z
            "
            fill="#FFFFFF"
            stroke="#000000"
            stroke-width="2"
            filter="drop-shadow(0 0 6px rgba(255,255,255,0.7))"
          />

          <!-- Comic Cheekbone & Brow Ink Shadows -->
          <path d="M-16 -12 C-10 -16 0 -16 0 -12 C0 -16 10 -16 16 -12" stroke="#000000" stroke-width="1.5" fill="none"/>
          <path d="M-8 -20 L-5 -12 M8 -20 L5 -12" stroke="#000000" stroke-width="1.2" stroke-linecap="round"/>

          <!-- Menacing Flaming Comic Eye Sockets -->
          <polygon points="-14,-4 -5,-8 -4,-1 -13,1" fill="#000000" stroke="#DC2626" stroke-width="1.2"/>
          <polygon points="14,-4 5,-8 4,-1 13,1" fill="#000000" stroke="#DC2626" stroke-width="1.2"/>
          <circle cx="-8" cy="-3.5" r="2.2" fill="#EF4444" filter="drop-shadow(0 0 5px #FDE047)"/>
          <circle cx="8" cy="-3.5" r="2.2" fill="#EF4444" filter="drop-shadow(0 0 5px #FDE047)"/>
          <circle cx="-8" cy="-3.5" r="1" fill="#FEF08A"/>
          <circle cx="8" cy="-3.5" r="1" fill="#FEF08A"/>

          <!-- Nasal Inverted Heart Hole -->
          <polygon points="0,3 -3,10 3,10" fill="#000000"/>

          <!-- Wicked Clenched Skeletal Teeth -->
          <path d="M-10 16 H10 V24 H-10 Z" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
          <line x1="-6" y1="16" x2="-6" y2="24" stroke="#000000" stroke-width="1.5"/>
          <line x1="-2" y1="16" x2="-2" y2="24" stroke="#000000" stroke-width="1.5"/>
          <line x1="2" y1="16" x2="2" y2="24" stroke="#000000" stroke-width="1.5"/>
          <line x1="6" y1="16" x2="6" y2="24" stroke="#000000" stroke-width="1.5"/>

          <!-- Glowing Spiked Hellfire Chain Across Collar -->
          <path d="M-30 22 Q0 40 30 22" fill="none" stroke="#F97316" stroke-width="2.8" stroke-linecap="round" filter="drop-shadow(0 0 6px #EF4444)"/>
        </g>
      `;

    case 'blade':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Daywalker Crossed Silver Swords -->
          <line x1="-54" y1="-54" x2="54" y2="54" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="54" y1="-54" x2="-54" y2="54" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="50" fill="#090A0F" stroke="#DC2626" stroke-width="3"/>
          <!-- Sunglasses / Red Vampire Crest -->
          <path d="M-24 -8 H24 L16 12 H-16 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
          <polygon points="0,-24 8,-4 -8,-4" fill="#CBD5E1"/>
          <polygon points="0,24 8,4 -8,4" fill="#CBD5E1"/>
        </g>
      `;

    case 'fantasticfour':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Quantum Cosmic Ray Shield -->
          <circle cx="0" cy="0" r="66" fill="#1E3A8A" stroke="#38BDF8" stroke-width="3.5"/>
          <circle cx="0" cy="0" r="50" fill="#0C4A6E" stroke="#F8FAFC" stroke-width="2"/>
          <!-- Iconic Bold '4' -->
          <path d="M8 -32 L-22 14 H16 M16 -32 V32" stroke="#FFFFFF" stroke-width="11" stroke-linecap="square" stroke-linejoin="miter" fill="none"/>
          <ellipse cx="0" cy="0" rx="64" ry="18" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="8 4" transform="rotate(-35)"/>
        </g>
      `;

    case 'cosmic':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Cosmic Celestial Starburst & Galaxy Nebula -->
          <circle cx="0" cy="0" r="66" fill="none" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="48" fill="#0C4A6E" fill-opacity="0.6" stroke="#F43F5E" stroke-width="2.5"/>
          <!-- 8-Point Cosmic Star -->
          <polygon points="0,-52 9,-13 52,0 9,13 0,52 -9,13 -52,0 -9,-13" fill="#FACC15" filter="drop-shadow(0 0 8px #F59E0B)"/>
          <polygon points="0,-34 6,-9 34,0 6,9 0,34 -6,9 -34,0 -6,-9" fill="#F8FAFC"/>
          <!-- Orbital rings -->
          <ellipse cx="0" cy="0" rx="68" ry="18" fill="none" stroke="#F43F5E" stroke-width="2" transform="rotate(-30)"/>
          <circle cx="0" cy="0" r="8" fill="#38BDF8"/>
        </g>
      `;

    case 'street':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Urban Hell's Kitchen Vigilante Shield -->
          <circle cx="0" cy="0" r="64" fill="#18181B" stroke="#71717A" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="48" fill="#27272A" stroke="#DC2626" stroke-width="1.5"/>
          <!-- Double 'D' Horn Emblem -->
          <path d="M-24 -16 H-12 C-3 -16 3 -10 3 0 C3 10 -3 16 -12 16 H-24 Z" fill="none" stroke="#DC2626" stroke-width="5"/>
          <path d="M-8 -16 H4 C13 -16 19 -10 19 0 C19 10 13 16 4 16 H-8 Z" fill="none" stroke="#DC2626" stroke-width="5"/>
          <!-- Devil Horns Accents -->
          <polygon points="-12,-20 -8,-34 -4,-20" fill="#DC2626"/>
          <polygon points="4,-20 8,-34 12,-20" fill="#DC2626"/>
        </g>
      `;

    case 'hulk':
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Gamma Biohazard Shield -->
          <circle cx="0" cy="0" r="66" fill="#021E12" stroke="#15803D" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="52" fill="#042F2E" stroke="#10B981" stroke-width="1.8" stroke-dasharray="8 6"/>
          <circle cx="0" cy="0" r="46" fill="#064E3B" stroke="#A3E635" stroke-width="1.5" stroke-opacity="0.6"/>

          <!-- 3 Gamma Biohazard Radiation Blades -->
          ${[0, 120, 240].map(deg => `
            <path d="M-6 -46 L-12 -62 A62 62 0 0 1 12 -62 L6 -46 Z" fill="#A3E635" transform="rotate(${deg})" opacity="0.8"/>
          `).join('')}

          <!-- Raging Hulk Head Silhouette -->
          <!-- Green Muscle Head Base -->
          <path
            d="
              M 0 -34
              C -22 -34 -28 -20 -28 -4
              L -26 14
              C -20 28 -12 36 0 38
              C 12 36 20 28 26 14
              L 28 -4
              C 28 -20 22 -34 0 -34
              Z
            "
            fill="#15803D"
            stroke="#14532D"
            stroke-width="2"
            filter="drop-shadow(0 0 10px rgba(34, 197, 94, 0.7))"
          />

          <!-- Jagged Shaggy Black/Dark-Green Hair -->
          <path
            d="
              M -26 -12
              L -24 -28
              L -16 -24
              L -10 -36
              L -2 -26
              L 6 -36
              L 12 -26
              L 20 -32
              L 26 -14
              L 22 -18
              L 12 -16
              L 0 -22
              L -12 -16
              L -22 -18
              Z
            "
            fill="#022C22"
            stroke="#064E3B"
            stroke-width="1.5"
          />

          <!-- Heavy Furrowed Muscle Brow Ridges -->
          <path d="M-22 -10 L0 -2 L22 -10" fill="none" stroke="#14532D" stroke-width="3" stroke-linecap="round"/>
          <path d="M-18 -14 L0 -6 L18 -14" fill="none" stroke="#14532D" stroke-width="2" stroke-linecap="round"/>
          <line x1="0" y1="-6" x2="0" y2="4" stroke="#14532D" stroke-width="2" stroke-linecap="round"/>

          <!-- Fierce Glowing Lime-White Eyes -->
          <polygon
            points="-18,-8 -6,-4 -14,-2"
            fill="#FFFFFF"
            stroke="#A3E635"
            stroke-width="1.5"
            filter="drop-shadow(0 0 5px #A3E635)"
          />
          <polygon
            points="18,-8 6,-4 14,-2"
            fill="#FFFFFF"
            stroke="#A3E635"
            stroke-width="1.5"
            filter="drop-shadow(0 0 5px #A3E635)"
          />

          <!-- Broad Hulk Nose -->
          <polygon points="0,4 -6,10 6,10" fill="#14532D"/>
          <circle cx="-3" cy="9" r="1.5" fill="#022C22"/>
          <circle cx="3" cy="9" r="1.5" fill="#022C22"/>

          <!-- Iconic Clenched Teeth Snarl (Mouth) -->
          <path
            d="
              M -16 15
              C -8 13 8 13 16 15
              L 12 24
              C 6 26 -6 26 -12 24
              Z
            "
            fill="#022C22"
            stroke="#14532D"
            stroke-width="1.5"
          />
          <!-- Exposed Clenched Teeth -->
          <rect x="-12" y="15" width="24" height="7" rx="1" fill="#F8FAFC"/>
          <!-- Vertical Tooth Seams -->
          <line x1="-8" y1="15" x2="-8" y2="22" stroke="#14532D" stroke-width="1"/>
          <line x1="-4" y1="15" x2="-4" y2="22" stroke="#14532D" stroke-width="1"/>
          <line x1="0" y1="15" x2="0" y2="22" stroke="#14532D" stroke-width="1"/>
          <line x1="4" y1="15" x2="4" y2="22" stroke="#14532D" stroke-width="1"/>
          <line x1="8" y1="15" x2="8" y2="22" stroke="#14532D" stroke-width="1"/>
          <line x1="-12" y1="18.5" x2="12" y2="18.5" stroke="#14532D" stroke-width="1"/>

          <!-- Massive Brute Jaw & Chin -->
          <polygon points="-8,28 0,34 8,28" fill="#14532D"/>
          <path d="M-18 8 L-14 20 M18 8 L14 20" stroke="#14532D" stroke-width="2" stroke-linecap="round"/>
        </g>
      `;

    default: // 'avengers'
      return `
        <g transform="translate(${cx}, ${cy}) scale(${scale})">
          <!-- Tactical Avengers Command HUD Shield -->
          <circle cx="0" cy="0" r="66" fill="#0A0D14" stroke="#0284C7" stroke-width="2"/>
          <circle cx="0" cy="0" r="54" fill="none" stroke="#E62429" stroke-width="1.5" stroke-dasharray="10 6" stroke-opacity="0.6"/>
          
          <!-- Iconic Avengers Ring Aperture (Outer Circle with Left Gap) -->
          <path
            d="
              M 0 -48
              A 48 48 0 1 1 -34 34
              M -44 18
              A 48 48 0 0 1 -48 0
              A 48 48 0 0 1 0 -48
            "
            fill="none"
            stroke="#E62429"
            stroke-width="5"
            stroke-linecap="round"
          />

          <!-- Iconic Italicized Avengers 'A' Glyph -->
          <!-- Main 'A' Body -->
          <path
            d="
              M 8 -44
              L -22 28
              L -9 28
              L -3 14
              L 16 14
              L 26 28
              L 38 28
              L 16 -18
              L 22 -34
              L 14 -34
              L 7 -16
              L -1 -16
              L 5 -34
              Z
              M 0 -6
              L 4 -16
              L 10 -6
              Z
            "
            fill="#FFFFFF"
            stroke="#E62429"
            stroke-width="1.5"
            filter="drop-shadow(0 0 8px rgba(230, 36, 41, 0.7))"
          />

          <!-- Iconic Horizontal Avengers Arrow Crossbar -->
          <path
            d="
              M -38 4
              L 28 4
              L 22 -2
              L 36 6
              L 22 14
              L 28 8
              L -38 8
              Z
            "
            fill="#38BDF8"
            stroke="#0284C7"
            stroke-width="1"
            filter="drop-shadow(0 0 6px #38BDF8)"
          />

          <!-- Inner Tech Indicator Points -->
          <circle cx="-32" cy="-32" r="2.5" fill="#38BDF8"/>
          <circle cx="32" cy="-32" r="2.5" fill="#E62429"/>
          <circle cx="-32" cy="32" r="2.5" fill="#E62429"/>
          <circle cx="32" cy="32" r="2.5" fill="#38BDF8"/>
        </g>
      `;
  }
}

function generateThumbnailSvg(title, universe = 'MCU') {
  const conf = universeColors[universe] || universeColors.MCU;
  const theme = getProjectTheme(title, universe);
  const lines = wrapSvgText(title, 24);
  const fontSize = lines.length > 2 ? 18 : (lines.length > 1 ? 22 : 26);
  const startY = lines.length === 1 ? 260 : (lines.length === 2 ? 245 : 230);
  const lineHeight = fontSize + 6;

  const tspans = lines.map((line, idx) => {
    const escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<tspan x="300" y="${startY + (idx * lineHeight)}">${escaped}</tspan>`;
  }).join('');

  const graphicSvg = getThemeSvgGraphic(theme, conf.primary, conf.secondary, 300, 115, 1.15);

  const svg = `<svg viewBox="0 0 600 338" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="thumbBg_${universe}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${conf.bg1}"/>
        <stop offset="50%" stop-color="#0E1017"/>
        <stop offset="100%" stop-color="${conf.bg2}"/>
      </linearGradient>
      <radialGradient id="glowCenter_${universe}" cx="50%" cy="35%" r="45%">
        <stop offset="0%" stop-color="${conf.primary}" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="${conf.primary}" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </radialGradient>
      <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#FFFFFF" fill-opacity="0.07"/>
      </pattern>
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- Background Layers -->
    <rect width="600" height="338" fill="url(#thumbBg_${universe})"/>
    <rect width="600" height="338" fill="url(#glowCenter_${universe})"/>
    <rect width="600" height="338" fill="url(#dotGrid)"/>

    <!-- Marvel Top Corner Badge -->
    <rect x="24" y="20" width="70" height="20" rx="3" fill="#E62429"/>
    <text x="59" y="34" text-anchor="middle" font-family="'Outfit', system-ui, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF" letter-spacing="1">MARVEL</text>
    <rect x="100" y="20" width="85" height="20" rx="3" fill="#181A24" stroke="rgba(255,255,255,0.1)"/>
    <text x="142" y="34" text-anchor="middle" font-family="'Inter', system-ui, sans-serif" font-weight="800" font-size="9" fill="${conf.secondary}" letter-spacing="1.2">${universe.toUpperCase()}</text>

    <!-- Universe Left Neon Edge -->
    <rect x="0" y="0" width="6" height="338" fill="${conf.primary}"/>

    <!-- Hero Thematic Vector Illustration -->
    <g filter="url(#dropShadow)">
      ${graphicSvg}
    </g>

    <!-- Lower Gradient Mask for Text Contrast -->
    <rect x="0" y="190" width="600" height="148" fill="url(#thumbBg_${universe})" fill-opacity="0.85"/>
    <line x1="180" y1="210" x2="420" y2="210" stroke="${conf.primary}" stroke-opacity="0.5" stroke-width="1.5"/>

    <!-- Title Typography -->
    <text text-anchor="middle" font-family="'Outfit', system-ui, -apple-system, sans-serif"
          font-weight="900" font-style="italic" font-size="${fontSize}" fill="#FFFFFF" letter-spacing="0.5" filter="url(#dropShadow)">
      ${tspans}
    </text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function generateFullPosterSvg(project) {
  const conf = universeColors[project.universe] || universeColors.MCU;
  const theme = getProjectTheme(project.title, project.universe);
  const year = project.releaseDate ? project.releaseDate.split('-')[0] : '';
  const category = project.category ? project.category.toUpperCase() : 'MOVIE';
  const lines = wrapSvgText(project.title, 18);
  const fontSize = lines.length > 3 ? 18 : (lines.length > 2 ? 22 : 26);
  const startY = lines.length === 1 ? 380 : (lines.length === 2 ? 365 : 348);
  const lineHeight = fontSize + 6;

  const tspans = lines.map((line, idx) => {
    const escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<tspan x="200" y="${startY + (idx * lineHeight)}">${escaped}</tspan>`;
  }).join('');

  const graphicSvg = getThemeSvgGraphic(theme, conf.primary, conf.secondary, 200, 190, 1.5);

  const svg = `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fullBg_${project.universe}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${conf.bg1}"/>
        <stop offset="45%" stop-color="#0E1017"/>
        <stop offset="100%" stop-color="${conf.bg2}"/>
      </linearGradient>
      <radialGradient id="posterGlow_${project.universe}" cx="50%" cy="32%" r="48%">
        <stop offset="0%" stop-color="${conf.primary}" stop-opacity="0.4"/>
        <stop offset="70%" stop-color="${conf.primary}" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </radialGradient>
      <pattern id="posterDots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#FFFFFF" fill-opacity="0.06"/>
      </pattern>
      <filter id="posterShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.9"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="400" height="600" fill="url(#fullBg_${project.universe})"/>
    <rect width="400" height="600" fill="url(#posterGlow_${project.universe})"/>
    <rect width="400" height="600" fill="url(#posterDots)"/>

    <!-- Left Accent Neon Strip -->
    <rect x="0" y="0" width="8" height="600" fill="${conf.primary}"/>

    <!-- Top Marvel Studios Header Strip -->
    <rect x="150" y="24" width="100" height="24" rx="3" fill="#E62429"/>
    <text x="200" y="41" text-anchor="middle" font-family="'Outfit', system-ui, sans-serif" font-weight="900" font-size="13" fill="#FFFFFF" letter-spacing="2">MARVEL</text>
    <text x="200" y="62" text-anchor="middle" font-family="'Inter', system-ui, sans-serif" font-weight="800" font-size="9" fill="${conf.secondary}" letter-spacing="3">STUDIOS • TIMELINE #${project.timelineOrder}</text>

    <!-- Intricate Thematic Vector Illustration -->
    <g filter="url(#posterShadow)">
      ${graphicSvg}
    </g>

    <!-- Divider Glow Line -->
    <line x1="80" y1="320" x2="320" y2="320" stroke="${conf.primary}" stroke-opacity="0.6" stroke-width="1.5"/>

    <!-- Title Typography -->
    <text text-anchor="middle" font-family="'Outfit', system-ui, -apple-system, sans-serif"
          font-weight="900" font-style="italic" font-size="${fontSize}" fill="#FFFFFF" letter-spacing="0.5" filter="url(#posterShadow)">
      ${tspans}
    </text>

    <!-- Format Pill with optional season label -->
    <rect x="110" y="495" width="180" height="28" rx="14" fill="${conf.primary}" filter="url(#posterShadow)"/>
    <text x="200" y="514" text-anchor="middle" font-family="'Inter', system-ui, sans-serif"
          font-weight="900" font-size="11" fill="#FFFFFF" letter-spacing="1.5">
      ${project.category === 'Series' && project.seasons ? `${category} • ${project.seasons} ${project.seasons > 1 ? 'SEASONS' : 'SEASON'}` : category}
    </text>

    <!-- Universe & Year Metadata Footer -->
    <text x="200" y="555" text-anchor="middle" font-family="'Inter', system-ui, sans-serif"
          font-weight="800" font-size="13" fill="#94A3B8" letter-spacing="2.5">
      ${project.universe} • ${year}
    </text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ⚡ High-Performance Memoization Cache & Lazy Property Attachment
const _thumbCache = new Map();
const _posterCache = new Map();

function getProjectThumbnail(title, universe = 'MCU') {
  const key = `${universe}__${title}`;
  if (_thumbCache.has(key)) return _thumbCache.get(key);
  const dataUrl = generateThumbnailSvg(title, universe);
  _thumbCache.set(key, dataUrl);
  return dataUrl;
}

function getProjectPoster(project) {
  if (!project) return '';
  const key = `${project.id}__${project.title}__${project.seasons || ''}`;
  if (_posterCache.has(key)) return _posterCache.get(key);
  const dataUrl = generateFullPosterSvg(project);
  _posterCache.set(key, dataUrl);
  return dataUrl;
}

function enableLazyProjectGraphics(projects) {
  if (!Array.isArray(projects)) return;
  projects.forEach(p => {
    Object.defineProperties(p, {
      thumbnailImage: {
        get() {
          return getProjectThumbnail(this.title, this.universe);
        },
        enumerable: true,
        configurable: true
      },
      fullImage: {
        get() {
          return getProjectPoster(this);
        },
        enumerable: true,
        configurable: true
      }
    });
  });
}

/**
 * 🌌 Cosmic Galaxy & Hyper-Speed Streaks Dynamic Background Engine
 * Self-contained zero-asset GPU-accelerated canvas background:
 * - Twinkling multi-colored starfield (300+ stars with color temperatures)
 * - Swirling spiral galaxy disc & nebula dust clouds
 * - Curving hyper-speed neon laser beams (Crimson Red & Electric Cyan)
 * - Traveling speed pulse flares traversing the dimensional trajectories
 * - Respects prefers-reduced-motion
 */
/**
 * 🌌 Multiverse Quantum Nebula & Interactive Galaxy Canvas Engine
 * - Universe-adaptive dynamic chromatic color morphing (MCU, Fox, Sony, Netflix, etc.)
 * - Deep volumetric multi-layered nebula clouds & rotating spiral galaxy core
 * - Interactive cursor/touch gravitational parallax warping
 * - Hyperspeed cosmic laser trajectories with trailing energy flares
 * - Hardware-accelerated 60fps rendering respecting prefers-reduced-motion
 */
/**
 * 🌌 Multiverse Quantum Nebula & Interactive Galaxy Canvas Engine
 * - Full multi-layered cosmic space on all devices (mobile & desktop)
 * - Universe-adaptive chromatic color morphing (MCU, Fox, Sony, Netflix, etc.)
 * - Deep volumetric nebula clouds, rotating galaxy core, and hyperspeed laser flares
 * - Hardware-accelerated 60fps rendering respecting prefers-reduced-motion
 */
function initCosmicGalaxyCanvas(canvasId = 'cosmic-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0, height = 0, dpr = 1;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = (typeof navigator !== 'undefined' && (navigator.maxTouchPoints > 0 || 'ontouchstart' in window));

  const stars = [];
  const starColors = ['#FFFFFF', '#C8E6FF', '#FFE4B5', '#00F0FF', '#FF2233', '#F59E0B', '#A78BFA'];

  function initStars() {
    stars.length = 0;
    const isSmall = width < 768;
    const count = isSmall ? 35 : (width < 1024 ? 110 : 240);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isSmall ? Math.random() * 1.2 + 0.4 : Math.random() * 1.8 + 0.4,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        baseAlpha: Math.random() * 0.75 + 0.25,
        twinkleSpeed: isSmall ? (Math.random() * 0.015 + 0.005) : (Math.random() * 0.03 + 0.008),
        twinklePhase: Math.random() * Math.PI * 2,
        flare: !isSmall && Math.random() < 0.12
      });
    }
  }

  function resize() {
    dpr = isTouch ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(window.innerWidth, document.documentElement.clientWidth || 0);
    height = Math.max(window.innerHeight, document.documentElement.clientHeight || 0);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initStars();
    drawFrame(0);
  }

  let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;
  if (!prefersReduced && !isTouch) {
    const handleMove = (x, y) => {
      targetMouseX = (x / (width || 1) - 0.5) * 35;
      targetMouseY = (y / (height || 1) - 0.5) * 35;
    };
    window.addEventListener('pointermove', (e) => handleMove(e.clientX, e.clientY), { passive: true });
  }

  let isScrolling = false;
  let scrollTimer = null;
  window.addEventListener('scroll', () => {
    isScrolling = true;
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => { isScrolling = false; }, 80);
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(resize, 150), { passive: true });
  resize();

  let time = 0;
  let animFrameId = null;

  function getBezierPoint(p0, p1, p2, p3, t) {
    const cx = 3 * (p1.x - p0.x);
    const bx = 3 * (p2.x - p1.x) - cx;
    const ax = p3.x - p0.x - cx - bx;

    const cy = 3 * (p1.y - p0.y);
    const by = 3 * (p2.y - p1.y) - cy;
    const ay = p3.y - p0.y - cy - by;

    const tSquared = t * t;
    const tCubed = tSquared * t;

    return {
      x: (ax * tCubed) + (bx * tSquared) + (cx * t) + p0.x,
      y: (ay * tCubed) + (by * tSquared) + (cy * t) + p0.y
    };
  }

  function drawFrame(t) {
    if (width === 0 || height === 0) return;
    const isSmall = width < 768;

    // On mobile: skip parallax smoothing (saves 2 multiplications per frame)
    if (!isSmall) {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
    }

    let activeTheme = null;
    if (window.marvelAppInstance) {
      activeTheme = window.marvelAppInstance.activeTheme;
    } else if (typeof universeThemes !== 'undefined' && universeThemes.MCU) {
      activeTheme = universeThemes.MCU;
    }

    const primary = activeTheme ? activeTheme.primary : '#E62429';
    const secondary = activeTheme ? activeTheme.secondary : '#00F0FF';

    // ─── MOBILE: Minimal render path ──────────────────────────────────────────
    // One static dark gradient + sparse stars = ~3ms/frame vs ~18ms/frame full
    if (isSmall) {
      ctx.save();

      // Flat dark background — no createRadialGradient mouse tracking on mobile
      ctx.fillStyle = '#05070d';
      ctx.fillRect(0, 0, width, height);

      // Single subtle nebula tint — one cheap fillRect in screen blend
      ctx.globalCompositeOperation = 'screen';
      const neb = ctx.createRadialGradient(width * 0.5, height * 0.3, 10, width * 0.5, height * 0.4, width * 0.7);
      neb.addColorStop(0, primary + '18');
      neb.addColorStop(0.5, secondary + '0c');
      neb.addColorStop(1, 'transparent');
      ctx.fillStyle = neb;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      // Stars only — no shadowBlur, no galaxy arms, no Bezier curves
      ctx.globalAlpha = 1;
      stars.forEach(s => {
        const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed * 60 + s.twinklePhase) * 0.28;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.9, alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.restore();
      return; // ← skip all desktop effects below
    }

    // ─── DESKTOP: Full fidelity render ────────────────────────────────────────
    ctx.save();

    const bgGrad = ctx.createRadialGradient(
      width * 0.5 + mouseX * 0.2, 
      height * 0.5 + mouseY * 0.2, 
      10, 
      width * 0.5, 
      height * 0.5, 
      Math.max(width, height) * 0.95
    );
    bgGrad.addColorStop(0, '#0c101c');
    bgGrad.addColorStop(0.45, '#05070d');
    bgGrad.addColorStop(1, '#020306');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.translate(mouseX * 0.35, mouseY * 0.35);
    ctx.globalCompositeOperation = 'screen';

    const nebLeft = ctx.createRadialGradient(width * 0.18, height * 0.42, 10, width * 0.22, height * 0.48, width * 0.45);
    nebLeft.addColorStop(0, primary + '2e');
    nebLeft.addColorStop(0.4, primary + '14');
    nebLeft.addColorStop(1, 'transparent');
    ctx.fillStyle = nebLeft;
    ctx.fillRect(0, 0, width, height);

    const nebRight = ctx.createRadialGradient(width * 0.82, height * 0.32, 20, width * 0.78, height * 0.38, width * 0.48);
    nebRight.addColorStop(0, secondary + '32');
    nebRight.addColorStop(0.35, secondary + '16');
    nebRight.addColorStop(0.7, primary + '09');
    nebRight.addColorStop(1, 'transparent');
    ctx.fillStyle = nebRight;
    ctx.fillRect(0, 0, width, height);

    const galX = width * 0.8;
    const galY = height * 0.28;
    const galRadius = Math.min(width, height) * 0.32;
    const galGrad = ctx.createRadialGradient(galX, galY, 2, galX, galY, galRadius);
    galGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    galGrad.addColorStop(0.1, secondary + '65');
    galGrad.addColorStop(0.3, primary + '32');
    galGrad.addColorStop(0.65, 'rgba(30, 40, 80, 0.08)');
    galGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = galGrad;
    ctx.beginPath();
    ctx.arc(galX, galY, galRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(galX, galY);
    ctx.rotate(t * 0.035);
    for (let arm = 0; arm < 2; arm++) {
      ctx.beginPath();
      ctx.strokeStyle = arm === 0 ? (secondary + '45') : (primary + '35');
      ctx.lineWidth = 14;
      const startAngle = arm * Math.PI;
      for (let theta = 0; theta < Math.PI * 2.6; theta += 0.15) {
        const r = Math.pow(theta / 4, 1.75) * (galRadius * 0.95);
        const x = r * Math.cos(theta + startAngle);
        const y = r * Math.sin(theta + startAngle) * 0.55;
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();

    stars.forEach(s => {
      const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed * 60 + s.twinklePhase) * 0.32;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0.12, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = 'lighter';

    const primaryCurves = [
      { cp1x: width * 0.25, cp1y: height * 0.35, cp2x: width * 0.38, cp2y: height * 0.65, endX: width * 0.22, endY: height * 1.1, color: primary, width: 3.5, glow: 16 }
    ];

    primaryCurves.forEach((c, idx) => {
      ctx.strokeStyle = c.color;
      ctx.lineWidth = c.width;
      ctx.shadowColor = c.color;
      ctx.shadowBlur = c.glow;
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.moveTo(-width * 0.1, height * (0.38 + idx * 0.03));
      ctx.bezierCurveTo(c.cp1x, c.cp1y, c.cp2x, c.cp2y, c.endX, c.endY);
      ctx.stroke();

      const tProgress = (t * 0.38 + idx * 0.33) % 1;
      const flarePt = getBezierPoint(
        { x: -width * 0.1, y: height * (0.38 + idx * 0.03) },
        { x: c.cp1x, y: c.cp1y },
        { x: c.cp2x, y: c.cp2y },
        { x: c.endX, y: c.endY },
        tProgress
      );
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = c.color;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(flarePt.x, flarePt.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
    });

    const secondaryCurves = [
      { startX: -width * 0.05, startY: height * 0.42, cp1x: width * 0.45, cp1y: height * 0.28, cp2x: width * 0.62, cp2y: height * 0.72, endX: width * 1.05, endY: height * 0.88, color: secondary, width: 3.2, glow: 18 }
    ];

    secondaryCurves.forEach((c, idx) => {
      ctx.strokeStyle = c.color;
      ctx.lineWidth = c.width;
      ctx.shadowColor = c.color;
      ctx.shadowBlur = c.glow;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.moveTo(c.startX, c.startY);
      ctx.bezierCurveTo(c.cp1x, c.cp1y, c.cp2x, c.cp2y, c.endX, c.endY);
      ctx.stroke();

      const tProgress = (t * 0.42 + idx * 0.28) % 1;
      const flarePt = getBezierPoint(
        { x: c.startX, y: c.startY },
        { x: c.cp1x, y: c.cp1y },
        { x: c.cp2x, y: c.cp2y },
        { x: c.endX, y: c.endY },
        tProgress
      );
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = c.color;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(flarePt.x, flarePt.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }


  function loop() {
    if (isTouch && isScrolling) {
      animFrameId = requestAnimationFrame(loop);
      return;
    }
    time += isTouch ? 0.008 : 0.012;
    drawFrame(time);
    if (!prefersReduced) {
      animFrameId = requestAnimationFrame(loop);
    }
  }

  if (prefersReduced) {
    drawFrame(0);
  } else {
    loop();
  }
}

/* ==========================================================================
   COSMIC VFX ENGINE — Enhanced Thanos Snap & Hulk Restoration
   ========================================================================== */

let vfxCanvas = null;
let vfxCtx = null;
let vfxParticles = [];
let vfxAnimId = null;

function initVfxCanvas() {
  if (vfxCanvas) return vfxCanvas;
  vfxCanvas = document.getElementById('vfx-particle-canvas');
  if (!vfxCanvas) {
    vfxCanvas = document.createElement('canvas');
    vfxCanvas.id = 'vfx-particle-canvas';
    vfxCanvas.className = 'fixed inset-0 pointer-events-none z-[120] w-full h-full';
    document.body.appendChild(vfxCanvas);
  }
  vfxCtx = vfxCanvas.getContext('2d');
  function resize() {
    if (!vfxCanvas) return;
    vfxCanvas.width = window.innerWidth;
    vfxCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();
  return vfxCanvas;
}

/**
 * 👑 ENHANCED THANOS INFINITY GAUNTLET SNAP — Golden Ash Dissolution & Particle Vortex
 */
function triggerThanosSnapVFX(callback) {
  initVfxCanvas();
  if (!vfxCtx) return;

  const width = vfxCanvas.width;
  const height = vfxCanvas.height;
  const centerX = width / 2;
  const centerY = height * 0.45;
  vfxParticles = [];

  const count = window.innerWidth < 768 ? 220 : 460;
  for (let i = 0; i < count; i++) {
    const isEmber = Math.random() > 0.4;
    vfxParticles.push({
      x: Math.random() * width,
      y: height * 0.3 + Math.random() * height * 0.7,
      vx: (Math.random() - 0.5) * 5 + (Math.random() > 0.5 ? 2 : -2),
      vy: -(Math.random() * 6 + 2.5),
      size: isEmber ? (Math.random() * 4 + 2) : (Math.random() * 2 + 1),
      alpha: 1,
      decay: Math.random() * 0.012 + 0.007,
      color: isEmber ? (Math.random() > 0.5 ? '#F59E0B' : '#EF4444') : '#FDE68A',
      spin: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.15,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.08 + 0.04
    });
  }

  const startTime = Date.now();
  const duration = 2600;

  function render() {
    const elapsed = Date.now() - startTime;
    vfxCtx.clearRect(0, 0, width, height);

    const progress = Math.min(1, elapsed / duration);

    // 1. Golden Infinity Flare Flash
    if (elapsed < 450) {
      const flashAlpha = (1 - elapsed / 450) * 0.55;
      const grad = vfxCtx.createRadialGradient(centerX, centerY, 10, centerX, centerY, Math.max(width, height) * 0.6);
      grad.addColorStop(0, `rgba(253, 230, 138, ${flashAlpha})`);
      grad.addColorStop(0.35, `rgba(245, 158, 11, ${flashAlpha * 0.7})`);
      grad.addColorStop(1, 'transparent');
      vfxCtx.fillStyle = grad;
      vfxCtx.fillRect(0, 0, width, height);
    }

    // 2. Cosmic Shockwave Ring
    if (elapsed > 100 && elapsed < 1600) {
      const ringProgress = (elapsed - 100) / 1500;
      const ringR = ringProgress * Math.max(width, height) * 0.8;
      vfxCtx.save();
      vfxCtx.strokeStyle = '#F59E0B';
      vfxCtx.lineWidth = Math.max(1, 6 * (1 - ringProgress));
      vfxCtx.shadowColor = '#F59E0B';
      vfxCtx.shadowBlur = 25;
      vfxCtx.globalAlpha = (1 - ringProgress) * 0.8;
      vfxCtx.beginPath();
      vfxCtx.arc(centerX, centerY, ringR, 0, Math.PI * 2);
      vfxCtx.stroke();
      vfxCtx.restore();
    }

    // 3. Upward Drifting Cosmic Ash & Dust Particles
    vfxCtx.save();
    vfxParticles.forEach(p => {
      p.wobblePhase += p.wobbleSpeed;
      p.x += p.vx + Math.sin(p.wobblePhase) * 1.5;
      p.y += p.vy;
      p.vx *= 0.985;
      p.vy *= 0.985;
      p.alpha -= p.decay;
      p.spin += p.spinSpeed;

      if (p.alpha > 0) {
        vfxCtx.save();
        vfxCtx.translate(p.x, p.y);
        vfxCtx.rotate(p.spin);
        vfxCtx.globalAlpha = Math.max(0, p.alpha);
        vfxCtx.fillStyle = p.color;
        vfxCtx.shadowColor = p.color;
        vfxCtx.shadowBlur = 12;
        vfxCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        vfxCtx.restore();
      }
    });
    vfxCtx.restore();

    if (elapsed < duration) {
      vfxAnimId = requestAnimationFrame(render);
    } else {
      vfxCtx.clearRect(0, 0, width, height);
      if (typeof callback === 'function') callback();
    }
  }

  if (vfxAnimId) cancelAnimationFrame(vfxAnimId);
  render();
}

/**
 * 💚 ENHANCED HULK NANO GAUNTLET SNAP — Gamma Supernova Shockwave & Restorative Particle Vortex
 */
function triggerHulkSnapVFX(callback) {
  initVfxCanvas();
  if (!vfxCtx) return;

  const width = vfxCanvas.width;
  const height = vfxCanvas.height;
  const centerX = width / 2;
  const centerY = height * 0.45;
  vfxParticles = [];

  const count = window.innerWidth < 768 ? 220 : 460;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.max(width, height) * (0.45 + Math.random() * 0.65);
    vfxParticles.push({
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      targetX: centerX + (Math.random() - 0.5) * width * 0.8,
      targetY: centerY + (Math.random() - 0.5) * height * 0.8,
      size: Math.random() * 5 + 2.5,
      alpha: 0,
      maxAlpha: Math.random() * 0.85 + 0.25,
      color: Math.random() > 0.5 ? '#10B981' : (Math.random() > 0.3 ? '#84CC16' : '#A7F3D0'),
      speed: Math.random() * 0.045 + 0.025,
      trailLength: Math.random() * 12 + 6
    });
  }

  const startTime = Date.now();
  const duration = 2600;

  function render() {
    const elapsed = Date.now() - startTime;
    vfxCtx.clearRect(0, 0, width, height);

    const progress = Math.min(1, elapsed / duration);

    // 1. Concentric Dual Gamma Shockwaves
    if (elapsed > 200 && elapsed < 1900) {
      const ringProgress = (elapsed - 200) / 1700;
      const radius1 = ringProgress * Math.max(width, height) * 0.85;
      const radius2 = Math.max(0, (ringProgress - 0.15) * Math.max(width, height) * 0.85);

      vfxCtx.save();
      vfxCtx.strokeStyle = '#10B981';
      vfxCtx.lineWidth = Math.max(1, 8 * (1 - ringProgress));
      vfxCtx.shadowColor = '#10B981';
      vfxCtx.shadowBlur = 30;
      vfxCtx.globalAlpha = (1 - ringProgress) * 0.85;
      vfxCtx.beginPath();
      vfxCtx.arc(centerX, centerY, radius1, 0, Math.PI * 2);
      vfxCtx.stroke();

      if (radius2 > 0) {
        vfxCtx.strokeStyle = '#84CC16';
        vfxCtx.lineWidth = Math.max(1, 5 * (1 - ringProgress));
        vfxCtx.shadowColor = '#84CC16';
        vfxCtx.beginPath();
        vfxCtx.arc(centerX, centerY, radius2, 0, Math.PI * 2);
        vfxCtx.stroke();
      }
      vfxCtx.restore();
    }

    // 2. Emerald Gamma Supernova Core Flash
    if (elapsed < 650) {
      const flashAlpha = Math.sin((elapsed / 650) * Math.PI) * 0.55;
      const grad = vfxCtx.createRadialGradient(centerX, centerY, 15, centerX, centerY, Math.max(width, height) * 0.6);
      grad.addColorStop(0, `rgba(167, 243, 208, ${flashAlpha})`);
      grad.addColorStop(0.4, `rgba(16, 185, 129, ${flashAlpha * 0.8})`);
      grad.addColorStop(1, 'transparent');
      vfxCtx.fillStyle = grad;
      vfxCtx.fillRect(0, 0, width, height);
    }

    // 3. Restorative Particles Inward Vortex
    vfxCtx.save();
    vfxParticles.forEach(p => {
      const prevX = p.x;
      const prevY = p.y;
      p.x += (p.targetX - p.x) * p.speed;
      p.y += (p.targetY - p.y) * p.speed;
      
      if (progress < 0.28) {
        p.alpha = Math.min(p.maxAlpha, p.alpha + 0.08);
      } else if (progress > 0.68) {
        p.alpha = Math.max(0, p.alpha - 0.04);
      }

      if (p.alpha > 0) {
        vfxCtx.save();
        vfxCtx.globalAlpha = p.alpha;
        vfxCtx.strokeStyle = p.color;
        vfxCtx.shadowColor = p.color;
        vfxCtx.shadowBlur = 16;
        vfxCtx.lineWidth = p.size;
        vfxCtx.lineCap = 'round';
        vfxCtx.beginPath();
        vfxCtx.moveTo(prevX, prevY);
        vfxCtx.lineTo(p.x, p.y);
        vfxCtx.stroke();
        vfxCtx.restore();
      }
    });
    vfxCtx.restore();

    if (elapsed < duration) {
      vfxAnimId = requestAnimationFrame(render);
    } else {
      vfxCtx.clearRect(0, 0, width, height);
      if (typeof callback === 'function') callback();
    }
  }

  if (vfxAnimId) cancelAnimationFrame(vfxAnimId);
  render();
}

/**
 * 🌟 DYNAMIC FAN LEVEL UP FANFARE — Cosmic Starburst & Confetti Shower
 */
function triggerFanfareVFX(callback) {
  initVfxCanvas();
  if (!vfxCtx) return;

  const width = vfxCanvas.width;
  const height = vfxCanvas.height;
  const centerX = width / 2;
  const centerY = height * 0.4;
  vfxParticles = [];

  const colors = ['#FACC15', '#EF4444', '#06B6D4', '#A855F7', '#10B981', '#F8FAFC', '#F97316'];
  const count = window.innerWidth < 768 ? 160 : 320;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 12 + 4;
    const isStar = Math.random() > 0.45;
    vfxParticles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 4,
      gravity: 0.18,
      size: isStar ? (Math.random() * 5 + 3) : (Math.random() * 6 + 3),
      isStar,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.008 + 0.005,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.2,
      wobble: Math.random() * Math.PI * 2
    });
  }

  const startTime = Date.now();
  const duration = 3200;

  function render() {
    const elapsed = Date.now() - startTime;
    vfxCtx.clearRect(0, 0, width, height);

    // 1. Initial Heroic Strobe Flash
    if (elapsed < 350) {
      const flashAlpha = (1 - elapsed / 350) * 0.45;
      vfxCtx.fillStyle = `rgba(254, 240, 138, ${flashAlpha})`;
      vfxCtx.fillRect(0, 0, width, height);
    }

    // 2. Render Cosmic Confetti & Star Particles
    vfxCtx.save();
    vfxParticles.forEach(p => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.985;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;
      p.wobble += 0.08;

      if (p.alpha > 0) {
        vfxCtx.save();
        vfxCtx.translate(p.x + Math.sin(p.wobble) * 2, p.y);
        vfxCtx.rotate(p.rotation);
        vfxCtx.globalAlpha = Math.max(0, p.alpha);
        vfxCtx.fillStyle = p.color;
        vfxCtx.shadowColor = p.color;
        vfxCtx.shadowBlur = 10;

        if (p.isStar) {
          // Draw 4-point sparkle star
          vfxCtx.beginPath();
          const s = p.size;
          vfxCtx.moveTo(0, -s * 1.6);
          vfxCtx.quadraticCurveTo(0, 0, s * 1.6, 0);
          vfxCtx.quadraticCurveTo(0, 0, 0, s * 1.6);
          vfxCtx.quadraticCurveTo(0, 0, -s * 1.6, 0);
          vfxCtx.quadraticCurveTo(0, 0, 0, -s * 1.6);
          vfxCtx.fill();
        } else {
          // Draw spinning rectangular confetti ribbon
          vfxCtx.fillRect(-p.size / 2, -p.size, p.size, p.size * 1.6);
        }

        vfxCtx.restore();
      }
    });
    vfxCtx.restore();

    if (elapsed < duration) {
      vfxAnimId = requestAnimationFrame(render);
    } else {
      vfxCtx.clearRect(0, 0, width, height);
      if (typeof callback === 'function') callback();
    }
  }

  if (vfxAnimId) cancelAnimationFrame(vfxAnimId);
  render();
}

// Automatically attach high-definition lazy SVG posters & thumbnails to marvelProjects
if (typeof marvelProjects !== 'undefined' && Array.isArray(marvelProjects)) {
  enableLazyProjectGraphics(marvelProjects);
}



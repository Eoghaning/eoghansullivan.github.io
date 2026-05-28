# Dark Mode Colour Palette

## CSS Custom Properties (Defined in `:root`)

| Variable | Hex/Value | Usage |
|---|---|---|
| `--bg` | `#080809` | Page background (under gradient overlay) |
| `--bg2` | `#0f0f11` | Card/section/block backgrounds |
| `--bg3` | `#161618` | Hover surfaces, secondary backgrounds |
| `--border` | `rgba(255,255,255,0.07)` | Subtle borders, dividers |
| `--border2` | `rgba(255,255,255,0.13)` | More prominent borders |
| `--text` | `#ffffff` | Primary text colour |
| `--muted` | `#ffffff` | Muted/secondary text |
| `--dim` | `#ffffff` | Dim/low-emphasis text |
| `--accent` | `#d4f04a` | Primary accent (lime green) |
| `--accent2` | `rgba(212,240,74,0.1)` | Accent translucent background |

---

## Body / Page Background

| Element | Colour | Usage |
|---|---|---|
| `<body>` background | `linear-gradient(rgba(8,8,9,0.6), rgba(8,8,9,0.6)), url('/bg.jpg')` | Gradient overlay on background image |
| Gradient overlay colour | `rgba(8,8,9,0.6)` | Semi-transparent near-black overlay |

---

## Scrollbar

| Element | Colour | Usage |
|---|---|---|
| Scrollbar thumb | `#ffffff` | Thumb colour |
| Scrollbar thumb hover | `#cccccc` | Thumb hover colour |
| Scrollbar track | `transparent` | Track background |
| `scrollbar-color` | `#ffffff transparent` | Firefox shorthand |

---

## Text Shadows (Headings)

| Element | Colour | Usage |
|---|---|---|
| `h1` headings (`text-shadow`) | `#000` | 4-sided stroke on hero/page headings |

---

## Buttons

### `.btn-primary`
| Property | Colour | Usage |
|---|---|---|
| `background` | `var(--accent)` → `#d4f04a` | Button fill |
| `color` | `#080809` | Button text |
| `border` | `#111` | Button border |

### `.btn-outline`
| Property | Colour | Usage |
|---|---|---|
| `background` | `transparent` | Transparent fill |
| `color` | `var(--text)` → `#ffffff` | Text colour |
| `border` | `var(--border2)` → `rgba(255,255,255,0.13)` | Border colour |
| `border-color` (hover) | `rgba(255,255,255,0.3)` | Hover border |
| `background` (hover) | `rgba(255,255,255,0.03)` | Hover background |

### `.skip-link`
| Property | Colour | Usage |
|---|---|---|
| `background` | `var(--accent)` → `#d4f04a` | Skip link fill |
| `color` | `#080809` | Skip link text |

### `.back-to-top`
| Property | Colour | Usage |
|---|---|---|
| `background` | `var(--accent)` → `#d4f04a` | Back-to-top button fill |
| `color` | `#080809` | Back-to-top button icon/text |

---

## Navbar

| Element | Colour | Usage |
|---|---|---|
| `.nav` background | `rgba(8,8,9,0.92)` | Semi-transparent navbar background |
| `.nav` border | `1px solid var(--accent)` → `#d4f04a` | Lime accent border |
| `.nav--scrolled` shadow | `0 4px 20px rgba(0,0,0,0.4)` | Scrolled navbar drop shadow |
| `.nav-logo` colour | `var(--accent)` → `#d4f04a` | Logo text |
| `.nav-link` colour | `var(--muted)` → `#ffffff` | Link text |
| `.nav-link:hover` background | `rgba(255,255,255,0.05)` | Link hover background |
| `.nav-link:hover` colour | `var(--text)` → `#ffffff` | Link hover text |
| `.nav-link.active` colour | `var(--accent)` → `#d4f04a` | Active link text |
| `.nav-link.active` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Active link background |
| Hamburger spans | `var(--text)` → `#ffffff` | Hamburger menu lines |

**Small screen mobile nav:**
| Element | Colour | Usage |
|---|---|---|
| `.nav-links` background | `var(--bg)` → `#080809` | Mobile menu background |
| `.nav-links` border-bottom | `1px solid var(--border)` → `rgba(255,255,255,0.07)` | Mobile menu bottom border |

---

## Theme Toggle

| Element | Colour | Usage |
|---|---|---|
| Button background | `#2a2a3a` | Toggle button fill |
| Button border | `#444` | Toggle button border |
| Sun icon colour | `#ffd93d` (opacity 1) | Sun emoji icon |
| Moon icon colour | `#aac` (opacity 0.6) | Moon emoji icon |
| Knob background | `#f5c542` | Sliding knob (sun) |
| Knob box-shadow | `0 1px 4px rgba(0,0,0,0.4)` | Knob shadow |
| Knob hover glow | `0 0 21px rgba(245,197,66,0.6)` | Knob hover outer glow |

---

## Typing Animation

| Element | Colour | Usage |
|---|---|---|
| Before-split text (`colorBefore`) | `var(--accent)` → `#d4f04a` | First part of typed text (default) |
| After-split text (`colorAfter`) | `var(--muted)` → `#ffffff` | Second part of typed text (default) |
| Silhouette (untyped) text | `var(--muted)` → `#ffffff`, opacity 0.3 | Faded preview of upcoming text |
| Cursor | `currentColor` → inherited `var(--muted)` → `#ffffff` | Typing cursor |

---

## About / Hero Section

| Element | Colour | Usage |
|---|---|---|
| `.hero-card` background | `var(--bg2)` → `#0f0f11` | Hero info card |
| `.hero-card` border | `1px solid var(--accent)` → `#d4f04a` | Card border |
| `.hero-tag` colour | `var(--accent)` → `#d4f04a` | Tag text & underline |
| `.about-label` colour | `var(--text)` → `#ffffff` | Section label |
| `.about-label` border-bottom | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Label underline |
| `.hero-bio` colour | `var(--muted)` → `#ffffff` | Bio paragraph |
| `.portfolio-bullets` colour | `var(--muted)` → `#ffffff` | Bullet list text |
| `.contact-item` background | `var(--bg2)` → `#0f0f11` | Contact row |
| `.contact-item` border | `1px solid var(--accent)` → `#d4f04a` | Contact row border |
| `.contact-item:hover` shadow | `0 4px 12px rgba(212,240,74,0.1)` | Contact row hover glow |
| `.contact-text` colour | `var(--text)` → `#ffffff` | Contact detail text |
| `.face-image` border | `3px solid var(--accent)` → `#d4f04a` | Image border |
| `.face-image` shadow | `0 8px 20px rgba(0,0,0,0.3)` | Image drop shadow |
| `.small-image` border | `2px solid var(--accent)` → `#d4f04a` | Small image border |
| `.small-image` shadow | `0 4px 10px rgba(0,0,0,0.2)` | Small image shadow |
| `.tall-image` border | `3px solid var(--accent)` → `#d4f04a` | Tall image border |
| `.tall-image` shadow | `0 8px 20px rgba(0,0,0,0.3)` | Tall image shadow |

---

## Skills Section

| Element | Colour | Usage |
|---|---|---|
| `.skills-card` background | `var(--bg2)` → `#0f0f11` | Skills card fill |
| `.skills-card` border | `1px solid var(--accent)` → `#d4f04a` | Card border |
| `.skills-card:hover` shadow | `0 8px 20px rgba(212,240,74,0.1)` | Card hover glow |
| `.skills-heading` colour | `var(--text)` → `#ffffff` | Section heading |
| `.skills-heading` border-bottom | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Heading underline |
| `.skill-label` colour | `var(--dim)` → `#ffffff` | Skill group label |
| `.skill-tag` colour | `var(--accent)` → `#d4f04a` | Skill tag text |
| `.skill-tag` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Skill tag fill |
| `.skill-tag` border | `1px solid var(--accent)` → `#d4f04a` | Skill tag border |
| `.skill-tag:hover` border-colour | `var(--border2)` → `rgba(255,255,255,0.13)` | Skill tag hover border |

---

## Projects Section

| Element | Colour | Usage |
|---|---|---|
| `.project-card` background | `var(--bg2)` → `#0f0f11` | Project card fill |
| `.project-card` border | `1px solid var(--accent)` → `#d4f04a` | Card border |
| `.project-card:hover` background | `var(--bg3)` → `#161618` | Card hover fill |
| `.project-card:hover` shadow | `0 24px 48px rgba(0,0,0,0.6), 0 0 40px rgba(212,240,74,0.12), 0 0 0 2px rgba(212,240,74,0.25)` | Card hover glow box-shadow |
| `.project-num` colour | `var(--accent)` → `#d4f04a` | Project number |
| `.project-detail` colour | `var(--dim)` → `#ffffff` | Detail text |
| `.project-title` colour | `var(--accent)` → `#d4f04a` | Project title |
| `.project-subtitle` colour | `var(--muted)` → `#ffffff` | Subtitle text |
| `.project-desc` colour | `var(--muted)` → `#ffffff` | Description text |
| `.project-tag` colour | `var(--accent)` → `#d4f04a` | Tag text |
| `.project-tag` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Tag fill |
| `.project-tag-more` background | `var(--bg3)` → `#161618` | "More" tag fill |
| `.project-tag-more` border | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | "More" tag border |
| `.project-tag-more` colour | `var(--muted)` → `#ffffff` | "More" tag text |
| `.project-count-badge` background | `var(--bg3)` → `#161618` | Count badge fill |
| `.project-count-badge` border | `3px solid var(--accent)` → `#d4f04a` | Badge border |
| `.project-count-badge` colour | `var(--accent)` → `#d4f04a` | Badge text |
| `.project-count-badge--filtered` colour | `#ffffff` | Filtered badge text |
| `.search-hint` colour | `var(--dim)` → `#ffffff` | Search hint text |
| `.projects-heading` text-shadow | `#000` | Heading text stroke |
| `.more-toggle` background | `#000` | Show more button fill |
| `.more-toggle` border | `1px solid var(--accent)` → `#d4f04a` | Button border |
| `.more-toggle` colour | `var(--accent)` → `#d4f04a` | Button text |
| `.more-toggle:hover` background | `#111` | Button hover fill |

### Project Detail Modal (`.mini-*`)

| Element | Colour | Usage |
|---|---|---|
| `.mini-overlay` background | `rgba(0,0,0,0.55)` | Modal backdrop |
| `.mini-card` background | `var(--bg)` → `#080809` | Modal card fill |
| `.mini-card` border | `1px solid var(--accent)` → `#d4f04a` | Modal border |
| `.mini-card` box-shadow | `0 20px 60px rgba(0,0,0,0.3)` | Modal shadow |
| `.mini-close-btn` background | `var(--bg3)` → `#161618` | Close button fill |
| `.mini-close-btn` border | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Close button border |
| `.mini-close-btn` colour | `var(--text)` → `#ffffff` | Close button icon |
| `.mini-close-btn:hover` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Close button hover |
| `.mini-close-btn:hover` border-colour | `var(--accent)` → `#d4f04a` | Close button hover border |
| `.mini-title` colour | `var(--accent)` → `#d4f04a` | Modal title |
| `.mini-subtitle` colour | `var(--muted)` → `#ffffff` | Modal subtitle |
| `.mini-divider` border-top | `2px solid var(--border)` → `rgba(255,255,255,0.07)` | Section divider |
| `.mini-card p` colour | `var(--text)` → `#ffffff` | Modal paragraph text |
| `.mini-card li` colour | `var(--text)` → `#ffffff` | Modal list item text |
| `.mini-card img` border | `2px solid var(--accent)` → `#d4f04a` | Modal image border |
| `.mini-tag` colour | `var(--accent)` → `#d4f04a` | Modal tag text |
| `.mini-tag` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Modal tag fill |
| `.mini-link` background | `var(--bg3)` → `#161618` | Link button fill |
| `.mini-link` colour | `var(--accent)` → `#d4f04a` | Link button text |
| `.mini-link` border | `1px solid var(--accent)` → `#d4f04a` | Link button border |
| `.mini-link:hover` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Link button hover |
| `.mini-related-title` colour | `var(--accent)` → `#d4f04a` | Related section title |
| `.mini-related-item` background | `var(--bg3)` → `#161618` | Related item fill |
| `.mini-related-item` border | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Related item border |
| `.mini-related-item` colour | `var(--text)` → `#ffffff` | Related item text |
| `.mini-related-item:hover` border-colour | `var(--accent)` → `#d4f04a` | Related item hover border |
| `.mini-related-item:hover` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Related item hover fill |
| `.mini-related-sub` colour | `var(--dim)` → `#ffffff` | Related item subtitle |

### Skill Filter (within Projects)

| Element | Colour | Usage |
|---|---|---|
| `.skill-input-wrapper` background | `var(--bg2)` → `#0f0f11` | Input wrapper fill |
| `.skill-input-wrapper` border | `1px solid var(--accent)` → `#d4f04a` | Input wrapper border |
| `.skill-input-wrapper:focus-within` shadow | `0 0 0 2px var(--accent2)` → `rgba(212,240,74,0.1)` | Focus ring |
| `.skill-chip` colour | `var(--accent)` → `#d4f04a` | Chip text |
| `.skill-chip` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Chip fill |
| `.skill-chip` border | `1px solid var(--accent)` → `#d4f04a` | Chip border |
| `.skill-chip-remove` colour | `var(--accent)` → `#d4f04a` | Remove button |
| `.skill-search-inner` colour | `var(--text)` → `#ffffff` | Search input text |
| `.skill-placeholder` colour | `var(--dim)` → `#ffffff` | Placeholder text |
| `.skill-suggestions` background | `var(--bg2)` → `#0f0f11` | Suggestions dropdown fill |
| `.skill-suggestions` border | `1px solid var(--accent)` → `#d4f04a` | Suggestions border |
| `.skill-suggestion-item` colour | `var(--accent)` → `#d4f04a` | Suggestion text |
| `.skill-suggestion-item:hover` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Suggestion hover |
| `.skill-not-found` colour | `#ff4d4d` | Error/no-match text |
| `.project-count-pill` colour | `var(--accent)` → `#d4f04a` | Pill text |
| `.project-count-pill` background | `var(--bg3)` → `#161618` | Pill fill |
| `.project-count-pill` border | `1px solid var(--accent)` → `#d4f04a` | Pill border |

---

## Blog Section

| Element | Colour | Usage |
|---|---|---|
| `.blog-outer-box` background | `var(--bg3)` → `#161618` | Outer wrapper fill |
| `.blog-outer-box` border | `1px solid var(--accent)` → `#d4f04a` | Outer wrapper border |

### Blog Card Alternating Colours

| Card | Colour | Usage |
|---|---|---|
| `.blog-card:nth-child(1)` background | `#25252a` | 1st card fill |
| `.blog-card:nth-child(2)` background | `#2a2a30` | 2nd card fill |
| `.blog-card:nth-child(3)` background | `#222227` | 3rd card fill |
| `.blog-card:nth-child(4)` background | `#26262c` | 4th card fill |
| `.blog-card:nth-child(5)` background | `#242429` | 5th card fill |
| All `.blog-card` borders | `1px solid var(--accent)` → `#d4f04a` | Card borders |
| `.blog-card:hover` shadow | `0 4px 12px rgba(212,240,74,0.1)` | Card hover glow |

| `.clickable-heading:hover` colour | `var(--accent)` → `#d4f04a` | Heading hover |
| `.blog-preview` colour | `var(--muted)` → `#ffffff` | Preview text |
| `.blog-preview` border-top | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Preview divider |
| `.blog-preview h3`, `h4` colour | `var(--accent)` → `#d4f04a` | Preview subheadings |
| `.blog-preview img` border | `2px solid var(--accent)` → `#d4f04a` | Preview image border |
| `.blog-tag-label` colour | `#ffffff` | Filter label text |
| `.blog-tag-chip` colour | `var(--dim)` → `#ffffff` | Tag chip text |
| `.blog-tag-chip` background | `var(--bg2)` → `#0f0f11` | Tag chip fill |
| `.blog-tag-chip` border | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Tag chip border |
| `.blog-tag-chip:hover` border-colour | `var(--accent)` → `#d4f04a` | Tag chip hover border |
| `.blog-tag-chip:hover` colour | `var(--accent)` → `#d4f04a` | Tag chip hover text |
| `.blog-tag-chip.active` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Active tag fill |
| `.blog-tag-chip.active` border-colour | `var(--accent)` → `#d4f04a` | Active tag border |
| `.blog-tag-chip.active` colour | `var(--accent)` → `#d4f04a` | Active tag text |
| `.blog-post-tag` colour | `var(--accent)` → `#d4f04a` | Post tag text |
| `.blog-post-tag` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Post tag fill |
| `.blog-post-tag` border | `1px solid var(--border)` → `rgba(255,255,255,0.07)` | Post tag border |
| `.blog-toc` background | `var(--bg2)` → `#0f0f11` | TOC fill |
| `.blog-toc` border | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | TOC border |
| `.blog-toc-title` colour | `var(--accent)` → `#d4f04a` | TOC title |
| `.blog-toc-item` colour | `var(--muted)` → `#ffffff` | TOC item text |
| `.blog-related` border-top | `1px solid var(--border2)` → `rgba(255,255,255,0.13)` | Related section divider |
| `.blog-related-title` colour | `var(--accent)` → `#d4f04a` | Related section title |
| `.blog-related-item` colour | `var(--muted)` → `#ffffff` | Related item text |
| `.blog-search` background | `var(--bg2)` → `#0f0f11` | Search input fill |
| `.blog-search` border | `1px solid var(--accent)` → `#d4f04a` | Search input border |
| `.blog-search` colour | `var(--text)` → `#ffffff` | Search input text |
| `.blog-search:focus` shadow | `0 0 0 2px var(--accent2)` → `rgba(212,240,74,0.1)` | Search focus ring |
| `.blog-search-placeholder` colour | `var(--dim)` → `#ffffff` | Search placeholder text |
| `.blog-no-results` colour | `var(--dim)` → `#ffffff` | No results text |
| `.sort-toggle` background | `var(--bg3)` → `#161618` | Sort button fill |
| `.sort-toggle` colour | `var(--accent)` → `#d4f04a` | Sort button text |
| `.sort-toggle` border | `1px solid var(--accent)` → `#d4f04a` | Sort button border |
| `.sort-toggle:hover` background | `var(--accent2)` → `rgba(212,240,74,0.1)` | Sort button hover |

---

## CV Section

| Element | Colour | Usage |
|---|---|---|
| `.cv-block` background | `var(--bg2)` → `#0f0f11` | Block fill |
| `.cv-block` border | `1px solid var(--accent)` → `#d4f04a` | Block border |
| `.cv-block-title` colour | `var(--accent)` → `#d4f04a` | Block title |
| `.cv-divider` colour | `var(--dim)` → `#ffffff` | Divider text |
| `.cv-item-year` colour | `var(--dim)` → `#ffffff` | Year text |
| `.cv-item-title` colour | `var(--text)` → `#ffffff` | Item title |
| `.cv-item-sub` colour | `var(--muted)` → `#ffffff` | Item subtitle |
| `.cv-detail-item` colour | `var(--dim)` → `#ffffff` | Detail item text |
| `.cv-detail-item::before` colour | `var(--accent)` → `#d4f04a` | Detail item bullet |
| `.cv-bullets li` colour | `var(--dim)` → `#ffffff` | Bullet item text |
| `.cv-bullets li::before` colour | `var(--accent)` → `#d4f04a` | Bullet dash |
| `.cv-header .section-sub` text-shadow | `#000` | Subtitle text stroke |
| `.download-heading-text` colour | `var(--text)` → `#ffffff` | Download heading |
| `.download-heading-text` text-shadow | `#000` | Download heading text stroke |

---

## Summary — Unique Hardcoded Colours (Non-`var()`)

These are the literal colour values used directly (not through CSS custom properties) in dark mode:

| Colour | Where |
|---|---|
| `#080809` | `.btn-primary` text, `.skip-link` text, `.back-to-top` text |
| `#111` | `.btn-primary` border |
| `#000` | Heading text-shadows, `.more-toggle` background |
| `rgba(8,8,9,0.6)` | Body gradient overlay |
| `rgba(8,8,9,0.92)` | Navbar background |
| `rgba(255,255,255,0.03)` | `.btn-outline` hover background |
| `rgba(255,255,255,0.05)` | `.nav-link` hover background |
| `rgba(255,255,255,0.3)` | `.btn-outline` hover border |
| `#ffffff` | Scrollbar thumb, `.project-count-badge--filtered` text, `.blog-tag-label` text |
| `#cccccc` | Scrollbar thumb hover |
| `#2a2a3a` | Theme toggle background |
| `#444` | Theme toggle border |
| `#ffd93d` | Theme toggle sun icon |
| `#aac` | Theme toggle moon icon |
| `#f5c542` | Theme toggle knob (default/dark) |
| `rgba(0,0,0,0.4)` | Navbar scrolled shadow, theme toggle knob shadow |
| `rgba(245,197,66,0.6)` | Theme toggle knob hover glow |
| `rgba(0,0,0,0.3)` | Mini-card box-shadow, face/tall image shadow |
| `rgba(0,0,0,0.2)` | Small image shadow |
| `rgba(0,0,0,0.55)` | Modal overlay backdrop |
| `rgba(212,240,74,0.1)` | `.blog-card` hover shadow, `.contact-item` hover shadow |
| `rgba(212,240,74,0.12)` | `.project-card:hover` accent glow |
| `rgba(212,240,74,0.25)` | `.project-card:hover` accent ring |
| `rgba(0,0,0,0.6)` | `.project-card:hover` shadow |
| `#25252a` | Blog card 1 |
| `#2a2a30` | Blog card 2 |
| `#222227` | Blog card 3 |
| `#26262c` | Blog card 4 |
| `#242429` | Blog card 5 |
| `#ff4d4d` | Skill not-found error text |
| `#111` | `.more-toggle:hover` background |

---

# Light Mode Colour Schemes

---

## Scheme 1: Warm Beige (Original)

The existing light mode — warm earthy beige with black accent.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#d4c9b3` |
| `--bg2` | `#f5f0e6` |
| `--bg3` | `#ede7db` |
| `--border` | `rgba(0,0,0,0.12)` |
| `--border2` | `rgba(0,0,0,0.2)` |
| `--text` | `#1a1a1a` |
| `--muted` | `#333333` |
| `--dim` | `#555555` |
| `--accent` | `#000000` |
| `--accent2` | `rgba(0,0,0,0.08)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#d4c9b3` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#1a1a1a` (inherits `var(--text)`) |
| `.btn-primary` border | `border-color` | `#111` (unchanged from dark) |
| `.btn-outline:hover` border | `border-color` | `rgba(255,255,255,0.3)` (unchanged) |
| `.btn-outline:hover` bg | `background` | `rgba(255,255,255,0.03)` (unchanged) |

| `.nav` background | `background` | `rgba(255,255,255,0.92)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#000000` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#000000` |
| `.nav-link` colour | `color` | `var(--muted)` → `#333333` |
| `.nav-link:hover` colour | `color` | `var(--text)` → `#1a1a1a` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#000000` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(0,0,0,0.08)` |
| Hamburger spans | `background` | `var(--text)` → `#1a1a1a` |
| Mobile nav bg | `background` | `var(--bg)` → `#d4c9b3` |

| Theme toggle bg | `background` | `#d4c9b3` |
| Theme toggle border | `border-color` | `#000` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#4a6fa5` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.15)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(74,111,165,0.5)` |

| Blog card 1 | `background` | `#f5f0e6` |
| Blog card 2 | `background` | `#f0ebe0` |
| Blog card 3 | `background` | `#ede7db` |
| Blog card 4 | `background` | `#e8e3d6` |
| Blog card 5 | `background` | `#f2ede2` |
| Blog card:hover shadow | `box-shadow` | `0 4px 12px rgba(0,0,0,0.1)` (via accent2) |

| `.project-count-badge--filtered` | `color` | `#333333` |

(All card-style elements — `.hero-card`, `.contact-item`, `.cv-block`, `.skills-block`, `.blog-outer-box`, `.skill-input-wrapper`, `.modal-content`, `.project-card` — use `background: var(--bg2)` → `#f5f0e6`, and `.project-card:hover` uses `var(--bg3)` → `#ede7db`.)

---

## Scheme 2: Clean Frost

Crisp, modern, slightly blue-tinted off-white with vivid blue accent. Clean and professional.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#f2f4f8` |
| `--bg2` | `#fafbfc` |
| `--bg3` | `#e8ecf0` |
| `--border` | `rgba(0,0,0,0.10)` |
| `--border2` | `rgba(0,0,0,0.18)` |
| `--text` | `#1a1d23` |
| `--muted` | `#414655` |
| `--dim` | `#636978` |
| `--accent` | `#2563eb` |
| `--accent2` | `rgba(37,99,235,0.10)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#f2f4f8` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#1a1d23` |
| `.btn-primary` border | `border-color` | `#111` (unchanged) |

| `.nav` background | `background` | `rgba(242,244,248,0.92)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#2563eb` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#2563eb` |
| `.nav-link` colour | `color` | `var(--muted)` → `#414655` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#2563eb` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(37,99,235,0.10)` |
| Hamburger spans | `background` | `var(--text)` → `#1a1d23` |
| Mobile nav bg | `background` | `var(--bg)` → `#f2f4f8` |

| Theme toggle bg | `background` | `#e8ecf0` |
| Theme toggle border | `border-color` | `#2563eb` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#2563eb` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.15)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(37,99,235,0.5)` |

| Blog card 1 | `background` | `#f0f3f7` |
| Blog card 2 | `background` | `#eceff4` |
| Blog card 3 | `background` | `#eef1f6` |
| Blog card 4 | `background` | `#e9edf2` |
| Blog card 5 | `background` | `#edf0f5` |

| `.project-count-badge--filtered` | `color` | `#1a1d23` |

---

## Scheme 3: Warm Glow

Sunlit, inviting cream-peach palette with amber accent. Warm and friendly.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#fdf2e5` |
| `--bg2` | `#fffaf2` |
| `--bg3` | `#f5e8d8` |
| `--border` | `rgba(0,0,0,0.10)` |
| `--border2` | `rgba(0,0,0,0.18)` |
| `--text` | `#2b1b0e` |
| `--muted` | `#5a4030` |
| `--dim` | `#7a5c4a` |
| `--accent` | `#d97706` |
| `--accent2` | `rgba(217,119,6,0.10)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#fdf2e5` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#2b1b0e` |
| `.btn-primary` border | `border-color` | `#111` (unchanged) |

| `.nav` background | `background` | `rgba(253,242,229,0.92)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#d97706` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#d97706` |
| `.nav-link` colour | `color` | `var(--muted)` → `#5a4030` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#d97706` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(217,119,6,0.10)` |
| Hamburger spans | `background` | `var(--text)` → `#2b1b0e` |
| Mobile nav bg | `background` | `var(--bg)` → `#fdf2e5` |

| Theme toggle bg | `background` | `#f5e8d8` |
| Theme toggle border | `border-color` | `#d97706` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#d97706` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.15)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(217,119,6,0.5)` |

| Blog card 1 | `background` | `#f5ede2` |
| Blog card 2 | `background` | `#f0e8dc` |
| Blog card 3 | `background` | `#f2eade` |
| Blog card 4 | `background` | `#ede5d8` |
| Blog card 5 | `background` | `#f4ece0` |

| `.project-count-badge--filtered` | `color` | `#2b1b0e` |

---

## Scheme 4: Verdant Calm

Fresh, natural sage-tinted white with emerald green accent. Soothing and organic.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#f0f5f0` |
| `--bg2` | `#f7faf7` |
| `--bg3` | `#e6ede6` |
| `--border` | `rgba(0,0,0,0.10)` |
| `--border2` | `rgba(0,0,0,0.18)` |
| `--text` | `#14241a` |
| `--muted` | `#3a5240` |
| `--dim` | `#5a7058` |
| `--accent` | `#059669` |
| `--accent2` | `rgba(5,150,105,0.10)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#f0f5f0` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#14241a` |
| `.btn-primary` border | `border-color` | `#111` (unchanged) |

| `.nav` background | `background` | `rgba(240,245,240,0.92)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#059669` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#059669` |
| `.nav-link` colour | `color` | `var(--muted)` → `#3a5240` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#059669` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(5,150,105,0.10)` |
| Hamburger spans | `background` | `var(--text)` → `#14241a` |
| Mobile nav bg | `background` | `var(--bg)` → `#f0f5f0` |

| Theme toggle bg | `background` | `#e6ede6` |
| Theme toggle border | `border-color` | `#059669` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#059669` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.15)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(5,150,105,0.5)` |

| Blog card 1 | `background` | `#eef5ee` |
| Blog card 2 | `background` | `#eaf0ea` |
| Blog card 3 | `background` | `#ebf2eb` |
| Blog card 4 | `background` | `#e8efe8` |
| Blog card 5 | `background` | `#edf3ed` |

| `.project-count-badge--filtered` | `color` | `#14241a` |

---

## Scheme 5: Rose Elegance

Sophisticated rose-tinted white with bold magenta-rose accent. Elegant and striking.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#fdf2f5` |
| `--bg2` | `#fff8fa` |
| `--bg3` | `#f5e8ed` |
| `--border` | `rgba(0,0,0,0.10)` |
| `--border2` | `rgba(0,0,0,0.18)` |
| `--text` | `#2d1b24` |
| `--muted` | `#5a3d4a` |
| `--dim` | `#7a5c68` |
| `--accent` | `#be185d` |
| `--accent2` | `rgba(190,24,93,0.10)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#fdf2f5` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#2d1b24` |
| `.btn-primary` border | `border-color` | `#111` (unchanged) |

| `.nav` background | `background` | `rgba(253,242,245,0.92)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#be185d` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.08)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#be185d` |
| `.nav-link` colour | `color` | `var(--muted)` → `#5a3d4a` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#be185d` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(190,24,93,0.10)` |
| Hamburger spans | `background` | `var(--text)` → `#2d1b24` |
| Mobile nav bg | `background` | `var(--bg)` → `#fdf2f5` |

| Theme toggle bg | `background` | `#f5e8ed` |
| Theme toggle border | `border-color` | `#be185d` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#be185d` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.15)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(190,24,93,0.5)` |

| Blog card 1 | `background` | `#f5ecf0` |
| Blog card 2 | `background` | `#f0e6ea` |
| Blog card 3 | `background` | `#f2e8ec` |
| Blog card 4 | `background` | `#ede2e6` |
| Blog card 5 | `background` | `#f4eaee` |

| `.project-count-badge--filtered` | `color` | `#2d1b24` |

---

## Scheme 6: High Contrast

Maximum readability — pure white background, pure black text, strong blue accent. Accessibility-first.

### CSS Variables

| Variable | Value |
|---|---|
| `--bg` | `#ffffff` |
| `--bg2` | `#f2f2f2` |
| `--bg3` | `#e6e6e6` |
| `--border` | `rgba(0,0,0,0.20)` |
| `--border2` | `rgba(0,0,0,0.35)` |
| `--text` | `#000000` |
| `--muted` | `#1a1a1a` |
| `--dim` | `#333333` |
| `--accent` | `#0050b3` |
| `--accent2` | `rgba(0,80,179,0.10)` |

### Overrides

| Element | Property | Value |
|---|---|---|
| `<body>` background | `background` | `var(--bg)` → `#ffffff` |
| Heading text-shadows | `text-shadow` | `none` |
| `.btn-primary` text | `color` | `#ffffff` |
| `.back-to-top` text | `color` | `#ffffff` |
| `.skip-link` text | `color` | `#000000` |
| `.btn-primary` border | `border-color` | `#111` (unchanged) |

| `.nav` background | `background` | `rgba(255,255,255,0.95)` |
| `.nav` border | `border-color` | `1px solid var(--accent)` → `#0050b3` |
| `.nav--scrolled` box-shadow | `box-shadow` | `0 4px 20px rgba(0,0,0,0.15)` |
| `.nav-logo` colour | `color` | `var(--accent)` → `#0050b3` |
| `.nav-link` colour | `color` | `var(--muted)` → `#1a1a1a` |
| `.nav-link.active` colour | `color` | `var(--accent)` → `#0050b3` |
| `.nav-link.active` bg | `background` | `var(--accent2)` → `rgba(0,80,179,0.10)` |
| Hamburger spans | `background` | `var(--text)` → `#000000` |
| Mobile nav bg | `background` | `var(--bg)` → `#ffffff` |

| Theme toggle bg | `background` | `#e6e6e6` |
| Theme toggle border | `border-color` | `#0050b3` |
| Toggle sun opacity | `opacity` | `0.3` |
| Toggle moon opacity | `opacity` | `1` |
| Toggle knob bg | `background` | `#0050b3` |
| Toggle knob shadow | `box-shadow` | `0 1px 4px rgba(0,0,0,0.2)` |
| Toggle knob hover glow | `box-shadow` | `0 0 21px rgba(0,80,179,0.5)` |

| Blog card 1 | `background` | `#f5f5f5` |
| Blog card 2 | `background` | `#f0f0f0` |
| Blog card 3 | `background` | `#f2f2f2` |
| Blog card 4 | `background` | `#ededed` |
| Blog card 5 | `background` | `#f0f0f0` |

| `.project-count-badge--filtered` | `color` | `#000000` |

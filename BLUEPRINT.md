# BLUEPRINT.md - M2AI Website UI Redesign

## Overview
Redesign key visual components of the M2AI website using 21st.dev community components.

## Changes Summary
1. **Hero Carousel** → Scroll Morph Hero (scroll-triggered morphing image animations)
2. **Background** → Shape Landing Hero (animated geometric shapes with gradients)
3. **Claude Skills Carousel** → Circular Testimonials (3D perspective carousel)

---

## Phase 1: Install Dependencies
- [x] Add `framer-motion` (required by all three components)
- [x] Add `react-icons` (required for circular testimonials arrows)
- [x] Add `clsx` and `tailwind-merge` (for cn() utility)
- [x] Create `lib/utils.ts` with `cn()` helper function

---

## Phase 2: Background - Shape Landing Hero
- [x] Create `components/ui/ElegantShape.tsx` - Animated gradient orb component
- [x] Create `components/ui/ShapesBackground.tsx` - Background layer with floating shapes
- [x] Integrate into `App.tsx` as fixed/absolute background layer
- [x] Adjust color palette (indigo/rose/violet → teal/orange/navy to match brand)

---

## Phase 3: Hero Section - Scroll Morph Hero
- [x] Create `components/ScrollMorphHero.tsx` - New hero component
- [x] Implement scatter → line → circle → arc morph phases
- [x] Use existing `CAROUSEL_IMAGES` data from constants.ts
- [x] Add virtual scroll handling with wheel/touch events
- [x] Integrate hover tooltips and click-to-scroll navigation
- [x] Replace `Carousel.tsx` usage in `App.tsx`
- [x] Keep CTA buttons (Self-Serve AI Audit, Contact Us) in center

---

## Phase 4: Claude Skills - Circular Testimonials Carousel
- [x] Create `components/ui/CircularCarousel.tsx` - 3D perspective carousel
- [x] Adapt for skills data (not testimonials) - show icon, title, description
- [x] Update `ClaudeSkillsSection.tsx` to use new carousel
- [x] Implement autoplay, keyboard navigation, word animations
- [x] Style arrows and navigation to match brand colors

---

## Phase 5: Polish & Integration
- [ ] Ensure responsive behavior on mobile (all three components)
- [ ] Test scroll interactions don't conflict
- [x] Update CSS for new animation keyframes if needed
- [ ] Verify all section navigation still works
- [ ] Performance check (framer-motion bundle size)

---

## Dependencies Added
```json
{
  "framer-motion": "^11.x",
  "react-icons": "^5.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

## Files Created
- `lib/utils.ts` - cn() utility
- `components/ui/ElegantShape.tsx`
- `components/ui/ShapesBackground.tsx`
- `components/ScrollMorphHero.tsx`
- `components/ui/CircularCarousel.tsx`

## Files Modified
- `package.json` - Add dependencies
- `App.tsx` - Replace Carousel, add background
- `ClaudeSkillsSection.tsx` - Use new carousel
- `src/index.css` - Added 3D CSS utilities

## Color Mapping (21st.dev defaults → M2AI brand)
- indigo → navy (#0b0b13)
- rose → orange (#e65100)
- violet → teal (#14b8a6)
- Keep cyan/amber as accents

---

## Risk Considerations
- Scroll Morph Hero manages its own virtual scroll - may need adjustment to work with page scroll
- Framer Motion adds ~50KB to bundle - acceptable for animation quality
- 3D transforms need `perspective` and `transform-style: preserve-3d`

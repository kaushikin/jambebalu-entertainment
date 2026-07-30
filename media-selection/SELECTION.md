# Hard disk media selection — Jambe Balu Entertainment

**Source disk:** `/Volumes/9844533344` (~283 GB used)  
**Scanned:** ~5,761 photos + ~1,310 videos  
**Date:** 2026-07-31

## Important reality check

This hard disk is **real event coverage** from Jambe Balu jobs, mostly:

- Community / political stage shows (LED walls, podiums)
- Corporate / officers-club receptions (BEL)
- Outdoor lawn events, Holi, cultural folk bands
- Night lighting / décor arches
- Drone + candid cinema raw

It is **not** a folder of luxury stock wedding photos. Replacing the current website stock images with these will make the site **more authentic** (real work) but the look will shift toward **stage production, cultural & corporate events**.

---

## What to use on the website (recommended)

Web-compressed copies are ready in:

`media-selection/recommended-images/`

| Website slot | File | Source on hard disk | Why |
|---|---|---|---|
| **Hero** | `hero_outdoor_setup.jpg` | `18-03-2006-balu/BKR02255.JPG` | Full outdoor stage + seating + production setup |
| **Decor / private party** | `decor_string_lights.jpg` | `18-03-2006-balu/BKR02271.JPG` | Night outdoor tables + fairy lights |
| **Concerts / stage** | `stage_led_performer.jpg` | `29-11-2025-balu/DSC09102.JPG` | Live singer + big LED wall |
| **LED / technical** | `led_dance_stage.jpg` | `08-03-2026 bel/188_PANA/P1883791.JPG` | LED wall + dance production |
| **Private parties** | `holi_party_crowd.jpg` | `08-03-2026 bel/188_PANA/P1883961.JPG` | Energy, crowd, lights |
| **Private / guests** | `private_party_guests.jpg` | `10-01-2026-balu/DSC01174.JPG` | Formal guests, night décor |
| **Cultural / entertainment** | `cultural_folk_entrance.jpg` | `29-11-2025-balu/DSC09148.JPG` | Folk band + entrance set (BEL event) |
| **Corporate** | `corporate_red_carpet.jpg` | `13-02-2026 BALU/02/RLB00072.JPG` | VIP / formal arrival |
| **Corporate / LED** | `led_wall_conference.jpg` | `08-02-2026 BALU/DAF_1131.JPG` | Conference seating + LED wall |
| **Decoration** | `lighting_arch_decor.jpg` | `30-12-2025 BALU/PHOTOS-1/SAR_0642.JPG` | Lighting arch entrance |
| **Stage production** | `stage_led_production.jpg` | `06-12-2025BALU/02/BKR05990.JPG` | Full LED stage production |
| **Gallery extra** | `red_carpet_lighting.jpg` | `18-03-2006-balu/BKR02288.JPG` | Red carpet + string lights |

### Folder quality ranking (where gold lives)

| Priority | Folder | Notes |
|---|---|---|
| ★★★ | `18-03-2006-balu` | Clean outdoor setup shots (small set, high usefulness) |
| ★★★ | `29-11-2025-balu` | Stage + LED + cultural performances |
| ★★★ | `08-03-2026 bel` | LED dance, Holi party energy |
| ★★ | `30-12-2025 BALU/PHOTOS-1` | Lighting décor, guests |
| ★★ | `10-01-2026-balu` | Night formal guests |
| ★★ | `08-02-2026 BALU` | LED / public stage (more political branding) |
| ★★ | `06-12-2025BALU` | Stage + drone (HECAM) |
| ★ | `13-02-2026 BALU` | Formal corporate arrivals |
| ★ | `BEL RECEPTION 22-03-2026` | **Videos only** (good short clips) |
| ★ | `DRONE` / `HECAM` | Aerials — only if they show **the event**, not empty city |

---

## What to skip (junk / not website-ready)

| Skip | Why |
|---|---|
| `30-12-2025 BALU/VIDEO/**` 2–6 GB files | Cinema raw — will break hosting |
| `Candid Video/PRIVATE/M4ROOT` | Camera raw dumps |
| Random group photos only (no stage/decor) | Weak marketing value |
| Political banners alone | Not “event production” showcase |
| `DRONE` pure cityscape (no event) | Not on-brand |
| Every photo from every folder | ~5,700 images; site needs ~12–24 |

---

## Videos strategy (important)

**Do not** dump the hard disk videos into the website repo.

| Approach | Recommendation |
|---|---|
| **Best** | Keep current **YouTube embeds** (`@Jambe_Balu`) for full shows |
| **Optional** | Compress **3–6 short clips** (720p, 3–8 MB) for a silent hero loop or gallery |
| **Never** | Upload 100 MB–6 GB files to GitHub/Vercel |

Shortlist paths: see `VIDEO_SHORTLIST.txt`

---

## Suggested website mapping

| Current site image | Replace with |
|---|---|
| `hero_stage_crowd.jpg` | `hero_outdoor_setup.jpg` or `stage_led_performer.jpg` |
| `wedding_stage_couple.jpg` | `private_party_guests.jpg` or `cultural_folk_entrance.jpg` *(no classic wedding couple on this disk)* |
| `corporate_conference.jpg` | `led_wall_conference.jpg` / `corporate_red_carpet.jpg` |
| `private_party_crowd.jpg` | `holi_party_crowd.jpg` |
| `dj_crowd.jpg` | `led_dance_stage.jpg` |
| `led_wall_lights.jpg` | `stage_led_production.jpg` |
| `decor_tablescape.jpg` | `decor_string_lights.jpg` / `lighting_arch_decor.jpg` |
| `exhibition_hall.jpg` | `cultural_folk_entrance.jpg` |
| Keep | `Owner of Jambe Balu.jpg` (unless client gives a better portrait) |

---

## Next step (when you say go)

1. Copy recommended images into `public/images/` with site filenames  
2. Update `App.tsx` gallery/services paths if names change  
3. Optionally compress 2–3 short videos and add a hero background loop  
4. Deploy  

**Note:** There are almost **no luxury wedding couple** photos on this disk. If the client wants that service image, keep stock wedding art **or** ask them for wedding albums separately.

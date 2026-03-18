# Lasthire.ai - Affiliate Automation Platform

## Project Overview

**Name:** Lasthire.ai  
**Purpose:** Automated affiliate marketing platform for businesses and brands  
**Core Functionality:** Research products, create content, manage affiliate links, track performance, automate posting to Pinterest  
**Target Users:** Content creators, marketers, brands wanting to do affiliate marketing

---

## Conversation Summary (What We Built)

### Phase 1: Island Splash (Initial Idea)
- Started as a beverage brand creative tool
- Pivot needed: focus on affiliate marketing instead

### Phase 2: Beach Affiliate Studio
- Added affiliate link management
- Beach/tropical niche
- Researched beach affiliate programs

### Phase 3: Home Decor Pivot (Manus Research)
- Home Decor is #1 niche for Pinterest (high engagement, high AOV)
- Programs: Wayfair (7%), Amazon (1-10%), LTK, One Kings Lane (12%), etc.
- Strategy: High-ticket items = big commissions

### Phase 4: Lasthire.ai
- Complete web app with:
  - Dashboard
  - Create Pins
  - Products (research high-ticket items)
  - Affiliates (manage links)
  - Templates
  - Analytics
  - Guide (how-to-use)
- The Library (skills system for automation)
- Deployed to Vercel: https://lasthire-ai.vercel.app
- GitHub: https://github.com/Pu11en/lasthire-ai

### Phase 5: Manual First Strategy
- Test manually first, then automate
- 7-day sprint plan
- Apply to programs → Create pins → Post → Track → Automate

---

## Key Learnings from Conversation

### What Works for Pinterest Affiliate
1. **Niche:** Home Decor (highest earning potential)
2. **Products:** High-ticket ($300+) = real money
3. **Content:** Pinterest is a SEARCH ENGINE (SEO approach)
4. **Strategy:** Links go to landing page, not directly in pins
5. **Volume:** 10-15 pins/day minimum

### Top Affiliate Programs
| Program | Commission | Cookie |
|---------|-----------|--------|
| Amazon Associates | 1-10% | 24hr |
| Wayfair | 7% | 14 days |
| LTK | varies | 30 days |
| One Kings Lane | 12% | 30 days |
| Designer Living | 12% | 30 days |
| Burrow | 10% | 30 days |

### Mistakes to Avoid
- Direct affiliate links in pins (shadowban)
- Promoting cheap products (low commissions)
- No landing page/email list
- Posting infrequently

---

## Agent Automation Spec

### Core Agents Needed

#### 1. Research Agent
**Purpose:** Find high-ticket products to promote

**Capabilities:**
- Search affiliate networks for trending products
- Filter by price ($200+), commission (7%+), saves on Pinterest
- Analyze competitor listings
- Identify trending keywords

**Commands:**
- "Find me [niche] products over $300"
- "What's trending for [keyword]?"
- "Analyze competitor @username"

---

#### 2. Content Agent
**Purpose:** Generate pin ideas and descriptions

**Capabilities:**
- Generate pin titles (SEO-optimized)
- Write descriptions with keywords
- Create captions for Pinterest
- Suggest board names

**Pin Formulas That Work:**
1. "[Product] Under $[Price]"
2. "[Room] Makeover on a Budget"
3. "[Problem]? Here's What Works"
4. "[Number] [Items] That Transform Your [Room]"
5. "[Room] Before and After"

**Keywords That Convert:**
- "Under $X" (budget)
- "DIY" (improvement)
- "Minimalist" (aesthetic)
- "On a Budget" (price-sensitive)
- "Ideas" (planning)
- "Makeover" (transformation)

**Commands:**
- "Give me 10 pin ideas for [product]"
- "Write description for [product]"
- "Generate captions for [niche]"

---

#### 3. Affiliate Manager Agent
**Purpose:** Manage affiliate programs and links

**Capabilities:**
- Apply to affiliate programs automatically
- Track application status
- Manage affiliate links
- Monitor earnings

**Commands:**
- "Apply to [program]"
- "Check status of [program]"
- "Add affiliate link [URL]"
- "List all my affiliate programs"

---

#### 4. Analytics Agent
**Purpose:** Track and optimize performance

**Capabilities:**
- Monitor clicks, saves, earnings
- Identify top-performing pins
- Generate reports
- Recommend optimizations

**Metrics That Matter:**
- Clicks (direct traffic)
- Saves (intent to buy)
- Repins (organic reach)
- Earnings (money)
- CTR (conversion)

**Commands:**
- "How did my pins do this week?"
- "Which pins are converting best?"
- "Give me a performance report"

---

#### 5. Posting Agent
**Purpose:** Automate pinning to Pinterest

**Capabilities:**
- Schedule pins
- Post to multiple boards
- Rotate content
- Optimize timing

**Commands:**
- "Schedule 20 pins for [niche]"
- "Post to [board1], [board2]"
- "Best time to post?"

---

## Tech Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend (Future)
- Database (PostgreSQL/Supabase)
- Authentication
- Pinterest API integration
- Affiliate network APIs

### Deployment
- Vercel

---

## Implementation Priority

### Phase 1 (Manual → Automation)
1. ✅ Web app with guide
2. ⏳ Research agent
3. ⏳ Content agent
4. ⏳ Affiliate manager

### Phase 2 (Automation)
5. ⏳ Analytics agent
6. ⏳ Posting agent
7. ⏳ Full automation

---

## Success Metrics

| Metric | Target (Month 1) | Target (Month 3) |
|--------|-----------------|-------------------|
| Affiliate Programs | 3 approved | 10+ |
| Products Promoted | 20 | 100+ |
| Pins Created | 500 | 2000+ |
| Pinterest Followers | 100 | 1000+ |
| Clicks | 1000 | 10000+ |
| Earnings | $100 | $1000+ |

---

## Notes

- Always test manually before automating
- Focus on high-ticket items
- Pinterest = search engine, not social media
- Build email list for long-term success
- The ceiling is in combining Pinterest → Blog → Email → Repeat

---

*Last Updated: March 18, 2026*

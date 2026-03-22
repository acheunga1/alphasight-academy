# Workflow: AI Training Topic Vote

## Objective
Allow training participants to vote on which AI topics they want to learn, and surface the top 8 as the session agenda.

## Inputs Required
- Participant name (free text)
- Session access (open URL — no login needed)

## How It Works

### Player Flow
1. Open `topic-vote.html` in browser
2. Enter name → click **Join as Player**
3. See 20 AI training topics displayed as a grid
4. Select exactly **8 topics**
5. Click **Submit Votes**
6. Confirmation screen shows your 8 picks

### Host Flow
1. Open `topic-vote.html` → click **Host Screen** (no name needed)
2. See live results: all 20 topics ranked by vote count
3. Top 8 highlighted in gold = today's agenda
4. Agenda panel shows ranked list ready to present
5. Use **Reset All** to clear votes for a new session

## Multiplayer Testing (Same Device)
- Open multiple browser tabs
- Each tab = one participant
- Votes sync via localStorage + storage event
- Host tab auto-refreshes every 2 seconds

## Topics List (20)
1. Introduction to AI & Machine Learning
2. Prompt Engineering Basics
3. ChatGPT & Large Language Models
4. AI Tools for Daily Productivity
5. AI in Marketing & Content Creation
6. AI for Data Analysis & Insights
7. AI Ethics & Responsible Use
8. Building AI Workflows & Automation
9. AI for Customer Service
10. AI Strategy for Organizations
11. No-Code AI Tools
12. AI in Sales & CRM
13. AI in Finance & Accounting
14. AI in HR & Recruitment
15. AI for Presentations & Documents
16. Computer Vision & Image AI
17. Voice AI & Speech Technology
18. AI Security & Risk Management
19. AI for Research & Summarization
20. Future of AI & Emerging Trends

## Edge Cases
- Player tries to select more than 8 → extra options disabled until one is deselected
- Player revisits page → shows already-submitted state (prevents double voting)
- No votes yet → host agenda panel shows "Waiting for votes..."
- Reset clears localStorage — all votes wiped, fresh session starts

## Future Upgrades
- Replace localStorage with Firebase Realtime Database for true cross-device multiplayer
- Add session/room codes so multiple simultaneous sessions can run
- Add timer countdown for voting window
- Export top 8 agenda to PDF or Google Slides

# E-Bike Rider Safety App

A single-page web app for e-bike riders featuring:

- **State regulations selector** for all 50 U.S. states + DC (Class system, path access, helmet rules, age limits, license/registration, notes)
- **Park & street rules** overview (roads, sidewalks, multi-use paths, National Parks, BLM/Forest Service, local overrides)
- **E-bike Class 1 / 2 / 3 explainers** with custom SVG vector graphics
- **Safety equipment recommendations** (helmet, lights, mirror, reflective gear, gloves, bell) with Amazon search links
- **Amazon Affiliate / FTC disclosure** (“As an Amazon Associate I earn from qualifying purchases.”)

## Live / Local Use

Open `index.html` in any modern browser. Fully self-contained — no build step or external dependencies.

After the first successful deploy, the site will also be available via **GitHub Pages** at:

`https://jasonjnelson.github.io/ebike-safety-app/`

(Enable Pages in repo Settings → Pages if the automatic deploy does not appear after the first run.)

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci-cd.yml`):

| Job | Trigger | What it does |
|-----|---------|--------------|
| **Validate** | Push & PR to `main` | Checks HTML structure, required sections (state selector, class explainers, park/street rules, safety gear, Amazon disclaimer), and file size |
| **Deploy** | Push to `main` only | Deploys the static site to GitHub Pages after validation passes |

You can also run the workflow manually via the **Actions** tab → CI/CD → Run workflow.

## Data Note

Regulations summarized from public 2026 sources (state vehicle codes, Ebike Oracle, eBikeLocal, PeopleForBikes trackers). Laws change and local rules can be stricter — always verify with official state DOT/DMV and land managers.

## License

Educational / personal use. Not legal advice.

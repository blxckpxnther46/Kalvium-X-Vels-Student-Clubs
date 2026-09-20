# Kalvium × Vels Student Clubs Handbook & Self-Hosted Web Application

![Kalvium Student Clubs Banner](assets/kalvium-student-clubs-banner.png)

This repository contains both the official operating documentation for the **Kalvium × Vels Student Clubs** ecosystem and the complete source code for hosting the web portal using **Docusaurus v3**.

---

## Site Assets & Branding

- **Banner Graphic**: `static/img/banner.png` (landscape banner displayed at top of landing page)
- **Title Logo**: `static/img/logo.png` (horizontal branding lockup displayed in header navbar)
- **Site Icon**: `static/img/icon.png` (squared icon used for browser tab favicon)

---

## Quick Start (Local Development)

To run the documentation site locally on your computer with live reload:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm start
```

Open your browser and navigate to `http://localhost:3000`.

---

## Production Build & Self-Hosting

### Option 1: Local Production Server (`npm run serve`)

To test the optimized production build on your local machine or server:

```bash
# Generate production static files in the build/ directory
npm run build

# Serve the production build locally
npm run serve
```

### Option 2: Deploy to GitHub Pages

Deploy the website directly to GitHub Pages:

```bash
# Set your GitHub user and deploy
GIT_USER=<your-github-username> npm run deploy
```

Or configure a standard GitHub Action that builds `npm run build` and deploys the generated `build/` folder to the `gh-pages` branch.

### Option 3: Deploy to Vercel / Netlify / Render

1. Connect your repository to **Vercel**, **Netlify**, or **Render**.
2. Set the build parameters:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Node.js Version**: `18.x` or `20.x` or higher
3. Deploy!

### Option 4: Deploying to Nginx / Web Server

If hosting on a Linux server (Ubuntu/Debian) running Nginx:

1. Run `npm run build` locally or on CI/CD.
2. Copy the contents of the `build/` directory to your web root (e.g., `/var/www/kalvium-clubs`).
3. Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name clubs.yourdomain.com;

    root /var/www/kalvium-clubs;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Option 5: Containerized Deployment (Docker)

To run as a lightweight container using Nginx:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Documentation Structure

The documentation source files are located in `docs/`:

- `docs/intro.md`: Welcome & Ecosystem Overview
- `docs/01-introduction/`: Introduction & Student Growth Pillars
- `docs/02-club-ecosystem/`: 2D & 3D, Social Media, Abstract Strategies, Debate & Public Speaking, Inter-Club Collaboration
- `docs/03-operations/`: Student Club Operations Team & Campus Coordination
- `docs/04-club-leadership/`: Leadership Structure, Roles, Deliverables, Weekly/Monthly Reporting
- `docs/05-membership/`: Joining, Club Cycles, One-Club Policy, Club Switching Protocol
- `docs/06-mentorship/`: Faculty Mentorship Role & Support Model
- `docs/07-scheduling-activities/`: Growth Hours Schedule & Showcase Day
- `docs/08-guidelines/`: Code of Conduct & Governance Guidelines
- `docs/09-documentation/`: Project Archives & Documentation

Sidebar navigation is configured in `sidebars.js`. Site layout and branding are configured in `docusaurus.config.js`.

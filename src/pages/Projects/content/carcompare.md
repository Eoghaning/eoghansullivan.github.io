---
title: CarCompare
subtitle: Full-Stack Car Comparison Platform
desc: Browse 90+ cars, filter by multiple criteria, and compare 2–4 vehicles side-by-side with interactive cost projections and spec comparison tables.
tags:
  - Python
  - JavaScript
  - TypeScript
  - Django
  - React
  - HTML/CSS
  - Tailwind CSS
  - Recharts
  - Matplotlib
  - Vite
  - SQL
  - SQLite
  - JSON
  - Docker
  - Git
  - GitHub
  - RESTful API Design
  - Full-Stack Web Development
  - UI/UX Design
  - Testing
  - Agile
  - Problem Solving
  - Leadership
  - Teamwork
detail: 90+ vehicles · 29-field data model
type: main
links:
  GitLab Repo: https://gitlab.computing.dcu.ie/kella337/carcompare
---

Full-stack car comparison platform that lets users browse a catalog of 90+ cars, filter by multiple criteria, and compare 2–4 vehicles side-by-side — covering costs, specs, fuel types, grant eligibility, and cumulative ownership projections.

![CarCompare comparison page](CarCompare2.png)

Built with a **Django** backend and **React** frontend, featuring computed cost analytics and interactive visualizations.

**Architecture:**

The system is built as a two-tier application:

- **Python Backend (Django)** — RESTful API serving car inventory with dynamic filtering (fuel type, brand, model, transmission, body type, grant eligibility). Automated cost computation — annual energy costs derived from fuel efficiency (petrol/diesel/electricity prices) and annual mileage; maintenance estimates based on fuel type. Matplotlib-powered chart generation for backend-side comparison views. 29-field car model covering powertrain, performance, efficiency, emissions, costs, and grants. Management command to load 90+ cars from both structured JSON and hardcoded data.

- **Frontend Interface (React + Vite + Tailwind CSS)** — Browser-based car browsing with responsive card grid, sidebar filters, and sorting options. Live cost comparison chart (Recharts LineChart) showing cumulative costs over user-selectable 3/5/10 year periods. Toggleable cost components — vehicle price, fuel cost, motor tax, and maintenance — all updating the chart instantly. Full specification comparison table for selected vehicles. Matplotlib chart viewer for backend-generated PNG comparisons. SEAI (Irish) grant eligibility badges and amounts.

**Key Features:**

- **90+ Vehicles** — Electric, Plug-in Hybrid, Hybrid, Petrol, and Diesel, sourced from major brands (Tesla, BMW, Volkswagen, Toyota, Hyundai, Kia, Audi, Mercedes, Volvo, Ford, Polestar, Renault)
- **Multi-Criteria Filtering** — Fuel type, car type, brand, model, transmission, and grant eligibility
- **Cost Comparison** — Cumulative cost projections over 3, 5, or 10 years with interactive toggle controls for price, fuel, tax, and maintenance
- **Spec Comparison Table** — Side-by-side specs including price, range, CO₂, annual energy cost, motor tax, maintenance, and grant info
- **SEAI Grant Awareness** — Dedicated badge system and grant amount display for eligible electric and plug-in hybrid vehicles
- **Backend Charts** — Matplotlib-generated bar charts comparing any metric across filtered vehicles
- **Docker Deployment** — Fully containerized for cross-platform reproducibility

**Technologies:** Django, React, Vite, Tailwind CSS, Recharts, Matplotlib, SQLite, Docker

**Dataset:** Ships with a curated dataset of 90+ vehicles covering the Irish and European markets — sourced from structured JSON with detailed specs covering powertrain, performance, efficiency, emissions, costs, and grants.

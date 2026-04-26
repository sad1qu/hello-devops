hello-devops

> Dockerized Node.js application with CI pipeline using GitHub Actions

## Live Demo
https://hello-devops-5sak.onrender.com

---

## About

This project started as a simple Node.js (Express) application and evolved into a DevOps-oriented project.

It demonstrates how to:
- Containerize an application using Docker
- Build Docker images automatically using GitHub Actions (CI)
- Deploy and run the application in a cloud environment (Render)
- Work with AWS EC2 (manual setup and configuration)

---

## Architecture

- Node.js (Express) application
- Docker containerization
- GitHub Actions (CI pipeline)
- AWS EC2 (manual configuration)
- Render (application hosting)

---

## CI Pipeline

The project uses GitHub Actions to:

- Build Docker image on push to `main`
- Verify that the application builds correctly

---

## Tech Stack

- Node.js
- Express
- Docker
- GitHub Actions
- AWS EC2
- Render

---

## Run locally

```bash
git clone https://github.com/sad1qu/hello-devops.git
cd hello-devops

npm install
npm start

App runs on:
http://localhost:3000

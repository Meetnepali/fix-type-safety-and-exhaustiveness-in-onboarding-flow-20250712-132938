#!/bin/sh
set -e
echo "[install.sh] Installing dependencies and building Docker image..."
docker build -t onboarding-wizard .
echo "[install.sh] Build completed. Starting container..."
docker run -d --name onboarding-wizard -p 3000:3000 onboarding-wizard > /dev/null
echo "[install.sh] Container started at http://localhost:3000."

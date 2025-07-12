#!/bin/sh
set -e
./install.sh
if [ $? -eq 0 ]; then
  echo "[run.sh] Onboarding Wizard running at: http://localhost:3000"
else
  echo "[run.sh] Error starting the Onboarding Wizard."
  exit 1
fi

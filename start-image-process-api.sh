#!/bin/bash
# Start image-process FastAPI service (foreground, uses its own venv)
cd image-process
source .venv/bin/activate
uvicorn api:app --host 0.0.0.0 --port 3001 --workers 4

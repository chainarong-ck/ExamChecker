#!/bin/bash
# Start file-storage FastAPI service (foreground, uses its own venv)
cd file-storage
source .venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 3002 --workers 4

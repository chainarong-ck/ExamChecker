#!/bin/bash
# Start Celery worker for image-process (foreground, uses its own venv)
cd image-process
source .venv/bin/activate
celery -A tasks.celery_app worker --loglevel=info

#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    source .env
fi

# Run ngrok in the background and then run the Next.js dev server on port 3001
ngrok start --all --config ngrok.yml &
NGROK_PID=$!

# Give ngrok a moment to start up
sleep 2

# Run Next.js dev server
PORT=3001 yarn dev

# Clean up ngrok when the script is terminated
trap "kill $NGROK_PID" EXIT

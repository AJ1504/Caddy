# Use official Python image
FROM python:3.10-slim

# Set workdir
WORKDIR /app

# Copy backend files
COPY ./backend /app/backend

# Install dependencies
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

# Expose port
EXPOSE 8000

# Command to run the app
CMD ["uvicorn", "backend.api.main:app", "--host", "0.0.0.0", "--port", "8000"]

 Streamoo
===========

**Streamoo** is a full-featured video streaming platform with a microservice architecture. Built using a React frontend and an Express backend, it leverages Docker for containerization and is deployed on DigitalOcean with Cloudflare DNS and HTTPS support.

📚 Table of Contents
--------------------

-   [📂 Project Structure](#-project-structure)
-   [✨ Features](#-features)
-   [⚙️ Prerequisites](#%EF%B8%8F-prerequisites)
-   [📥 Installation](#-installation)
-   [🔑 Environment Variables](#-environment-variables)
-   [🚀 Usage](#-usage)
-   [📁 API Endpoints](#-api-endpoints)
-   [🔧 Technologies Used](#-technologies-used)
-   [📜 License](#-license)

📂 Project Structure
--------------------

```
streamoo/
├── backend/
│   ├── controller/        # Contains controllers for managing app logic
│   ├── db/                # MongoDB configuration and models
│   ├── middleware/        # Middleware for file handling (e.g., multer)
│   ├── public/            # Static files and videos
│   ├── routes/            # API routes for backend
│   ├── .dockerignore
│   ├── .env
│   ├── app.js             # Express app entry point
│   ├── Dockerfile
│   └── vercel.json
└── frontend/
    ├── src/
    │   ├── components/    # React components (Movies, VideoPlayerCard, etc.)
    │   ├── configs/       # Configuration for routes and authentication
    │   ├── pages/         # App's main pages
    ├── .dockerignore
    ├── .env
    ├── Dockerfile
    ├── tailwind.config.js # Tailwind CSS config
    └── README.md
```

✨ Features
----------

-   **🔒 User Authentication:** Secure login and registration.
-   **📂 Video Upload & Processing:** Users can upload video files, which are processed and stored.
-   **🖥️ HLS Streaming:** Converts videos to HLS format for smooth streaming.
-   **⚙️ Microservices Architecture:** Frontend and backend are organized as separate services.
-   **🚀 Deployment with Docker & DigitalOcean:** Easy deployment using Docker and DigitalOcean.
-   **🔐 HTTPS with Cloudflare SSL:** Secure your website with Cloudflare DNS and SSL.

⚙️ Prerequisites
----------------

-   **🖥️ Node.js** - v14+
-   **🐋 Docker** - v20+
-   **📦 MongoDB** - v4+
-   **🌐 Cloudflare Account** - For DNS and SSL setup

📥 Installation
---------------

1.  **Clone the repository**

    bash

    Copy code

    ```
    git clone https://github.com/yourusername/streamoo.git
    cd streamoo
    ```

2.  **Set up environment variables**

    -   Refer to the [Environment Variables](#-environment-variables) section and create `.env` files in both the backend and frontend directories.
3.  **Build and run Docker containers**

    bash

    Copy code

    `docker-compose up --build`

4.  **Access the application**

    -   Frontend: `http://localhost:5173`
    -   Backend API: `http://localhost:3000`

🔑 Environment Variables
------------------------

### 🌍 Global Variables (Docker Compose)

plaintext

Copy code

```
MONGOUSER=root
MONGOPASS=root
MONGODBPORT=27017
MONGOEXPPORT=8081
BACKENDPORT=3000
FRONTENDPORT=5173
```

### 🖥️ Frontend `.env`

plaintext

Copy code

`VITE_MOVIE_UPLOAD_URL=http://localhost:3000`

### 🗄️ Backend `.env`

plaintext

Copy code

```
MONGODB_URI=mongodb://root:root@mongodb:27017/streamoo?authSource=admin
MOVIE_UPLOAD_URL=http://localhost:3000
```

🚀 Usage
--------

1.  **Run Docker Compose**

    bash

    Copy code

    `docker-compose up`

2.  **Access the Application**:

    -   **Frontend** at `http://localhost:5173`
    -   **Backend** at `http://localhost:3000`
3.  **Upload a Video**:

    -   Use the video upload form in the frontend, which interacts with the backend at `VITE_MOVIE_UPLOAD_URL`.

📁 API Endpoints
----------------

### 🎥 Movie API

-   **POST /api/movieData** - Upload a new movie
    -   **Fields**: `movieName`, `movieGenres`, `movieDescription`, `movieThumbnail`, `movieCaste`, `movieURL`
-   **GET /api/movies** - Fetch all movies

### 🖼️ Thumbnail API

-   **POST /api/thumbnail** - Upload a movie thumbnail
    -   **Fields**: `movieThumbnail`

### 🗂️ Additional Endpoints

-   **/api/auth/register** - Register a new user
-   **/api/auth/login** - User login

🔧 Technologies Used
--------------------

| Technology | Purpose |
| --- | --- |
| **React** | Frontend Framework |
| **Express** | Backend Framework |
| **MongoDB** | Database |
| **Multer** | File handling middleware |
| **Docker** | Containerization |
| **ffmpeg** | Video processing |
| **Cloudflare** | DNS and SSL |
| **DigitalOcean** | Hosting platform |

📜 License
----------

This project is licensed under the MIT License. See LICENSE for more information.

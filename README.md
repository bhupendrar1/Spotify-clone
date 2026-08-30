# 🎵 Spotify Backend

A **RESTful backend API for a Spotify-inspired music streaming application**, built using **Node.js, Express.js, and MongoDB**.

This backend handles **user authentication, music and album management, image/file uploads, protected routes, and database operations**. It is designed to work with a separate frontend application.

---

## 🚀 Features

* 🔐 User Registration & Login
* 🔑 JWT-based Authentication
* 🍪 Authentication using HTTP Cookies
* 🔒 Protected API Routes
* 🎵 Music Management
* 💿 Album Management
* 👤 User Management
* 🖼️ Image & File Upload
* ☁️ ImageKit Cloud Storage Integration
* 🗄️ MongoDB Database Integration
* 🔐 Password Hashing using bcryptjs
* 📦 RESTful API Architecture
* 🌱 Environment Variable Configuration

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Multer
* ImageKit

### Packages

```json
{
  "bcryptjs": "Password hashing",
  "cookie-parser": "Cookie handling",
  "dotenv": "Environment variables",
  "express": "Backend framework",
  "jsonwebtoken": "JWT authentication",
  "mongoose": "MongoDB ODM",
  "multer": "File uploads"
}
```

---

## 📁 Project Structure

```text
spotify-backend/
│
├── controllers/
│   ├── auth.controller.js
│   └── music.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   ├── album.model.js
│   ├── music.model.js
│   └── user.model.js
│
├── routes/
│   ├── auth.routes.js
│   └── music.routes.js
│
├── services/
│   └── storage.services.js
│
├── db.js
├── app.js
├── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🧩 Folder & File Explanation

### `controllers/`

Contains the main business logic for API requests.

#### `auth.controller.js`

Handles authentication-related operations such as:

* User registration
* User login
* Password verification
* JWT generation
* Authentication cookies

#### `music.controller.js`

Handles music and album-related operations such as:

* Adding music
* Fetching music
* Managing albums
* Handling uploaded music/image files

---

### `middleware/`

#### `auth.middleware.js`

Protects private routes by:

1. Reading the authentication token.
2. Verifying the JWT.
3. Identifying the authenticated user.
4. Allowing access to protected controllers.

Example flow:

```text
Client Request
      ↓
auth.middleware.js
      ↓
JWT Verification
      ↓
Authenticated User
      ↓
Controller
```

---

### `models/`

Contains MongoDB schemas created using Mongoose.

#### `user.model.js`

Stores user information such as:

* Name
* Email
* Password
* User-related information

Passwords should be stored in hashed form using `bcryptjs`.

#### `music.model.js`

Stores information related to songs/music.

Typical information includes:

* Song title
* Artist
* Audio URL
* Cover image
* Album information

#### `album.model.js`

Stores album-related information such as:

* Album title
* Cover image
* Songs
* Artist information

---

### `routes/`

Defines API endpoints.

#### `auth.routes.js`

Contains authentication endpoints such as:

```text
POST /register
POST /login
POST /logout
```

#### `music.routes.js`

Contains music and album-related endpoints.

Example operations:

```text
POST   /music
GET    /music
POST   /album
GET    /album
```

> Exact endpoints depend on the implementation of your project.

---

### `services/`

#### `storage.services.js`

Responsible for handling cloud storage operations.

The project uses **ImageKit** for storing and retrieving uploaded images/files.

Typical flow:

```text
Client
  ↓
Multer
  ↓
File Buffer
  ↓
Storage Service
  ↓
ImageKit
  ↓
Cloud URL
```

---

## 🔐 Authentication Flow

The backend uses **JWT (JSON Web Token)** for authentication.

```text
User
 ↓
Register / Login
 ↓
Server validates credentials
 ↓
Password verified using bcryptjs
 ↓
JWT generated
 ↓
JWT stored in Cookie
 ↓
Protected Request
 ↓
auth.middleware.js
 ↓
JWT Verification
 ↓
Access Granted
```

---

## 🗄️ Database

The project uses **MongoDB** as the database and **Mongoose** as the ODM.

The database connection is handled through:

```text
db.js
```

Basic architecture:

```text
Express Server
      ↓
   Mongoose
      ↓
   MongoDB
      ↓
 ┌────┼─────┐
 ↓    ↓     ↓
User Music Album
```

---

## 🖼️ File Upload

**Multer** is used for processing multipart/form-data and handling uploaded files.

The uploaded file is then processed by the storage service and uploaded to **ImageKit**.

```text
Frontend
   ↓
Multipart/Form-Data
   ↓
Multer
   ↓
storage.services.js
   ↓
ImageKit
   ↓
File URL
   ↓
MongoDB
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to Backend

```bash
cd spotify-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file in the root directory.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

> Never upload your `.env` file or secret keys to GitHub.

---

## ▶️ Running the Project

### Development

If your `package.json` contains a development script:

```bash
npm run dev
```

Otherwise:

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

---

## 🔗 API Architecture

The backend follows a basic MVC-style architecture:

```text
             Client / Frontend
                    │
                    ▼
                 Routes
                    │
                    ▼
              Middleware
                    │
                    ▼
              Controllers
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Services            Models
          │                   │
          ▼                   ▼
       ImageKit            MongoDB
```

---

## 🔒 Environment Variables

The project uses `dotenv` to manage sensitive configuration.

Important environment variables include:

| Variable                | Purpose                   |
| ----------------------- | ------------------------- |
| `PORT`                  | Server port               |
| `MONGODB_URI`           | MongoDB connection string |
| `JWT_SECRET`            | JWT signing secret        |
| `IMAGEKIT_PUBLIC_KEY`   | ImageKit public key       |
| `IMAGEKIT_PRIVATE_KEY`  | ImageKit private key      |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint     |

---

## 🛡️ Security

The backend includes several security-related practices:

* Password hashing with `bcryptjs`
* JWT authentication
* HTTP cookie-based authentication
* Protected routes using authentication middleware
* Environment variables for sensitive credentials
* `.gitignore` to prevent accidental secret commits

**Important:** Never commit the following to GitHub:

```text
.env
MongoDB credentials
JWT secrets
ImageKit private keys
API secrets
```

---

## 📦 Dependencies

Install the required packages with:

```bash
npm install express mongoose bcryptjs cookie-parser dotenv jsonwebtoken multer
```

For ImageKit integration:

```bash
npm install imagekit
```

---

## 🧪 API Testing

You can test the backend APIs using tools such as:

* Postman
* Thunder Client
* Insomnia

Recommended testing flow:

```text
1. Register User
       ↓
2. Login
       ↓
3. Receive Authentication Cookie
       ↓
4. Access Protected Routes
       ↓
5. Upload Music / Images
       ↓
6. Store Data in MongoDB
```

---

## 📌 Main Components

| File                  | Responsibility                    |
| --------------------- | --------------------------------- |
| `app.js`              | Express application configuration |
| `server.js`           | Starts the backend server         |
| `db.js`               | MongoDB connection                |
| `auth.controller.js`  | Authentication logic              |
| `music.controller.js` | Music/album logic                 |
| `auth.middleware.js`  | JWT authentication                |
| `user.model.js`       | User schema                       |
| `music.model.js`      | Music schema                      |
| `album.model.js`      | Album schema                      |
| `auth.routes.js`      | Authentication routes             |
| `music.routes.js`     | Music routes                      |
| `storage.services.js` | ImageKit/file storage             |
| `.env`                | Environment configuration         |
| `.gitignore`          | Ignored files                     |
| `package.json`        | Project dependencies/scripts      |

---

## 🚧 Future Improvements

* 🎧 Music streaming functionality
* ❤️ Like/Favorite songs
* 📋 Playlist creation
* 🔎 Music search
* 🎤 Artist profiles
* ▶️ Recently played songs
* 📊 User listening history
* 🔄 Refresh token implementation
* 🛡️ Rate limiting and advanced API security
* 📚 API documentation with Swagger

---

## 👨‍💻 Author

**Bhupendra Singh**

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.


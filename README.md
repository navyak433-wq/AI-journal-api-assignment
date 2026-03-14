--AI Journal API

-- Setup

Install dependencies

npm install

Run server

node server.js

Server runs on

http://localhost:5000

---

-API Endpoints

-Create Journal Entry
POST /api/journal

Body example:

{
 "userId": "1",
 "ambience": "nature",
 "text": "Today I walked in the forest"
}

---

- Get Journal Entries

GET /api/journal/:userId

Example:

/api/journal/1

---

- Get Insights

GET /api/journal/insights/:userId

Example:

/api/journal/insights/1
-- Architecture

The backend is built using Node.js and Express.

Flow of the application:

Client → Express Server → API Routes → Journals Array → JSON Response

Data is stored in memory using a simple journals array.
Each API endpoint processes requests and returns structured JSON responses.

# NLW API - Intelligent Audio Processing System

A powerful Node.js API built with Fastify that processes audio files, transcribes them using Google's Gemini AI, and provides intelligent question-answering capabilities based on audio content.

## 🚀 Features

- **Audio Processing**: Upload and process audio files
- **AI Transcription**: Automatic audio-to-text conversion using Google Gemini
- **Vector Embeddings**: Generate embeddings for semantic search
- **Question Answering**: AI-powered Q&A based on audio content
- **Room Management**: Organize content into rooms for better structure
- **PostgreSQL with pgvector**: Vector database for semantic search
- **TypeScript**: Full type safety with Zod validation

## 🛠️ Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with pgvector extension
- **ORM**: Drizzle ORM
- **AI Services**: Google Gemini API
- **Validation**: Zod
- **Code Quality**: Biome (formatter/linter)
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Google Gemini API Key

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nlw/api
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Fill in the required environment variables:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Start the Database

```bash
docker-compose up -d
```

This will start a PostgreSQL database with pgvector extension on port 5432.

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Database Migrations

```bash
npm run db:migrate
```

### 6. Seed the Database (Optional)

```bash
npm run db:seed
```

### 7. Start the Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3333`

## 📚 API Endpoints

### Health Check

- `GET /health` - Check if the API is running

### Rooms Management

- `GET /rooms` - List all rooms
- `POST /rooms` - Create a new room

### Questions & Answers

- `GET /rooms/:roomId/questions` - Get questions for a specific room
- `POST /rooms/:roomId/questions` - Create a new question for a room

### Audio Processing

- `POST /upload-audio` - Upload and process audio files

## 🗄️ Database Schema

### Rooms Table

```sql
- id (UUID, Primary Key)
- name (Text, Required)
- description (Text, Optional)
- createdAt (Timestamp)
```

### Questions Table

```sql
- id (UUID, Primary Key)
- roomId (UUID, Foreign Key to rooms.id)
- question (Text, Required)
- answer (Text, Optional)
- createdAt (Timestamp)
```

### Audio Chunks Table

```sql
- id (UUID, Primary Key)
- roomId (UUID, Foreign Key to rooms.id)
- transcription (Text, Required)
- embeddings (Vector[768], Required)
- createdAt (Timestamp)
```

## 🔧 Available Scripts

```bash
# Development
npm run dev                    # Start development server with hot reload

# Database
npm run db:generate           # Generate new migrations
npm run db:migrate           # Run database migrations
npm run db:studio            # Open Drizzle Studio
npm run db:seed              # Seed database with sample data
```

## 🏗️ Project Structure

```
src/
├── db/
│   ├── connection.ts        # Database connection
│   ├── migrations/          # Database migrations
│   ├── schema/             # Database schemas
│   │   ├── audio-chunks.ts
│   │   ├── index.ts
│   │   ├── questions.ts
│   │   └── rooms.ts
│   └── seed.ts             # Database seeding
├── http/
│   ├── requests/           # HTTP request examples
│   └── routes/            # API routes
│       ├── create-question.ts
│       ├── create-room.ts
│       ├── get-room-question.ts
│       ├── get-rooms.ts
│       └── upload-audio.ts
├── services/
│   └── gemini.ts          # Google Gemini AI service
├── env.ts                 # Environment validation
└── server.ts              # Fastify server setup
```

## 🤖 AI Features

### Audio Transcription

- Uses Google Gemini 2.5 Flash model
- Supports multiple audio formats
- Transcribes to Brazilian Portuguese
- Maintains natural punctuation and paragraph structure

### Vector Embeddings

- Generates 768-dimensional embeddings
- Uses text-embedding-004 model
- Optimized for retrieval tasks
- Stored in PostgreSQL with pgvector

### Question Answering

- Context-aware responses based on audio content
- Professional and educational tone
- Cites relevant content when appropriate
- Falls back gracefully when information is insufficient

## 🔒 Environment Variables

| Variable         | Description                  | Required | Default |
| ---------------- | ---------------------------- | -------- | ------- |
| `PORT`           | Server port                  | No       | 3333    |
| `DATABASE_URL`   | PostgreSQL connection string | Yes      | -       |
| `GEMINI_API_KEY` | Google Gemini API key        | Yes      | -       |

## 🐳 Docker

The project includes Docker Compose for easy database setup:

```yaml
services:
  nlw-agents-pg:
    image: pgvector/pgvector:pg17
    environment:
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports:
      - 5432:5432
```

## 🛠️ Development

### Code Formatting

The project uses Biome for code formatting and linting:

```bash
# Format code
npx @biomejs/biome format --write .

# Lint code
npx @biomejs/biome lint .
```

### Database Management

#### Generate Migrations

```bash
npm run db:generate
```

#### Run Migrations

```bash
npm run db:migrate
```

#### Open Drizzle Studio

```bash
npm run db:studio
```

## 📝 API Usage Examples

### Create a Room

```bash
curl -X POST http://localhost:3333/rooms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Audio Room",
    "description": "Room for audio processing"
  }'
```

### Upload Audio

```bash
curl -X POST http://localhost:3333/upload-audio \
  -F "audio=@audio-file.mp3" \
  -F "roomId=room-uuid-here"
```

### Ask a Question

```bash
curl -X POST http://localhost:3333/rooms/room-uuid/questions \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What was discussed in the audio?"
  }'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include your environment details and error logs

## 🔮 Future Enhancements

- [ ] Real-time audio streaming
- [ ] Multiple language support
- [ ] Audio quality optimization
- [ ] Advanced search capabilities
- [ ] User authentication
- [ ] API rate limiting
- [ ] WebSocket support for real-time updates

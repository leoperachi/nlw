# Frontend Project

This is a React-based frontend project using Vite, TypeScript, Tailwind CSS, and several modern libraries for building robust web applications.

## 🛠️ Main Libraries

- **React** (v19)
- **Vite** (v7)
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **React Hook Form** & **Zod** (form validation)
- **@tanstack/react-query** (data fetching/caching)
- **Lucide React** (icons)
- **Radix UI** (UI primitives)
- **Class Variance Authority**, **clsx** (utility libraries)
- **Day.js** (date handling)

## 📁 Project Structure

```
src/
  components/      # Reusable UI components
  pages/           # Page components (routes)
  http/            # HTTP hooks and API logic
  lib/             # Utility libraries
  assets/          # Static assets
  main.tsx         # App entry point
  app.tsx          # App component and routes
  index.css        # Global styles (Tailwind)
```

## ⚙️ Configuration

- **Vite** is used for fast development and build.
- **Alias:** `@` points to the `src/` directory (see `vite.config.ts`).
- **Tailwind CSS** is integrated via plugin.
- **Biome** is used for code formatting and linting.

## 🚀 Setup Instructions

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Build for production:**

   ```sh
   npm run build
   ```

4. **Preview the production build:**

   ```sh
   npm run preview
   ```

5. **Lint the code:**
   ```sh
   npm run lint
   ```

## 📝 Notes

- Make sure you are using **Node.js v20.19.0+ or v22.12.0+** for Vite 7 compatibility.
- The `@` alias lets you import from `src` easily, e.g. `import { MyComponent } from "@/components/MyComponent"`.
- Tailwind CSS is configured via the Vite plugin and `index.css`.

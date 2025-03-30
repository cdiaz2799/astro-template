# Astro Template

## ✨ Features

- 🚀 [Astro](https://astro.build) - The web framework for content-driven websites
- ⚛️ [React](https://react.dev) - For interactive UI components
- 📘 [TypeScript](https://www.typescriptlang.org) - For type safety and better developer experience
- 🎨 [TailwindCSS](https://tailwindcss.com) - For utility-first CSS
- 🔍 [ESLint](https://eslint.org) - For code linting
- 💅 [Prettier](https://prettier.io) - For code formatting
- 📝 [Commitizen](https://commitizen.github.io/cz-cli) - For standardized commit messages

## 🚀 Quick Start

```sh
# Clone the repository
git clone https://github.com/cdiaz2799/astro-template.git

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## 🛠️ Development

All commands are run from the root of the project:

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `yarn dev`       | Starts local dev server at `localhost:4321`  |
| `yarn build`     | Build your production site to `./dist/`      |
| `yarn preview`   | Preview your build locally, before deploying |
| `yarn format`    | Format code with Prettier                    |
| `yarn lint`      | Lint code with ESLint                        |
| `yarn typecheck` | Run TypeScript type checking                 |
| `yarn commit`    | Create a commit with commitizen              |

## 📁 Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── components/     # React and Astro components
│   ├── layouts/        # Page layouts
│   └── pages/         # Pages and routes
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # TailwindCSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🔧 Configuration

### Commit Messages

This project uses [commitizen](https://commitizen.github.io/cz-cli) with [gitmoji](https://gitmoji.dev) for standardized commit messages. When making a commit, use:

```sh
yarn commit
```

### Code Style

- ESLint is configured with TypeScript support and various plugins for code quality
- Prettier is set up for consistent code formatting
- TailwindCSS is configured with the official plugin for class sorting

## 📦 Dependencies

- Node.js >= 22.14.0
- Yarn package manager

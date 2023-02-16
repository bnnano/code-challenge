# Bannano Code Challenge

## Introduction

Welcome to the Bannano frontend code challenge! The goal of this challenge is to create a list of cards using the Pokemon API, with a focus on modern technology and good development practices.

## Figma
https://www.figma.com/file/O58fFAAwSZKfoVOIDm8aQR/Bannano-MVP?node-id=2278%3A17645

<img width="846" alt="image" src="https://user-images.githubusercontent.com/5679878/218526688-6ae75184-166b-4fe6-8bae-b27ab8fdf872.png">

## Technologies

The following technologies will be used in this challenge:

- React Query
- [Stitches.dev](https://stiches.dev) for the styling
- Next.js
- TypeScript
- Zustand for state management

## Requirements

The challenge requires you to:

- Query the Pokemon API as the user scrolls
- Use component-driven development with an atomic design pattern (atoms, molecules, etc.)
- Use TypeScript throughout the project
- Use Zustand for state management

## Steps to Complete the Challenge

1. Clone this repository to your local machine
2. Create a new branch for your solution
3. Follow the instructions below to implement the code challenge
4. When you're ready to submit your solution, make a pull request to the original repository

## Implementation Details

Please follow the component-driven development and atomic design patterns as closely as possible. 

In order to ensure the quality of the code, please make sure to:

- Write clear and well-documented code
- Write tests to cover the functionality of your code
- Optimize the performance of the code

## Evaluation

Your solution will be evaluated based on:

- Correct implementation of the requirements
- Code quality, including readability, maintainability, and documentation
- Performance optimization
- Adherence to the atomic design pattern
- Use of TypeScript and state management with Zustand

## Api endpoints

Given a data API located here: [Pokemon API](https://pokeapi.co/docs/v2#pokemon).

- https://pokeapi.co/api/v2/pokemon?limit=151 to get all the pokemon with a limit
- https://pokeapi.co/api/v2/pokemon/{id-or-name}/ for searching the pokemon
- https://img.pokemondb.net/artwork/large/{name}.jpg for get the image
- https://bulbapedia.bulbagarden.net/wiki/{name} link to wiki


## Conclusion

We wish you the best of luck with the code challenge, and are excited to see your solution!

# Next JS Autogenerated README content

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
Chat Room is a free and open source chatting application for the web, made with [Next.js](https://nextjs.org) & [Prisma](https://prisma.io)

## Getting Started

1. Install dependencies:

```bash
npm i
```

2. Setup environment:

```bash
mv example.env .env
```

2. Setup database:

```bash
npx prisma db push
```

3. Populate with fake data:

```bash
npx prisma db seed
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(root)/page.tsx`. The page auto-updates as you edit the file.

You can check out [my GitHub repository](https://github.com/TBytes404) - your feedback and contributions are welcome!

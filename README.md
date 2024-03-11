## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Next.js - Prisma docs](https://vercel.com/guides/nextjs-prisma-postgres)

## Troubleshooting

If you have a missing dependency or file run 

```Bash
npm install
```

To sync the database to prisma schema, run

```bash
prisma migrate dev
```

To open the prisma studio run 

```bash
npx prisma studio
```

Prisma client is the prisma interface on the next.js server, it needs to be installed
```bash
npm install @prisma/client
or
npm install
```

and updated every time you update the schema
```bash
npx prisma generate
``` 

## Contributers
Ethan Chalupa 
Derek Ludlow
Dawson Bauman

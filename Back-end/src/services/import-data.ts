// import { PrismaClient } from '@prisma/client';
// import * as fs from 'fs';

// const prisma = new PrismaClient();

// async function main() {
//   const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
//   for (const item of data) {
//     await prisma.Aqui é o local que ele vai salvar os dados lido do json.create({ data: item });
//   }
//   console.log('funcionou');
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

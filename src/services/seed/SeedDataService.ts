import { createReadStream } from 'node:fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
import { Writable } from 'node:stream';

export class SeedDataService {
  readonly prisma = new PrismaClient();

  public static getService(): SeedDataService {
    return new SeedDataService();
  }

  async hasSeedData(): Promise<boolean> {
    const product = await this.prisma.product.findFirst();
    return !!product;
  }

  async deleteSeedData(): Promise<void> {
    await this.prisma.$executeRawUnsafe(`TRUNCATE product;`);
  }

  async writeSeedData(): Promise<void> {
    const prisma = this.prisma;
    const file = 'data/seed.csv';
    let productsWritten = 0;
    return new Promise<void>((resolve, reject) =>
      createReadStream(file)
        .pipe(csv())
        .pipe(
          new Writable({
            objectMode: true,
            async write(
              data: any,
              encoding: BufferEncoding,
              callback: (error?: Error | null) => void,
            ) {
              await prisma.product.create({
                data: {
                  id: data.id,
                  brand_name: data.brand_name,
                  product_title: data.product_title,
                  product_price: parseFloat(data.product_price),
                  product_image: data.product_image,
                },
              });
              productsWritten++;
              callback(null);
            },
            final(callback: (error?: Error | null) => void) {
              console.log(`Wrote ${productsWritten} items.`);
              resolve();
              callback();
            },
          }),
        )
        .on('error', (err) => reject(err)),
    );
  }
}

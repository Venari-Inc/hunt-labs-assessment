import { NextResponse } from 'next/server';
import { SeedDataService } from '@/services/seed/SeedDataService';

const seedService: SeedDataService = SeedDataService.getService();

export async function GET(): Promise<NextResponse> {
  const hasSeedData = await seedService.hasSeedData();
  return NextResponse.json({ seed_data_exists: hasSeedData });
}

export async function POST(): Promise<NextResponse> {
  await seedService.writeSeedData();
  return NextResponse.json({ seed_data_exists: true });
}

export async function DELETE(): Promise<NextResponse> {
  await seedService.deleteSeedData();
  return NextResponse.json({ seed_data_exists: false });
}

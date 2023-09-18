import { NextRequest, NextResponse } from 'next/server';
import products from './products.json';

export async function GET(req: NextRequest) {
  return NextResponse.json(products);
}

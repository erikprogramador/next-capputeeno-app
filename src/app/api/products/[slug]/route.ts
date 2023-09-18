import { NextRequest, NextResponse } from 'next/server';
import products from '../products.json';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  return NextResponse.json(
    products.find(product => product.slug == params.slug)
  );
}

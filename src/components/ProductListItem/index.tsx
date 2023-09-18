import { ProductType } from '@/Types/Product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductListItem({
  product: product,
}: {
  product: ProductType;
}) {
  function formatPricing(pricing: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(pricing);
  }
  return (
    <li className="bg-white rounded-lg overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/${product.image}`}
          width={256}
          height={378}
          alt={product.name}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-gray-600 font-extralight text-xl mb-4">
            {product.name}
          </h3>
          <hr />
          <span className="block mt-4 font-bold text-gray-900 text-lg">
            {formatPricing(product.pricing)}
          </span>
        </div>
      </Link>
    </li>
  );
}

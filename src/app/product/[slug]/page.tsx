import { ProductType } from '@/Types/Product';
import AddToCartButton from '@/components/AddToCartButton';
import BackButton from '@/components/BackButton';
import { formatPricing } from '@/lib/formatPricing';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await fetch(
    process.env.BASE_URL + '/api/products/' + params.slug
  );
  const data: ProductType = await response.json();
  return (
    <main>
      <div>
        <BackButton />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <Image
            src={`/${data.image}`}
            width={640}
            height={580}
            alt={data.name}
            className="w-full"
          />
        </div>
        <div>
          <span className="font-extralight capitalize block mb-4">
            {data.category}
          </span>
          <h1 className="font-extralight text-4xl mb-4">{data.name}</h1>
          <span className="font-bold capitalize text-xl block mb-8">
            {formatPricing(data.pricing)}
          </span>

          <p className="text-gray-600">{data.observation}</p>

          <h3 className="uppercase text-gray-600 mb-4 mt-10 text-lg">
            Descrição
          </h3>

          <p className="text-gray-600">{data.description}</p>

          <div className="mt-16">
            <AddToCartButton product={data} />
          </div>
        </div>
      </div>
    </main>
  );
}

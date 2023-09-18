// import { useRouter } from 'next/router';

import { ProductType } from '@/Types/Product';

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await fetch(
    process.env.BASE_URL + '/api/products/' + params.slug
  );
  const data: ProductType = await response.json();
  console.log(data);
  return (
    <main>
      <h1>Produto {data.name}</h1>
    </main>
  );
}

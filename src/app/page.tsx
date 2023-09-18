import { ProductType } from '@/Types/Product';
import FilterTabs from '@/components/FilterTabs';
import OrderDropdown from '@/components/OrderDropdown';
import Pagination from '@/components/Pagination';
import ProductListItem from '@/components/ProductListItem';

export default async function Home() {
  const response = await fetch(process.env.BASE_URL + '/api/products');
  const data: ProductType[] = await response.json();

  return (
    <div className="pb-16">
      <div>
        <div className="flex items-center justify-between">
          <FilterTabs />
          <OrderDropdown />
        </div>
      </div>

      <div className="flex items-center justify-end mt-6">
        <Pagination />
      </div>

      <div className="mt-6">
        {data.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          <ul className="grid grid-cols-4 gap-8">
            {data.map(item => (
              <ProductListItem product={item} key={item.uuid} />
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-end mt-6">
        <Pagination />
      </div>
    </div>
  );
}

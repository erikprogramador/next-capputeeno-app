import ActiveLink from '../ActiveLink';

export default function FilterTabs() {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <ActiveLink
          href="/"
          activeClassName="font-bold border-b-4 border-green-500 text-gray-900"
          className="py-1 uppercase text-gray-400"
        >
          Todos os Produtos
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          href="/camisetas"
          activeClassName="font-bold border-b-4 border-green-500 text-gray-900"
          className="py-1 uppercase text-gray-400"
        >
          Camisetas
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          href="/canecas"
          activeClassName="font-bold border-b-4 border-green-500 text-gray-900"
          className="py-1 uppercase text-gray-400"
        >
          Canecas
        </ActiveLink>
      </li>
    </ul>
  );
}

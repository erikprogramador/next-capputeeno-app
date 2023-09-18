'use client';

import { Menu } from '@headlessui/react';

export default function OrderDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2">
        <span>Organizar por</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10L12 14L16 10"
            stroke="#737380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col bg-white shadow-md rounded-lg right-0 mt-2 w-56">
        <Menu.Item>
          <a className="py-2 px-4" href="/account-settings">
            Novidades
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="py-2 px-4" href="/account-settings">
            Preço: Maior - Menor
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="py-2 px-4" href="/account-settings">
            Preço: Menor - Maior
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="py-2 px-4" href="/account-settings">
            Mais vendidos
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

import Image from 'next/image';
import SearchForm from '../SearchForm';
import CardButton from '../CartButton';

export default function Head() {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/capputeeno.png"
          width={219}
          height={60}
          alt="Capputeeno logo"
        />

        <div className="flex items-center space-x-4">
          <SearchForm />
          <CardButton />
        </div>
      </div>
    </header>
  );
}

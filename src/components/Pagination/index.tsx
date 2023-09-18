import Chevron from '../Chevron';

export default function Pagination() {
  return (
    <ul className="inline-flex space-x-2">
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-green-200">
        <a className="text-green-500" href="#">
          1
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          2
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          3
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          4
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          5
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          <Chevron />
        </a>
      </li>
      <li className="bg-gray-200 w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm border border-gray-200">
        <a className="text-gray-500" href="#">
          <Chevron direction="right" />
        </a>
      </li>
    </ul>
  );
}

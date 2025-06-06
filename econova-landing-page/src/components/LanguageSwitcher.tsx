import Link from 'next/link';

export default function LanguageSwitcher({ slug }: { slug: string }) {
  return (
    <nav className="p-4 bg-gray-100 flex justify-end space-x-4">
      <Link href={`/en-US/${slug}`} className="text-blue-600 hover:underline" aria-label="Switch to English">
        English
      </Link>
      <Link href={`/es/${slug}`} className="text-blue-600 hover:underline" aria-label="Switch to Spanish">
        Spanish
      </Link>
    </nav>
  );
}
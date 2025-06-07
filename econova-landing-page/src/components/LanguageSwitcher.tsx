import Link from 'next/link';

export default function LanguageSwitcher({ slug }: { slug: string }) {
  return (
    <nav className="p-4 bg-[#F88379] text-white flex justify-end space-x-6 shadow-lg">
      <Link href={`/en-US/${slug}`} className="hover:text-rose-300 transition-colors duration-300" aria-label="Switch to English">
        English
      </Link>
      <Link href={`/es/${slug}`} className="hover:text-rose-300 transition-colors duration-300" aria-label="Switch to Spanish">
        Spanish
      </Link>
    </nav>
  );
}
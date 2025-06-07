import Link from 'next/link';

export default function LanguageSwitcher({ slug }: { slug: string }) {
  return (
    <nav className="p-4 bg-gradient-to-r from-[#87CEEB] to-[#89CFF0] text-white flex justify-end space-x-8 shadow-lg">
      <Link href={`/en-US/${slug}`} className="hover:text-[#00CED1] transition-colors duration-300 text-lg font-bold" aria-label="Switch to English">
        English
      </Link>
      <Link href={`/es/${slug}`} className="hover:text-[#00CED1] transition-colors duration-300 text-lg font-bold" aria-label="Switch to Spanish">
        Spanish
      </Link>
    </nav>
  );
}
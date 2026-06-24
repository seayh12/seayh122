import { profileData } from '../data/profileData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-200/60 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-zinc-400">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>
        <p className="font-sans text-xs text-zinc-400 flex items-center gap-1">
          Designed & Built with <span className="text-zinc-500 font-semibold">Craftsmanship</span>
        </p>
      </div>
    </footer>
  );
}

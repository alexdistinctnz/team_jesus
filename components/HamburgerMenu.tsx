'use client';

import { Menu } from 'lucide-react';

interface HamburgerMenuProps {
  onClick: () => void;
}

export function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 z-50 p-3 bg-black hover:bg-slate-900 text-white rounded-full shadow-lg transition-colors"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}

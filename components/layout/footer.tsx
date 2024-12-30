"use client";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 px-24 text-sm text-neutral-500">
      <div className="flex justify-between items-center">
        <span>© 2024 Amidat Ogunbiyi. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-900 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

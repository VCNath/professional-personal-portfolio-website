export function Footer() {
  return (
    <footer className="px-3 pb-3">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[28px] border border-white/40 bg-[#F7F5F0]/72 px-5 py-8 text-sm text-[#4F5966] shadow-sm backdrop-blur-[14px] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Nathaniel Varga-Chauvin</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
          <a
            href="https://nathanielvc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8C7657]"
          >
            nathanielvc.com
          </a>
          <a
            href="https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8C7657]"
          >
            LinkedIn
          </a>
          <a href="mailto:vcath@hotmail.com" className="hover:text-[#8C7657]">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

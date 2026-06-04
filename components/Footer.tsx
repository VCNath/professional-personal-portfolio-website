export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Nathaniel Varga-Chauvin</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
          <a
            href="https://nathanielvc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            nathanielvc.com
          </a>
          <a
            href="https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            LinkedIn
          </a>
          <a href="mailto:vcath@hotmail.com" className="hover:text-blue-700">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

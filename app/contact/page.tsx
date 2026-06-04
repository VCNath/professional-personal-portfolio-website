import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139',
  },
  {
    label: 'vcath@hotmail.com',
    href: 'mailto:vcath@hotmail.com',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
  },
]

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s Connect"
        description="I&apos;m interested in opportunities related to business analysis, operations analysis, sales operations, project coordination, dashboard development, and reporting."
      />
      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <Button key={link.label} href={link.href} variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

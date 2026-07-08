import Image from 'next/image'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'

const contactLinks = [
  {
    label: 'Portfolio',
    href: 'https://nathanielvc.com/',
  },
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
        title="Let's Connect"
        description="I'm interested in opportunities related to business analysis, operations analysis, sales operations, project coordination, dashboard development, and reporting."
      />
      <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="relative min-h-[240px]">
          <Image
            src="/images/editorial-workspace-hero.png"
            alt="Minimal architectural workspace with warm executive lighting"
            fill
            className="object-cover"
            sizes="896px"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((link) => (
              <Button key={link.label} href={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import type { MetadataRoute } from 'next'

const routes = [
  'https://nathanielvc.com/',
  'https://nathanielvc.com/weekly-brief',
  'https://nathanielvc.com/projects',
  'https://nathanielvc.com/projects/finance-market-dashboard',
  'https://nathanielvc.com/projects/nvc-capital-lab',
  'https://nathanielvc.com/experience',
  'https://nathanielvc.com/resume',
  'https://nathanielvc.com/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-04')

  return routes.map((url) => ({
    url,
    lastModified,
  }))
}

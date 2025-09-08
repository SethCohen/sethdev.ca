import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'

/**
 * Card for displaying a single portfolio project.
 */
export interface PortfolioCardProps {
  title: string
  description: string
  link: string
  date: string
  thumbnail: string
  isActive: boolean
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  link,
  date,
  thumbnail,
}) => (
  <Card className="bg-background-dark border-none shadow-none">
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-2xl font-bold text-amber-400">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline focus:underline"
          aria-label={`Open project: ${title}`}
        >
          {title}
        </a>
      </CardTitle>
      <span className="text-lg text-white">
        {new Date(date).toLocaleDateString([], {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </span>
    </CardHeader>
    <CardContent>
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="h-auto w-full rounded-t-3xl object-cover"
      />
      <CardDescription
        className="mt-4 text-lg text-white"
        aria-label={`Project description: ${description}`}
      >
        {description}
      </CardDescription>
    </CardContent>
  </Card>
)

export default PortfolioCard

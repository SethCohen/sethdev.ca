import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

/**
 * Card for displaying a single portfolio project.
 */
export interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
  date: string;
  thumbnail: string;
  isActive: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, link, date, thumbnail, isActive }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-3xl transition-shadow hover:shadow-lg"
    tabIndex={isActive ? 0 : -1}
    aria-label={`Open project: ${title}`}
  >
    <Card className="bg-background-dark cursor-pointer">
      <CardHeader>
        <CardTitle className="text-2xl! font-bold! !text-gold-400 flex! items-center! justify-between!">{title}</CardTitle>
        {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
      </CardHeader>
      <CardContent>
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="w-full h-auto rounded-t-3xl object-cover"
        />
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </a>
);

export default PortfolioCard;

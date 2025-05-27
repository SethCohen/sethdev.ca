import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { siKofi, siGithubsponsors, siPaypal, siPatreon, siBuymeacoffee } from 'simple-icons/icons';

/**
 * Support section with donation options and accessible tooltips.
 */
const supportLinks = [
  {
    href: 'https://ko-fi.com/sethcohen',
    label: 'Ko-fi',
    icon: siKofi,
    color: `#${siKofi.hex}`,
  },
  {
    href: 'https://github.com/sponsors/SethCohen',
    label: 'Github Sponsor',
    icon: siGithubsponsors,
    color: `#${siGithubsponsors.hex}`,
  },
  {
    href: 'https://www.paypal.com/paypalme/SethCohenDev',
    label: 'Paypal',
    icon: siPaypal,
    color: `#${siPaypal.hex}`,
  },
  {
    href: 'https://www.patreon.com/sethcohen',
    label: 'Patreon',
    icon: siPatreon,
    color: '#ffffff',
  },
  {
    href: 'https://buymeacoffee.com/sethcohen',
    label: 'BuyMeACoffee',
    icon: siBuymeacoffee,
    color: `#${siBuymeacoffee.hex}`,
  },
];

const Support: React.FC = () => (
  <section
    id="support"
    aria-label="Support me section with donation options"
    className="py-16 px-6 text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold mb-6"
    >
      Keep Me Creating
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-8 max-w-xl mx-auto"
    >
      If you appreciate my work and want to support my creative journey, you can buy me a cup of matcha or tea. Your support helps me keep creating, exploring, and learning.
    </motion.p>
    <motion.div
      className="flex justify-center gap-1"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {supportLinks.map(({ href, label, icon, color }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 text-gray-900 font-semibold py-3 px-6 transition-colors"
              aria-label={label}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill={color}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path d={icon.path} />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </motion.div>
  </section>
);

export default Support;

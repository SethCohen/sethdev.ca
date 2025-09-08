import { useEffect } from 'react'

export default function ScrollOnLoad() {
  useEffect(() => {
  const hasSupportHash = window.location.hash === '#support'
  const isSupportPath = window.location.pathname.replace(/\/$/, '') === '/support-me'
  if (hasSupportHash || isSupportPath) {
      setTimeout(() => {
        const el = document.getElementById('support')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }, [])
  return null
}

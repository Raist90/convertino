import { clsx } from 'clsx'
import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'

export function Link({
  href,
  children,
  ...rest
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const isActive =
    href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  return (
    <a
      href={href}
      className={clsx(rest.className, isActive ? 'is-active' : undefined)}
    >
      {children}
    </a>
  )
}

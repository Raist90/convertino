import React from 'react'
import logoUrl from '../assets/logo.svg'

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='Demo showcasing Vike' />
      <link rel='icon' href={logoUrl} />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        rel='stylesheet'
      />
    </>
  )
}

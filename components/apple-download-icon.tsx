import type { ComponentPropsWithoutRef } from 'react'

export function AppleDownloadIcon({ className, ...props }: ComponentPropsWithoutRef<'img'>) {
  return (
    <img
      src="/apple-brands-solid-full.svg"
      alt=""
      aria-hidden="true"
      className={className}
      {...props}
    />
  )
}

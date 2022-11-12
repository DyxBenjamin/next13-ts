import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head >
          <title >
              Next.js + TypeScript Boilerplate
          </title >
      </head >
      <body>{children}</body>
    </html>
  )
}

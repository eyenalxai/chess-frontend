import { Providers } from "@/app/providers"
import { ReactNode } from "react"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const title = "The Great Chess Rumble"
  const description =
    "In the chaos of this landscape, chess twists into an uncanny, peculiar jest"

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description
    }
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        fontFamily: "monospace"
      }}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

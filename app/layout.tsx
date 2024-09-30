import "./layout.css"
import Nav from "./Components/Nav/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  )
}

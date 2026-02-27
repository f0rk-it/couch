import "./globals.css"

export const metadata = {
  title: "Couch",
  description: "Couch design concept",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

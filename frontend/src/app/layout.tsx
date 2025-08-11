import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Caddy Engineering Ecosystem</title>
        <meta name="description" content="AI-powered engineering assistant app" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#0d6efd", color: "white" }}>
          <h1>Caddy Engineering Ecosystem</h1>
          <nav>
            <a href="/" style={{ marginRight: "1rem", color: "white" }}>Home</a>
            <a href="/projects" style={{ marginRight: "1rem", color: "white" }}>Projects</a>
            <a href="/research" style={{ color: "white" }}>Research</a>
          </nav>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer style={{ padding: "1rem", backgroundColor: "#f8f9fa", textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Caddy Engineering Ecosystem
        </footer>
      </body>
    </html>
  );
}

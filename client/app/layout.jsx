import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
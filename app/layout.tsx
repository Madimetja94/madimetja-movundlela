import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Madimetja Movundlela",
  description: "Full Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

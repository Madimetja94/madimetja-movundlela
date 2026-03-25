import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

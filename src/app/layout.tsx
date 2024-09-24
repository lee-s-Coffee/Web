import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lee's Coffee",
  description: "Lee's Coffee Web Site",
  icons: {
    icon: "/favicon.ico", // 경로 설정
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

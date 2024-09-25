import type { Metadata } from "next";
import Navbar from "@/app/components/navigater/Navbar";

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
    <html lang="ko">
      <body className="min-h-screen bg-gray-100">
        <Navbar /> {/* 상단에 네비게이션 바 */}
        <main>{children}</main> {/* 페이지 내용 */}
      </body>
    </html>
  );
}

import Header from "@/components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lee's Coffee",
  description: "Lee's Coffee Web Site",
  icons: {
    icon: "/favicon.ico", // 경로 설정
  },
};

export default function Layout() {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-100">
        <Header />
        <div>Hello</div>
      </body>
    </html>
  );
}

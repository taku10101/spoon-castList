import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PaginationComponent } from "@/components/cast/PaginationComponent";
import { UserSelect } from "@/components/UserSelect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spoon cast 一覧",
  description:
    "SpoonのCastの一覧データを提供します。共有ボタンからspoonに遷移してください",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={headerStyle}>
          <UserSelect />
          <PaginationComponent />
        </div>
        {children}
      </body>
    </html>
  );
}
const headerStyle = {
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
  marginLeft: "20px",
  marginRight: "20px",
  display: "flex",
  alignItems: "center",
};

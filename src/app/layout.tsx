import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RecoilContextProvider } from "@/providers/RecoilContextProvider";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { ClusterProvider } from "@/components/cluster/cluster-data-access";
import { SolanaProvider } from "@/components/solana/solana-provider";
import { ReactQueryProvider } from "./react-query-provider";
import { UiLayout } from "@/components/ui/ui-layout";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BitBirdie",
  description: "BitBirdie",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AuthProvider session={session}>
          <ReactQueryProvider>
            <ClusterProvider>
              <SolanaProvider>
                <RecoilContextProvider>
                  <div className="flex flex-col justify-between min-h-screen bg-[#17183c]">
                    <div className="flex flex-col">
                      <Header />
                      {children}
                    </div>
                  </div>
                </RecoilContextProvider>
              </SolanaProvider>
            </ClusterProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

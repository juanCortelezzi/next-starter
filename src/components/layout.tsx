import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "@/components/header";

type Props = {
  title: string;
  desc: string;
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className, title, desc }: Props) => {
  return (
    <div className="container mx-auto my-4 flex min-h-screen max-w-4xl flex-col space-y-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`grow ${className && className}`}>{children}</main>
    </div>
  );
};

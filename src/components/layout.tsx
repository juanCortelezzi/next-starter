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
    <div className="container mx-auto my-5 flex min-h-screen max-w-2xl flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="px-4" />
      <main className={`grow px-4 ${className && className}`}>{children}</main>
    </div>
  );
};

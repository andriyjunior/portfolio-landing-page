import { Header } from "components";
import { FC, ReactNode } from "react";
import { Footer } from "sections";

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

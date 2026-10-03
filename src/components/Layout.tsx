import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  noPadding?: boolean;
  showEchelonFooter?: boolean;
  headerRevealMode?: boolean;
}

export function Layout({ 
  children, 
  hideFooter = false, 
  noPadding = false,
  showEchelonFooter = false,
  headerRevealMode = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      {/* Ambient Atmospheric Lighting Orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] w-[550px] h-[550px] rounded-full bg-[#519CAB]/16 dark:bg-[#519CAB]/12 blur-[130px]" />
        <div className="absolute top-[35%] -left-36 w-[500px] h-[500px] rounded-full bg-[#FFC64F]/14 dark:bg-[#FFC64F]/08 blur-[140px]" />
        <div className="absolute -bottom-36 left-[30%] w-[600px] h-[600px] rounded-full bg-[#C3E7F1]/40 dark:bg-[#519CAB]/08 blur-[150px]" />
      </div>

      <Header revealMode={headerRevealMode} />
      <main className={`flex-1 ${noPadding ? '' : 'pt-20 md:pt-24'}`}>
        {children}
      </main>
      {!hideFooter && (
        <Footer variant={showEchelonFooter ? "echelon" : "default"} />
      )}
    </div>
  );
}

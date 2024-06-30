import { Metadata } from 'next';
import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: 'Login - ZORO UK',
  description: 'ZORO Uk Take Home Test',
};

function SignupLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex-grow flex justify-center items-center bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}

export default SignupLayout;

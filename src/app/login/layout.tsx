import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
    >
      {children}
    </div>
  );
};

export default LoginLayout;

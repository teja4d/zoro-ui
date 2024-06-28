import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div
      className="flex-grow flex justify-center items-center bg-cover bg-center bg-no-repeat"
    >
      {children}
    </div>
  );
};

export default LoginLayout;

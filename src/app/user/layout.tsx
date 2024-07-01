import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function UserLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default UserLayout;

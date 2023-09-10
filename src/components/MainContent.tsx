import { ReactNode } from "react";

export type MainContentProps = {
  children: ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return <>{children}</>;
}

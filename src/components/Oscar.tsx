type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = ({ children }: OscarProps) => {
  return <h2>{children}</h2>;
};

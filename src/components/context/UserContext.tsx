import { createContext, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// import { createContext, useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// type UserContextType = {
//   user: AuthUser | null;
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null> >;
// };

// type UserContextProviderProps = {
//   children: React.ReactNode;
// };

// export const UserContext = createContext<UserContextType>(
//   {} as UserContextType
// );

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<AuthUser | null>(null);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

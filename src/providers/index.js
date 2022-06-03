import { AccountProvider } from "./Account";

const Provider = ({children}) => {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  );
};

export default Provider;

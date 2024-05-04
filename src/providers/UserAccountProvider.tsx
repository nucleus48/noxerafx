import LoadingIndicator from "@/components/LoadingIndicator";
import { useDocumentData } from "@/hooks/useDocumentData";
import { createUserAccount, firestoreRefs } from "@/lib/firestore";
import { UserAccount } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { PropsWithChildren, createContext, useContext } from "react";

export const UserAccountContext = createContext<UserAccount | null>(null);

export default function UserAccountProvider({ children }: PropsWithChildren) {
  const { user } = useUser();
  const userAccount = useDocumentData(
    firestoreRefs.userAccount(user!.id),
    createUserAccount.bind(null, user!.id)
  );

  if (!userAccount) return <LoadingIndicator />;

  return (
    <UserAccountContext.Provider value={userAccount}>
      {children}
    </UserAccountContext.Provider>
  );
}

export function useUserAccount() {
  return useContext(UserAccountContext);
}

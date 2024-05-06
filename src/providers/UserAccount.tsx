import LoadingIndicator from "@/components/LoadingIndicator";
import { useDocumentData } from "@/hooks/useDocumentData";
import { createUserAccount, firestoreRefs } from "@/lib/firestore";
import { User } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { updateDoc } from "firebase/firestore";
import { PropsWithChildren, createContext, useContext, useEffect } from "react";

export const UserAccountContext = createContext<User | null>(null);

export default function UserProvider({ children }: PropsWithChildren) {
  const { user } = useUser();
  const userAccount = useDocumentData(
    firestoreRefs.user(user!.id),
    createUserAccount.bind(
      null,
      user!.id,
      user!.fullName!,
      user!.primaryEmailAddress!.emailAddress
    )
  );

  useEffect(() => {
    if (!userAccount) return;
    if (user?.fullName != userAccount.name)
      updateDoc(firestoreRefs.user(user!.id), { name: user!.fullName! });
    else if (user?.primaryEmailAddress!.emailAddress != userAccount.email)
      updateDoc(firestoreRefs.user(user!.id), {
        email: user.primaryEmailAddress!.emailAddress,
      });
  }, [user, userAccount]);

  if (!userAccount) return <LoadingIndicator />;

  return (
    <UserAccountContext.Provider value={userAccount}>
      {children}
    </UserAccountContext.Provider>
  );
}

export function useAppUser() {
  return useContext(UserAccountContext);
}

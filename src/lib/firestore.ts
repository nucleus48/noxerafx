import { doc, setDoc, type DocumentReference } from "firebase/firestore";
import { firestore } from "./firebase";
import { UserAccount } from "@/types";

export const firestoreRefs = {
  userAccount: (userId: string) =>
    doc(firestore, "userAccounts", userId) as DocumentReference<
      UserAccount,
      UserAccount
    >,
};

export async function createUserAccount(userId: string) {
  await setDoc(firestoreRefs.userAccount(userId), {
    id: userId,
    balance: 0,
    profits: 0,
    totalDeposits: 0,
    totalInvestments: 0,
    totalWithdraws: 0,
  });
}

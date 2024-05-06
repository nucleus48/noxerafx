import { doc, setDoc, type DocumentReference } from "firebase/firestore";
import { firestore } from "./firebase";
import { User } from "@/types";

export const firestoreRefs = {
  user: (userId: string) =>
    doc(firestore, "users", userId) as DocumentReference<User, User>,
};

export async function createUserAccount(
  userId: string,
  name: string,
  email: string
) {
  await setDoc(firestoreRefs.user(userId), {
    id: userId,
    name,
    email,
    balance: 0,
    profits: 0,
    totalDeposits: 0,
    totalInvestments: 0,
    totalWithdraws: 0,
  });
}

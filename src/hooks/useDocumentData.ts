import {
  type DocumentReference,
  type DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function useDocumentData<T extends DocumentData>(
  ref: DocumentReference<T, T>,
  create: () => void
) {
  const [data, setData] = useState<T>();

  useEffect(
    () =>
      onSnapshot(ref, (snapshot) => {
        console.log(snapshot.data());
        if (!snapshot.exists()) return create();
        setData(snapshot.data());
      }),
    []
  );

  return data;
}

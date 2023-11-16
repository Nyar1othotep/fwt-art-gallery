import { useEffect, useState } from "react";

import { getFingerprint } from "./getFingerprint";

export const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    getFingerprint().then((result) => setFingerprint(result));
  }, []);

  return fingerprint;
};

import { useEffect, useState } from "react";

import { getFingerpring } from "./getFingerprint";

export const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    getFingerpring().then((result) => setFingerprint(result));
  }, []);

  return fingerprint;
};

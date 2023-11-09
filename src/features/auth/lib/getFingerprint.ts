import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const getFingerpring = async () => {
  const fp = await FingerprintJS.load();
  const { visitorId } = await fp.get();

  return visitorId;
};

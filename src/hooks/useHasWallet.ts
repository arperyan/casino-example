import { useEffect, useState } from "react";

export function useHasWallet() {
  const [hasWallet, setHasWallet] = useState(false);

  useEffect(() => {
    const isWalletConnected = Boolean(window.ethereum);
    setHasWallet(isWalletConnected);
  }, []);

  return hasWallet;
}

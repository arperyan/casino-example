import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";

import { Button } from "@/ui/index";
import { formatAddress } from "@/utils/formatAddress";

import style from "./account.module.css";

export function Account() {
  const { address, isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const { disconnect } = useDisconnect();
  const router = useRouter();

  if (!isConnected && !isLoading) {
    router.push("/");
  }
  if (!address || isLoading) return <div>Loading...</div>;

  const handleDisconnect = () => {
    setIsLoading(true);
    disconnect();
    router.push("/");
    setIsLoading(false);
  };

  return (
    <main className={style.root}>
      <p>{formatAddress(address)}</p>
      <Button onClick={handleDisconnect}>Disconnect</Button>
    </main>
  );
}

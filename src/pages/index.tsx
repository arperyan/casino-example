import { WalletButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Head from "next/head";
import { useRouter } from "next/router";

import { useHasWallet } from "@/hooks/useHasWallet";

import styles from "../styles/Home.module.css";

function Home() {
  const hasWallet = useHasWallet();
  const { isConnected } = useAccount();
  const router = useRouter();

  if (isConnected) {
    router.push("/account");
  }
  if (!hasWallet) return <p>You will need MetaMask to use this app.</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Casino Games App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main style={{ margin: "1rem" }}>
        <WalletButton wallet="metamask" />
      </main>
    </div>
  );
}

export default Home;

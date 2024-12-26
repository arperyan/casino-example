import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";

const PROJECT_ID = "a2ba5ac7a0b19a9ccccb830eda561d07";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet],
    },
  ],
  {
    appName: "Casino Gaming App",
    projectId: PROJECT_ID,
  }
);

export const config = createConfig({
  connectors,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

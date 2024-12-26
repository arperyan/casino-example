import { Account } from "@/components/Account";
import Head from "next/head";

function AccountPage() {
  return (
    <div>
      <Head>
        <title>Account</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Account />;
    </div>
  );
}

export default AccountPage;

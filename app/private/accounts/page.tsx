import Link from "next/link";
import React from "react";
import Image from "next/image";
const AccountsPage = () => {
  return (
    <div>
      <Link href="/private/accounts/fees">
        <Image src="/images/fees.jpeg" alt="Fees" height={200} width={200} />
      </Link>Fees
      <Link href="/private/accounts/journals">
        <Image src='/images/fees.jpeg' alt="Accounts/Journals" height={200} width={200} />
      </Link>Accounts/Journals
      <Link href="/private/accounts/misc_transactions">
        <Image src="/images/fees.jpeg" alt="Misc Transactions" height={200} width={200} />
      </Link>Misc Transactions
    </div>
  );
};

export default AccountsPage;

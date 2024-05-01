import Link from "next/link";
import React from "react";
import Image from "next/image";
const AccountsPage = () => {
  return (
    <div className="flex justify-center flex-row items-center">
      <div className="brightness-90 hover:brightness-100 mt-32 mx-10 bg-gray-500">

      <Link className="decoration-transparent text-white" href="/private/accounts/fees">
        <Image src="/images/fees.jpeg" alt="Fees" height={200} width={200} />
        Fees
      </Link>
      </div>
      <div className="brightness-90 hover:brightness-100 mt-32 mx-10 bg-blue-600">

      <Link className="decoration-transparent text-white" href="/private/accounts/journals">
        <Image src='/images/fees.jpeg' alt="Accounts/Journals" height={200} width={200} />
        Accounts/Journals
      </Link>
      </div>
      <div className="brightness-90 hover:brightness-100 mt-32 mx-10 bg-orange-500">

      <Link className="decoration-transparent text-white" href="/private/accounts/misc_transactions">
        <Image src="/images/fees.jpeg" alt="Misc Transactions" height={200} width={200} />
        Misc Transactions
      </Link>
      </div>
    </div>
  );
};

export default AccountsPage;

import dbConnect from "@/app/db/database";
import {
  instituteAccount,
  jouranlEntry,
  smsAccountDetails,
} from "@/app/lib/models/account";
import { NextRequest, NextResponse } from "next/server";

export const createAccount = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      accountType,
      bankName,
      accounHoldertName,
      AccountNumber,
      IFSC,
      MerchantType,
      saltKey,
      bankBranchAddress,
    } = reqBody;
    try {
      const res = await instituteAccount.create({
        accountType: accountType,
        bankName: bankName,
        accounHoldertName: accounHoldertName,
        AccountNumber: AccountNumber,
        IFSC: IFSC,
        MerchantType: MerchantType,
        saltKey: saltKey,
        bankBranchAddress: bankBranchAddress,
      });
      return NextResponse.json(
        { success: true, message: "institue account added" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
export const createSmsAccountDetails = async (
  req: NextRequest,
  res: NextResponse
) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      userName,
      password,
      urlMark,
      response,
      availableSmsCount,
      smsProvide,
      isOpted,
    } = reqBody;
    try {
      const res = await smsAccountDetails.create({
        userName: userName,
        password: password,
        urlMark: urlMark,
        response: response,
        availableSmsCount: availableSmsCount,
        smsProvide: smsProvide,
        isOpted: isOpted,
      });
      return NextResponse.json(
        { success: true, message: "institue account added" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};

const createJournals = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();

  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      transactionDate,
      fromTrasaction,
      toTrasaction,
      transactionAmount,
      narration,
      amount,
    } = reqBody;
    try {
      const res = await jouranlEntry.create({
        transactionDate: transactionDate,
        fromTrasaction: fromTrasaction,
        toTrasaction: toTrasaction,
        transactionAmount: transactionAmount,
        narration: narration,
        amount: amount,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};

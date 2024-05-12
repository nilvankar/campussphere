import mongoose from "mongoose";
import { string } from "zod";

const instituteAccountSchema = new mongoose.Schema({
  accountType: { type: String, required: true },
  bankName: { type: String, required: true },
  accounHoldertName: { type: String, required: true },
  AccountNumber: { type: Number, required: true },
  IFSC: { type: String, required: true },
  MerchantType: { type: String, required: true },
  saltKey: { type: String, required: true },
  bankBranchAddress: { type: String, required: true },
});
export const instituteAccount =
  mongoose.models.instituteAccount ||
  mongoose.model("instituteAccount", instituteAccountSchema);

const smsAccountDetailsSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  urlMark: { type: String, required: true },
  response: { type: String, required: true },
  availableSmsCount: { type: String, required: true },
  smsProvide: { type: String, required: true },
  isOpted: { type: String, required: true },
});
export const smsAccountDetails =
  mongoose.models.smsAccountDetails ||
  mongoose.model("smsAccountDetails", smsAccountDetailsSchema);

const jouranlEntrySchema = new mongoose.Schema({
  transactionDate: { type: String, required: true },
  fromTrasaction: { type: String, required: true },
  toTrasaction: { type: String, required: true },
  transactionAmount: { type: Number, required: true },
  narration: { type: String, required: true },
  amount: { type: Number, required: true },
});
export const jouranlEntry=mongoose.models.jouranlEntry||mongoose.model('jouranlEntry',jouranlEntrySchema)

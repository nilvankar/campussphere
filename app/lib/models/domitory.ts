import mongoose, { Document, Schema } from "mongoose";
import {
  dormBuildingType,
  dormTimetableType,
  outPassType,
  roomMgmtType,
  wardenType,
} from "../types/schema";

const dormBuildingSchema: Schema<dormBuildingType> = new mongoose.Schema({
  BuldingName: { type: String, required: true },
  DomType: { type: String, required: true, enum: ["Boys", "Girls"] },
  NumberofFloor: { type: Number, required: true },
  InCharge: { type: String, required: true },
  MaximumCapacityl: { type: Number, required: true },
});

export const dormBuildingModel =
  mongoose.models.dormBuildingModel ||
  mongoose.model<dormBuildingType>("dormBuildingModel", dormBuildingSchema);

const roomMgmtSchema: Schema<roomMgmtType> = new mongoose.Schema({
  FloorNo: { type: Number, required: true },
  RoomType: { type: String, required: true },
  RoomNo: { type: Number, required: true },
  TotalBeds: { type: Number, required: true },
  AvailableBeds: { type: Number, required: true },
});

export const roomMgmtModel =
  mongoose.models.roomMgmtModel ||
  mongoose.model<roomMgmtType>("roomMgmtModel", roomMgmtSchema);


const wardenMgmt: Schema<wardenType> = new mongoose.Schema({
  wardenName: { type: String, required: true },
});
export const wardenMgmtModel =
  mongoose.models.wardenMgmtModel ||
  mongoose.model<wardenType>("wardenMgmtModel", wardenMgmt);

const dormTimetableSchema = new mongoose.Schema({
  DormitoryActivity: { type: String, required: true },
  StartTime: { type: String, required: true },
  EndTime: { type: String, required: true },
});
export const dormTimetable =
  mongoose.models.dormTimetable ||
  mongoose.model<dormTimetableType>("dormTimetable", dormTimetableSchema);

const dormVisitorsSchema = new mongoose.Schema({
  dateOfVisit: { type: String, required: true },
  whom: { type: String, required: true },
  visitorName: { type: String, required: true },
  relation: { type: String, required: true },
  purpose: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  checkInTime: { type: String, required: true },
  checkOutTime: { type: String, required: true },
});

export const dormVisitors =
  mongoose.models.dormVisitors ||
  mongoose.model("dormVisitors", dormVisitorsSchema);

const outPassSchema: Schema<outPassType> = new mongoose.Schema({
  Status: { type: String, required: true },
});
export const outPassMgmt =
  mongoose.models.outPassMgmt || mongoose.model("outPassMgmt", outPassSchema);

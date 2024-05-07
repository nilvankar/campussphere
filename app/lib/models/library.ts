import mongoose, { Document, Schema } from "mongoose";

export interface configLibraryType extends Document {
  userRole: string;
  materialType: string;
  max_allow: number;
  max_day_allow: number;
  feesPerDay: number;
}
export interface inventoryType extends Document {
  title: string;
  lang: string;
  publisher: string;
  materialType: string;
  ISBN: number;
  availableQuantity: number;
  Price: number;
  totalQuantity: number;
}
const configLibrarySchema: Schema<configLibraryType> = new mongoose.Schema({
  userRole: { type: String, required: true },
  materialType: { type: String, required: true },
  max_allow: { type: Number, required: true },
  max_day_allow: { type: Number, required: true },
  feesPerDay: { type: Number, required: true },
});

export const configLibrary =
  mongoose.models.configLibrary ||
  mongoose.model("configLibrary", configLibrarySchema);

const inventorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  lang: { type: String, required: true },
  publisher: { type: String, required: true },
  materialType: { type: String, required: true },
  ISBN: { type: Number, required: true },
  availableQuantity: { type: Number, required: true },
  Price: { type: Number, required: true },
  totalQuantity: { type: Number, required: true },
});

export const inventory =
  mongoose.models.inventory || mongoose.model("inventory", inventorySchema);


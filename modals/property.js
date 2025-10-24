import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      requied: true,
    },
    baths: {
      type: Number,
      requied: true,
    },
    square_feet: {
      type: Number,
      requied: true,
    },
    amenities: [{ type: String }],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = models.Property || model("property", PropertySchema);
export default Property;

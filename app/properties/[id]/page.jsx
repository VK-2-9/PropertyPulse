import PropertyDetails from "@/app/components/PropertyDetails";
import PropertyHeaderImage from "@/app/components/PropertyHeaderImage";
import PropertyIMages from "@/app/components/PropertyIMages";
import connectDB from "@/config/database";
import Property from "@/modals/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async (props) => {
  // Await the params because in the App Router they can be a Promise
  const params = await props.params;
  await connectDB();

  // Handle both string and ObjectId cases
  const property = await Property.findById(params.id).lean();

  if (!property) {
    return {
      notFound: true,
    };
  }
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
        
      </section>
      <PropertyIMages images={property.images} />
    </>
  );
};

export default PropertyPage;

import PageHeader from "@/components/Pageheader";

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        h1Text={"Check out our Pricing"}
        h2Text={"Our Pricing is very simple"}
      ></PageHeader>
      <div className="bg-white text-slate-700  rounded-lg max-w-xs mx-auto p-4">
        <h3 className="font-bold text-3xl text-center">Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  );
}

import DemoSection from "@/components/DemoSection";
import PageHeader from "@/components/Pageheader";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeader
        h1Text={"Add Epic Captions to your videos"}
        h2Text={"Just update your video"}
      />

      <div className=" text-center mt-4">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}

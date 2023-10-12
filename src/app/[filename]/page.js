export default function FilePage({ params }) {
  const filename = params.filename;
  console.log(filename);
  return <div>{filename}</div>;
}

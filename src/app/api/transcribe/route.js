export async function GET(req) {
  const ulr = new URL(req.url);
  return Response.json("ok");
}

export default async function Org({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const orgId = (await params).slug;
  return (
    <div>
      <h1>This is org {orgId}</h1>
    </div>
  );
}

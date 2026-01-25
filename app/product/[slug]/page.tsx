export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const prodId = (await params).slug;
  return (
    <div>
      <h1>This is product {prodId}</h1>
    </div>
  );
}

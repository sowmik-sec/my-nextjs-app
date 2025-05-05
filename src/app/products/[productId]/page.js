function DynamicProductPage({ params, searchParams }) {
  console.log(params, searchParams);
  return <div>Dynamic product page {params.productId}</div>;
}

export default DynamicProductPage;

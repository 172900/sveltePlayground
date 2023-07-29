async function getDummyProduct() {
  const res = await fetch('https://dummyjson.com/products');
  const json = await res.json();
  console.log(json.products)
  return json.products
}

export default { getDummyProduct }
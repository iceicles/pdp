export default function ProductDetails({
    params,
    searchParams,
  }: {
    params: { productId: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return <h1>Details about product{params.productId}</h1>
  }
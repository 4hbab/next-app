interface Props {
  params: { slug: string[] };
}

const ProductDetailPage = ({ params: { slug } }: Props) => {
  return <div>Product Detail Page {slug.join("/")}</div>;
};

export default ProductDetailPage;

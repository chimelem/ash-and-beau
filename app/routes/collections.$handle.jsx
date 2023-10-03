import {useParams} from '@remix-run/react';

const seo = ({data}) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});
export const handle = {
  seo,
};

function Product() {
  const params = useParams();

  return <div>{params.handle}</div>;
}

export default Product;

import PropTypes from 'prop-types';
import { ProductCard } from 'components/Main/ProductCard/ProductCard';
import { GalleryStyle } from './GalleryProducts.styled';
//import { goods } from 'data/goods';

export function GalleryProducts({ shownGoods }) {

  return (
    <GalleryStyle>
          {shownGoods.map((data) => (
          <ProductCard data={data} key={data._id} />
      ))}
    </GalleryStyle>
  );
}

GalleryProducts.propTypes = {
  shownGoods: PropTypes.array.isRequired,
};
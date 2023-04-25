import PropTypes from 'prop-types';
import { ProductCard } from 'components/Main/ProductCard/ProductCard';
import { GalleryStyle } from './ProductsList.styled';
//import { goods } from 'data/goods';

export function ProductsList({ shownGoods }) {

  return (
    <GalleryStyle>
          {shownGoods.map((data) => (
          <ProductCard data={data} key={data._id} />
      ))}
    </GalleryStyle>
  );
}

ProductsList.propTypes = {
  shownGoods: PropTypes.array.isRequired,
};
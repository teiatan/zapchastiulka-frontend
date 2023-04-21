import { ImageThumb, ProductCardContainer, ProductImage, InfoCard, Name, Price, Description } from "./ProductCard.styled";
import PropTypes from 'prop-types';
import { useState } from "react";
const STOPPER = "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"


export function ProductCard({ data }) {
    const [pictureNumber/* , setPictureNumber */] = useState(0);
    const { name, price, photo, description, id } = data;
    /* const hendleButton = ({ target }) => {
        if (target.name === 'left') {
            console.log('ліва кнопка')
        }
         else{console.log('права кнопка')}
    } */

    return <ProductCardContainer to={`/product/${id}`} /* state={{from: goBack}} */>
        <ImageThumb>
        {<ProductImage src={photo[0]? photo[pictureNumber]?.src : STOPPER} alt={photo[pictureNumber]?.alt}  height="300px"/>}
            {/* {photo.length > 1 &&
                {<ButtonThumb>
                    <button type="button" onClick={hendleButton} name='left'>left</button>
                    <button type="button" onClick={hendleButton} name='right'>right</button>
                </ButtonThumb>}} */}
        </ImageThumb>
        <InfoCard>
            <Name>{name}</Name>
            <Description>{description.slice(0, 150)}{description.length > 150 && "..."}</Description>
            {/* {category.length !== 0 && <a href='/'> Категорії: {category.join(' ')}</a>} */}
            <Price>    {price} грн/шт</Price>
        </InfoCard>
    </ProductCardContainer>
}

ProductCard.propTypes ={
    data: PropTypes.object,
};
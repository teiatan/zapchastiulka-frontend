import { Link } from 'react-router-dom';
import { device } from '../../../utils/mediaQueries';

const { default: styled } = require('@emotion/styled');
export const ProductCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 8px;
  height: 340px;
  margin: 4px;
  padding: 20px;
  background-color: ${props => (props.theme.productCard.background)};
  box-shadow: 0px 0px 10px ${props => (props.theme.productCard.border)};
  color: ${props => (props.theme.productCard.text)};

  width: calc((100% - 192px) / 4);

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 15px ${props => (props.theme.productCard.borderHover)};
    background-color: ${props => (props.theme.productCard.backgroundHover)};
    color: ${props => (props.theme.productCard.textHover)};
  }
  @media (max-width: 1200px) {
    width: calc((100% - 96px) / 2);
  }
  @media (max-width: 992px) {
    width: calc((100% - 96px) / 2);
  }
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 10px;
`;
export const ButtonThumb = styled.div`
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    height: 30px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const InfoCard = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin-top: 10px;
  height: 24%;
  width: 100%;
  min-height: 90px;

  ${device.desktop} {
    min-height: 120px;
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.productCard.nameText};
  font-weight: 600;
  text-align: start;
`;

export const Price = styled.p`
  //color: ${props => props.theme.productCard.priceText};
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Description = styled.p`
  //color: ${props => props.theme.productCard.descriptionText};
  font-size: 12px;
  line-height: 1;
  text-align: justify;
`;

export const BasketContainer = styled.div`
  position: absolute;
  bottom: 120px;
  right: 0;
`;

export const MainDiv = styled.div`
  position: relative;
`;
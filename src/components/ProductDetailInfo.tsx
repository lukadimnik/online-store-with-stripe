const ProductDetailInfo = ({ price, description }) => {
    return <><p>
        {description} sold at <strong>${price}</strong> per piece.
    </p>
        <button>${price}</button></>;
}

export default ProductDetailInfo;
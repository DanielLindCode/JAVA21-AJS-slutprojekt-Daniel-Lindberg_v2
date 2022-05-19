import React from "react";

const ProductCard = (props) => {
  const { product, addItem } = props;

  return (
    <section className="card-container">
      <div className="productCard-content">
        <img className="productCard-img" src={product.img} alt={product.name} />
        <h2 className="name">{product.name}</h2>
        <h5 className="price">{product.price} Gold</h5>
        <div className="product-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          </p>
        </div>
        <div className="productCard-buttonContainer">
          <div className="like-button">Like</div>
          <div className="card-button" onClick={() => addItem(product)}>
            <p>Add to wagon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

function Product(props) {
    return (
        <section className="product">
            <img className="img" src={props.url} alt="Image Will be loaded Soon"/>
            <h3>{props.name}</h3>
            <p>{props.price}Rs</p>
        </section>
    );
}

export default Product;
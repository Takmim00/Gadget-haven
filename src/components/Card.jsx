const Card = ({ gadget }) => {
    const {product_image,product_title, price} =gadget || {}
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt="Gadgets"
          className="rounded-xl h-56 object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-500">Price : {price}k</p>
        <div>
          <button className="btn btn-outline text-purple-600 border-2 rounded-full ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

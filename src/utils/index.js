import toast from "react-hot-toast";

const getAllCart = () => {
  const all = localStorage.getItem("addCart");
  if (all) {
    const addCart = JSON.parse(all);
    return addCart;
  } else {
    return [];
  }
};
const getAllWishlist = () => {
  const all = localStorage.getItem("addWish");
  if (all) {
    return JSON.parse(all);
  } else {
    return [];
  }
};
const addToCart = (gadgets) => {
  const addCart = getAllCart()
  const isExist = addCart.find(item => item.id == gadgets.id)
  if (isExist) return toast.error(' already added!')

    addCart.push(gadgets)
  localStorage.setItem('addCart', JSON.stringify(addCart))
  toast.success('Successfully added to card')
};
const addToWist = (gadgets) => {
  const addWish = getAllWishlist();
  const isExist = addWish.find(item => item.id == gadgets.id);
  if (isExist) return toast.error('Wish list already added!');

  addWish.push(gadgets);
  localStorage.setItem('addWish', JSON.stringify(addWish));
  toast.success('Successfully added to wishlist');
};

const removeFromCart = (id) => {
  const cart = getAllCart().filter(item => item.id !== id);
  localStorage.setItem('addCart', JSON.stringify(cart));
  toast.success('Item removed from cart');
};

const removeFromWishlist = (id) => {
  const wishlist = getAllWishlist().filter(item => item.id !== id);
  localStorage.setItem('addWish', JSON.stringify(wishlist));
  toast.success('Item removed from wishlist');
};


export { addToCart, getAllCart, getAllWishlist , addToWist , removeFromCart , removeFromWishlist};

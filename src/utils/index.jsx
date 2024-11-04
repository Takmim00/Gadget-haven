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
const addToCart = (gadgets) => {

  const addCart = getAllCart()
  const isExist = addCart.find(item => item.id == gadgets.id)
  if (isExist) return toast.error(' already exists!')

    addCart.push(gadgets)
  localStorage.setItem('addCart', JSON.stringify(addCart))
  toast.success('Successfully added!')
};

export { addToCart, getAllCart };

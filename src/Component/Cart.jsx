const Cart = ({ cartItems, removeFromCart }) => {
    return (
      <div className="fixed top-16 right-4 w-64 bg-white shadow-lg border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Your Cart</h2>
        
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b items-center">
                <span>{item.name} - ${item.price}</span>
                <button 
                  onClick={() => removeFromCart(index)} 
                  className="text-red-500 text-sm font-bold ml-2 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            ))}
  
            <button className="w-full mt-4 bg-green-500 text-white p-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;
  
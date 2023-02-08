import { createStore } from 'vuex'

//cart function
function updateLocalStorage(cart){
  localStorage.seItems('cart'.JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  //check for quantity if it is null
  getters: {
    productQuantity: state => product =>{
      const item = state.cart.find (i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    // cart state
    cartItems: state=>{
      return state.cart
    }
     
  },
  mutations: {
    //Add Item to cart
    addToCart(state,product){
      let item = state.cart.find(i => i.id === product.id)

      if (item){
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.cart)
    },
    //remove item to cart

    removeFromCart(state, product){
      let item = state.cart.find(i => i.id === product.id)

      if (item){
        if (item.quantity > 1){
          item.quantity--
        } else{
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    }

  },
  actions: {
  },
  modules: {
  }
})

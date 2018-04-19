const products = (state = [], action) => {
  switch (action.type) {
    /*case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { id: todo.id, text: todo.text, completed: !todo.completed}
          : todo
      )*/
    case 'PRODUCT_PRESSED':
      return state.map(product =>
        (product.id === action.id)
          ? { id: product.id, text: product.text, pressed: !product.pressed}
          : product
        )
      }
    default:
      return state
}

export default Products

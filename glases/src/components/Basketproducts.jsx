import { useSelector } from "react-redux"
import Product from "./Product"

function Basketproducts() {
    const {products} = useSelector ((state) => state.basket)
    console.log(products);
  return (
    <div>
        {
            products.map((el) => {
                const {name, price, image, amount} = el
                return(
                <Product key={new Date().getTime() + Math.random()}
                name={name}
                image={image}
                price={price}
                amount={amount} />
                )
            })
        }
    </div>
  )
}

export default Basketproducts
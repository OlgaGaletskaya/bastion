import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Products from "./pages/Products"
import ProductsType from "./pages/ProductsType"
import Shop from "./pages/Shop"
import { BASKET, DEVICE_PAGE, PRODUCTS, PRODUCTS_TYPE, SHOP } from "./utils/consts"

export const publicRoutes = [
    {
        path : SHOP,
        Component : Shop,
    },
    {
        path : BASKET,
        Component : Basket,
    },
    {
        path : DEVICE_PAGE,
        Component : DevicePage,
    },
    {
        path : PRODUCTS,
        Component : Products,
    },
    {
        path : PRODUCTS_TYPE,
        Component : ProductsType,
    },
    

]
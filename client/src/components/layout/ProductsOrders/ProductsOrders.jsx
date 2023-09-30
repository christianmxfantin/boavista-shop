import { useEffect, useState } from "react";
import EmptyData from "../EmptyData/EmptyData";
import OrderItem from "../OrderItem/OrderItem";
import {
  OrdersContainer,
  ProductsOrdersContainer,
} from "./ProductsOrders.styles";
import { useSelector } from "react-redux";
import { getOrdersResponse } from "../../../api/orders";

const ProductsOrders = () => {
  const { user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const allOrders = await getOrdersResponse();
        const orders = allOrders.data.filter(
          (order) => order.userId === user.id
        );
        setOrders(orders);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [user.id]);

  return (
    <ProductsOrdersContainer>
      {orders.length === 0 ? (
        <EmptyData iconName="orders" size={100} title="órdenes" />
      ) : (
        <OrdersContainer>
          {orders.map((order) => {
            return <OrderItem key={order.id} order={order} />;
          })}
        </OrdersContainer>
      )}
    </ProductsOrdersContainer>
  );
};

export default ProductsOrders;

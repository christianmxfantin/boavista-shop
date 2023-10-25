import { useEffect, useState } from "react";
import EmptyData from "../EmptyData/EmptyData";
import OrderItem from "../OrderItem/OrderItem";
import {
  OrdersContainer,
  ProductsOrdersContainer,
} from "./ProductsOrders.styles";
import { useSelector } from "react-redux";
import { getOrdersResponse } from "../../../api/orders";
import CardAddressSkeleton from "../../skeleton/CardAddressSkeleton/CardAddressSkeleton";

const ProductsOrders = () => {
  const { user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 5000));

  useEffect(() => {
    const getData = async () => {
      try {
        await fakePromise();
        const allOrders = await getOrdersResponse();
        const orders = allOrders.data.filter(
          (order) => order.userId === user.id
        );
        setOrders(orders);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingOrders(false);
      }
    };
    getData();
  }, [user.id]);

  return (
    <ProductsOrdersContainer>
      {orders.length === 0 && !loadingOrders ? (
        <EmptyData iconName="orders" size={100} title="órdenes" />
      ) : loadingOrders ? (
        <CardAddressSkeleton />
      ) : (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <OrderItem
                key={order.id}
                order={order}
                orders={orders}
                setOrders={setOrders}
              />
            );
          })}
        </OrdersContainer>
      )}
    </ProductsOrdersContainer>
  );
};

export default ProductsOrders;

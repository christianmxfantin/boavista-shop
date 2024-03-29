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
import { responseError, statusErrors } from "../../../utils/toastErrors";

const ProductsOrders = () => {
  const { user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const allOrders = await getOrdersResponse();
        const orders = allOrders.data.filter(
          (order) => order.userId === user.id
        );
        setOrders(orders);
      } catch (error) {
        statusErrors(error);
        responseError(error);
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
        <OrdersContainer sx={{ maxHeight: "160px", overflowY: "auto" }}>
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

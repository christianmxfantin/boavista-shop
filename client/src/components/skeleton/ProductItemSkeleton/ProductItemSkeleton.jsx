import { Card, CardContent, Skeleton } from "@mui/material";

const ProductItemSkeleton = () => {
  return (
    <Card sx={{ width: "95%", height: "263px", marginTop: "12px" }}>
      <Skeleton variant="rectangular" height={180} />
      <CardContent sx={{ padding: "8px" }}>
        <Skeleton />
        <Skeleton sx={{ marginTop: "4px" }} />
      </CardContent>
    </Card>
  );
};

export default ProductItemSkeleton;

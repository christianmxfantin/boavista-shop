import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";

const DashboardTableSkeleton = () => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <Skeleton sx={{ height: "90px" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Skeleton sx={{ height: "50px" }} />
          </TableRow>
          <TableRow>
            <Skeleton sx={{ height: "50px" }} />
          </TableRow>
          <TableRow>
            <Skeleton sx={{ height: "50px" }} />
          </TableRow>
          <TableRow>
            <Skeleton sx={{ height: "50px" }} />
          </TableRow>
          <TableRow>
            <Skeleton sx={{ height: "50px" }} />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default DashboardTableSkeleton;

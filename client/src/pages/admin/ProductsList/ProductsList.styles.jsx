import {
  Box,
  Table,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductsListContainer = styled(Box)(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
}));

export const ProductsListTable = styled(Table)(({ theme }) => ({
  // minWidth: 700,
  borderRadius: theme.spacing(1.5), //12px
  // backgroundColor: theme.palette.primary[100],
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

import {
  Box,
  Table,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardTableContainer = styled(Box)(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
}));

export const TableList = styled(Table)(({ theme }) => ({
  borderRadius: theme.spacing(1.5), //12px
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.secondary.A100,
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

export const TableNameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const TableName = styled(Typography)(({ theme }) => ({
  //styles
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

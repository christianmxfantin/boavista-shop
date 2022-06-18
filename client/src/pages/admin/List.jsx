import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: theme.spacing(3), //24px
}));

const ListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
  fontWeight: "500",
}));

const List = ({ data }) => {
  return (
    <ListContainer>
      <ListTitle variant="h4">Listado de {data}</ListTitle>
    </ListContainer>
  );
};

export default List;

import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ListContainer, ListTitle, ListData } from "./List.styles";
import DashboardTable from "../../../components/layout/DashboardTable/DashboardTable";
import { Box, Button } from "@mui/material";
import TableActions from "../../../components/layout/TableActions/TableActions";

const List = ({ typeData }) => {
  const theme = useTheme();

  const [showModal, setShowModal] = useState(false);

  const handleAddItems = () => {
    setShowModal(true);
  };

  return (
    <main>
      <ListContainer>
        <ListTitle variant="h4">
          Listado de {typeData === "users" ? "Usuarios" : "Productos"}
        </ListTitle>
        <ListData>
          <DashboardTable typeData={typeData} />
        </ListData>
      </ListContainer>
      <Box sx={{ display: "flex", paddingRight: theme.spacing(2) }}>
        <Button
          variant="contained"
          onClick={handleAddItems}
          sx={{
            marginLeft: "auto",
            backgroundColor: theme.palette.secondary[900],
            "&:hover": {
              color: theme.palette.secondary[700],
              backgroundColor: theme.palette.secondary[100],
            },
          }}
        >
          Agregar
        </Button>
      </Box>
      <TableActions
        showModal={showModal}
        setShowModal={setShowModal}
        typeData={typeData}
      />
    </main>
  );
};

export default List;

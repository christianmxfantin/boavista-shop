import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  ListContainer,
  ListTitle,
  ListData,
  ButtonsContainer,
} from "./List.styles";
import DashboardTable from "../../../components/layout/DashboardTable/DashboardTable";
import { Button } from "@mui/material";
import TableActions from "../../../components/layout/TableActions/TableActions";
import DashboardModal from "../../../components/layout/DashboardModal/DashboardModal";

const List = ({ typeData }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleAddItems = () => {
    setShowModal(true);
  };

  const handleChangePrices = () => {
    setOpenDialog(true);
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
      <ButtonsContainer>
        <Button
          variant="contained"
          onClick={handleBack}
          sx={{
            backgroundColor: theme.palette.primary[500],
            "&:hover": {
              backgroundColor: theme.palette.primary[300],
            },
          }}
        >
          Atrás
        </Button>
        <Button
          variant="outlained"
          onClick={handleChangePrices}
          sx={{
            color: theme.palette.error[500],
          }}
        >
          Cambio Masivo de Precios
        </Button>
        <Button
          variant="contained"
          onClick={handleAddItems}
          sx={{
            backgroundColor: theme.palette.secondary[900],
            "&:hover": {
              color: theme.palette.secondary[700],
              backgroundColor: theme.palette.secondary[100],
            },
          }}
        >
          Agregar
        </Button>
      </ButtonsContainer>
      <TableActions
        showModal={showModal}
        setShowModal={setShowModal}
        typeData={typeData}
      />
      <DashboardModal
        formType="changePrices"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </main>
  );
};

export default List;

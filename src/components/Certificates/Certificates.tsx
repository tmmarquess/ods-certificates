import React, { useState } from "react";
import { CardImage, CardTitle, Certificate, Container, ProgressBar } from "./styles";
import TestPhoto from "./TestPhoto.jpg";
import { Typography, Modal, Box, Grid, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "24px",
};

export const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpen = certificate => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  const handleDownload = () => {
    // Lógica para download do certificado
    alert("Download iniciado");
  };

  return (
    <>
      <Container>
        {["Curso 1", "Curso 2", "Curso 3", "Curso 4"].map((title, index) => (
          <Certificate key={index} onClick={() => handleOpen(title)}>
            <CardImage src={TestPhoto} />
            <CardTitle>{title}</CardTitle>
            <ProgressBar progress={90} />
          </Certificate>
        ))}
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton onClick={handleDownload} sx={{ position: "absolute", top: 16, right: 16 }}>
            <DownloadIcon />
          </IconButton>
          <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mt: 2 }}>
            Certificado de Conclusão
          </Typography>
          <Grid height="65%" display="flex" flexDirection="column" justifyContent="space-evenly">
            <Typography variant="h5">Certificamos que</Typography>
            <Typography variant="h3">Thiago marques</Typography>
            <Typography variant="h5" sx={{ mt: 5 }}>
              concluiu com êxito o curso de
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {selectedCertificate}
            </Typography>
            <Typography sx={{ mt: 2 }}>em 21 de julho de 2024.</Typography>
          </Grid>
          <Typography sx={{ mt: 4, textAlign: "right" }}>Assinatura</Typography>
        </Box>
      </Modal>
    </>
  );
};

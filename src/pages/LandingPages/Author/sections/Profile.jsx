import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
//
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/bruce-mars.jpg";
//
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -40 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Burce Mars"
              style={{ width: "400px", height: "400px" }}
              shadow="xl"
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">GC EL ILUSIONISTA</MKTypography>
                <Grid>
                  <MKButton
                    style={{ marginRight: "10px" }}
                    variant="outlined"
                    color="info"
                    size="small"
                  >
                    <FacebookIcon sx={{ mr: 0.5 }} />
                    Facebook
                  </MKButton>
                  <MKButton
                    style={{ marginRight: "10px" }}
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    <InstagramIcon sx={{ mr: 0.5 }} />
                    Instagram
                  </MKButton>
                  <MKButton variant="outlined" color="dark" size="small">
                    <MusicNoteIcon sx={{ mr: 0.5 }} />
                    Tiktok
                  </MKButton>
                </Grid>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Publicaciones
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Seguidores
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Temas musicales
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                {`Letrista, cántate, rapero, mago, dibujante, pintor, deportista Yo soy GC; 
                  es la abreviación de mis dos apellidos Giménez Correia, así represento a mis dos familias. 
                  Te doy la bienvenida a mi canal espero disfrutes de mis canciones pues son hechas con mucho esmero y dedicación, 
                  cada letra lleva un sentimiento ya sea amor, odio, rencor, alegría o cualquier otro, 
                  esa es mi misión transmitirte algún sentimiento o dejarte algunos valores morales 
                  🤘🏼🍃 YO SOY GC, MUCHO GUSTO!`}{" "}
                <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Más sobre mí <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;

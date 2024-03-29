import { Email, Facebook, WhatsApp, YouTube } from "@mui/icons-material";
import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextEditor from "../../components/text-editor";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { API } from "../../api";
import AuthService from "../../services/auth-service";
import SpecialLink from "../../components/special-link";
import { Coaching } from "../../classes/coaching";
import { USER_LINKS } from "../../links";
import { resolveURL } from "../../tools/helper-functions";

const useStyle = makeStyles((theme: Theme) => ({
  justifyContent: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "start",
      justifyContent: "start",
    },
  },
}));

export default function CoachingInformationOutput() {
  const classes = useStyle();
  const [coaching, setCoaching] = useState<Coaching | null>();
  useEffect(() => {
    setCoaching(AuthService.getCoaching());
  }, []);
  console.log("in coaching output", coaching);
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item container spacing={3} className={classes.justifyContent}>
        <Grid item xs={12} md={5} lg={4} className={classes.justifyContent}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            src={resolveURL(coaching?.image)}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.justifyContent}
          >
            <Grid item>
              <Typography variant="h5">{coaching?.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{`${coaching?.address?.village}, ${coaching?.address?.upazila?.name}, ${coaching?.address?.upazila?.district?.name}, ${coaching?.address?.upazila?.district?.division?.name}`}</Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={2}
              alignItems="center"
              className={classes.justifyContent}
            >
              <Grid item>
                <SpecialLink href={"http://" + coaching?.facebookLink}>
                  <IconButton>
                    <Facebook />
                  </IconButton>
                </SpecialLink>
              </Grid>
              <Grid item>
                <SpecialLink href={"http://" + coaching?.whatsappNo}>
                  <IconButton>
                    <WhatsApp />
                  </IconButton>
                </SpecialLink>
              </Grid>
              <Grid item>
                <SpecialLink href={"http://" + coaching?.youtubeLink}>
                  <IconButton>
                    <YouTube />
                  </IconButton>
                </SpecialLink>
              </Grid>
              <Grid item>
                <SpecialLink href={"http://" + coaching?.email}>
                  <IconButton>
                    <Email />
                  </IconButton>
                </SpecialLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextEditor value={coaching?.description} readOnly />
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <SpecialLink href={USER_LINKS.adminCoachingInput.path}>
          <Button variant="contained">Update</Button>
        </SpecialLink>
      </Grid>
    </Grid>
  );
}

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { AddCircle, DeleteForever, RemoveCircle } from "@mui/icons-material";
import MyTable from "../../components/my-table";
import DialogLayout from "../../layouts/dialog-layout";
import DropDown from "../../components/dropdown";
import { ADMIN_LINKS } from "./../../links";
import { useNavigate } from "react-router-dom";

function AddBatch() {
  const [state, setState] = useState({ open: false, value: null });
  function updateState(object) {
    setState({ ...state, ...object });
  }
  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddCircle />}
        onClick={(event) => {
          setState({ ...state, open: true });
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        Add Batch
      </Button>
      <DialogLayout
        open={state.open}
        onClose={(event) => {
          setState({ ...state, open: false });
          event.stopPropagation();
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <DropDown
              label="Batch"
              value={state.value}
              onChange={(event, newValue) => updateState({ value: newValue })}
              options={[
                { value: 1, label: "Physics" },
                { value: 2, label: "Chemistry" },
                { value: 3, label: "Math" },
                { value: 4, label: "Biology" },
              ]}
              optionLabel="label"
            />
          </Grid>
        </Grid>
      </DialogLayout>
    </>
  );
}

export default function StudentBatchDetails() {
  const navigate = useNavigate();
  return (
    <Grid container direction="column">
      <Accordion>
        <AccordionSummary>
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">HSC-23 Program</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Admit at <br />
                30/05/2022
              </Typography>
            </Grid>
            <Grid item>
              <AddBatch />
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <MyTable
            title="HSC 2023"
            //@ts-ignore
            columns={[
              {
                title: "Name",
                field: "subject",
              },
              {
                title: "Joined",
                field: "date",
              },
            ]}
            data={[
              { subject: "Physics", date: "20/04/2022" },
              { subject: "Chemistry", date: "20/04/2022" },
              { subject: "Math", date: "20/04/2022" },
              { subject: "Biology", date: "20/04/2022" },
            ]}
            onRowClick={(event) => navigate(ADMIN_LINKS.batch.path)}
            // actions={[
            //   {
            //     icon: (rowData) => <RemoveCircle />,
            //     tooltip: "Remove from batch",
            //     onClick: (event, rowData) => {
            //       console.log(rowData);
            //     },
            //   },
            // ]}
          />
          <Grid container direction="column">
            {/* <Grid
              item
              container
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Batch name</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteForever />}
                  onClick={(event) => {}}
                >
                  Remove
                </Button>
              </Grid>
            </Grid> */}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SaveCancelButtons from "../../components/save-cancel-buttons";
import { programs, subjects } from "./../../data";
import Admin from "./../../layouts/admin";
import Event from "./event";
import TextEditor from "./../../components/text-editor";

type CreateProgramProps = {};
type CreateProgramStates = {
  programId: number;
  subjectId: number;
};

export default function CreateProgram(props: CreateProgramProps) {
  return (
    <Admin>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth variant="outlined" label="Program Name" />
        </Grid>
        <Grid item xs={12}>
          <TextEditor />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth variant="outlined" label="Admission Fees" />
        </Grid>
        <Grid item container>
          <SaveCancelButtons />
        </Grid>
      </Grid>
    </Admin>
  );
}

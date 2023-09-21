import React from "react";
import {
  TextField,
  Button,
  Container,
  Divider,
  Paper,
  Grid,
} from "@material-ui/core";
import {
  Card,
  CardHeader,
  CardContent,
  InputAdornment,
  withStyles,
} from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SchoolIcon from "@material-ui/icons/School";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "date-fns";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});
const Profile = ({ values, classes, handleChange, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Education Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            {/* College/University */}
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="college"
                label="College/University"
                style={{ width: "80%" }}
                required
                value={values.college}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* From Year */}
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear1"
                label="From Year"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.fromyear1}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* To Year */}
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear1"
                type="date"
                label="To Year"
                style={{ width: "80%" }}
                required
                value={values.toyear1}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Qualification */}
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification1"
                required
                value={values.qualification1}
                onChange={handleChange}
              />
            </Grid>
            {/* Description */}
            <Grid item md={8} sm={12} xs={12} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description1"
                required
                value={values.description1}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="center" lg={12}>
            {/* School */}
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="school"
                label="School"
                style={{ width: "80%" }}
                required
                value={values.school}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* From Year */}
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear2"
                label="From Year"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.fromyear2}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* To Year */}
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear2"
                label="To Year"
                type="date"
                style={{ width: "80%" }}
                required
                value={values.toyear2}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* Qualification */}
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification2"
                required
                value={values.qualification2}
                onChange={handleChange}
              />
            </Grid>
            {/* Description */}
            <Grid item md={8} sm={8} xs={8} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description2"
                required
                value={values.description2}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <Container className={classes.margin}>
        <Row>
          <Col xs={4} />
          <Col xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={goBack}
              startIcon={<NavigateBeforeIcon />}
            >
              Back
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={continueStep}
              endIcon={<NavigateNextIcon />}
            >
              Next
            </Button>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
      <p className="text-center text-muted">Page 2</p>
    </Paper>
  );
};

export default withStyles(styles)(Profile);

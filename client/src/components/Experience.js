import React from "react";
import { TextField, Button, Container, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import axios from "axios";
import { saveAs } from "file-saver";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import BusinessIcon from "@material-ui/icons/Business";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

function Experience(props) {
  const continueStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const createAndDownloadPDF = () => {
    axios
      .post("/create-pdf", props.values)
      .then(() => {
        axios
          .get("fetch-pdf", { responseType: "blob" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, `${props.values.firstname}'s Resume.pdf`);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { values, classes } = props;

  return (
    <Paper className={classes.padding}>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            {/* Experience 1 */}
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h5>
                <CheckCircleIcon />
                <span className="pl-3">Experience 1</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="institute1"
                label="Institute/Organisation"
                style={{ width: "90%" }}
                required
                value={values.institute1}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="position1"
                label="Position"
                style={{ width: "90%" }}
                required
                value={values.position1}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EventSeatIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="duration1"
                label="Duration"
                style={{ width: "90%" }}
                required
                value={values.duration1}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TimelapseIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "97%" }}
                name="experienceDescription1"
                required
                value={values.experienceDescription1}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="flex-start" lg={12}>
            {/* Experience 2 */}
            <Grid
              item
              xs={12}
              lg={4}
              alignItems="flex-end"
              alignContent="flex-end"
            >
              <h5>
                <CheckCircleIcon />
                <span className="pl-3">Experience 2</span>
              </h5>
            </Grid>
            <Grid item xs={0} lg={8} />
            <br />
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="institute2"
                label="Institute/Organisation"
                style={{ width: "90%" }}
                required
                value={values.institute2}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="position2"
                label="Position"
                style={{ width: "90%" }}
                required
                value={values.position2}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EventSeatIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="duration2"
                label="Duration"
                style={{ width: "90%" }}
                required
                value={values.duration2}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <TimelapseIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "97%" }}
                rows={3}
                name="experienceDescription2"
                required
                value={values.experienceDescription2}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
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
          <Col xs={4} />
        </Row>
      </Container>
      <p className="text-center text-muted">Page 4</p>
    </Paper>
  );
}

export default withStyles(styles)(Experience);

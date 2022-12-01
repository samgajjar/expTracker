import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  expTitle: {
    align: "center"
  }
};
export class Expense extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      expense: { description, expenseDate, provider, status }
      // expense: { expenseID, description, expenseDate, provider, status }
    } = this.props;
    return (
      <Card className={classes.card}>
        <div style={{ whiteSpace: "nowrap" }}>
          <CardContent>
            <Box
              component="div"
              align="left"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "12pt",
                fontWeight: "700"
              }}
            >
              {description}
            </Box>
            <br />
            <Typography align="left">Provider: {provider}</Typography>
            <Typography align="left">
              {/* Date: {dayjs(expenseDate).fromNow()} /  */}
              Date: {expenseDate}
            </Typography>
            {/* <Typography align="left">ID : {expenseID}</Typography> */}
            <Typography align="left">Status : {status}</Typography>
          </CardContent>
        </div>
        {/* <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions> */}
      </Card>
    );
  }
}

export default withStyles(styles)(Expense);

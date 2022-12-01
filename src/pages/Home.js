import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Expense from "../components/Expense.js";

let authenticated;
let decodedToken;
console.log("LS: ", localStorage.ExpTrackerToken);
const token = localStorage.ExpTrackerToken;
console.log("First: ", token);
if (token) {
  console.log("If block: ", token);
  decodedToken = jwtDecode(token);
  console.log("Decoded: ", decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    //window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
} else {
  console.log("then block: ", token);
  //    window.location.href = '/login';
}

export class Home extends Component {
  state = {
    expenses: null
  };
  componentDidMount() {
    axios
      .get("/expenses")
      .then((result) => {
        this.setState({
          expenses: result.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let recentExpenses = this.state.expenses ? (
      // this.state.expenses.map(expense =>
      //     <li key={expense.expenseID}>
      //     {expense.description}
      //     </li>
      // )
      // this.state.expenses.map(expense => <p key={expense.expenseID}>{expense.description}</p>)
      this.state.expenses.map((expense) => (
        <Expense key={expense.expenseID} expense={expense} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item sm={10} xs={10}>
          {/* {!token && <Navigate to="/login" replace={true} />} */}
          {recentExpenses}
        </Grid>
      </Grid>
    );
  }
}

export default Home;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Switchbutton from "./Switchbutton";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Tableads({
  data,
  handleDelete,
  handleActive,
  handleEdit,
  handleFeature,
  handleSold,
}) {
  const classes = useStyles();

  const handleActiveAd = (checked, id) => {
    console.log(checked);
    handleActive(checked, id);
  };

  const handleFeatureAd = (checked, id) => {
    console.log(checked, id);
    handleFeature(checked, id);
  };

  const handleSoldAd = (checked, id) => {
    console.log(checked, id);
    handleSold(checked, id);
  };

  return (
    <TableContainer component={Paper}>
      {console.log(data)}
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <strong>Title</strong>{" "}
            </TableCell>
            <TableCell align="center">
              <strong>Category</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Price</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Negotiable</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Reviewed</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Approved</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Rejected</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Active</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Feature Ad Request</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Feature Ad Active</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Sold Status</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Edit</strong>
            </TableCell>
            <TableCell align="center">
              {" "}
              <strong>Delete</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                {row.negotiable ? "Yes" : "No"}
              </TableCell>
              <TableCell align="center">
                {row.reviewed ? "Reviewed" : "Under Review"}
              </TableCell>
              <TableCell align="center">
                {row.approved ? "Approved" : "Not Approved"}
              </TableCell>
              <TableCell align="center">
                {row.rejected ? "Rejected" : "Not Rejected"}
              </TableCell>
              <TableCell align="center">
                {/* {row.reviewed ? } */}
                {row.approved ? (
                  <Switchbutton
                    func={handleActiveAd}
                    checked={row.active}
                    name={row._id}
                  />
                ) : (
                  ""
                )}

                {row.active ? "Active" : "Deactivated"}
              </TableCell>
              <TableCell align="center">
                {/* {row.reviewed ? } */}

                {row.featureAd ? null : (
                  <Switchbutton
                    className="ml-2"
                    func={handleFeatureAd}
                    checked={row.featureAdRequest}
                    name={row._id}
                  />
                )}

                {row.featureAd === false && row.featureAdRequest === false
                  ? "Request for Feature Ad"
                  : "Requested"}
              </TableCell>
              <TableCell align="center">
                {row.featureAd === false ? "Not Featured" : "Featured"}
              </TableCell>
              <TableCell align="center">
                {row.sold ? null : (
                  <Switchbutton
                    className="ml-2"
                    func={handleSoldAd}
                    checked={row.sold}
                    name={row._id}
                  />
                )}

                {row.sold === false ? "Mark as Sold" : "Sold"}
              </TableCell>
              <TableCell align="center">
                <button
                  class="btn btn-primary btn-sm"
                  onClick={() => handleEdit(row)}
                >
                  Edit <i class="far fa-edit"></i>
                </button>
              </TableCell>
              <TableCell align="center">
                <button
                  class="btn btn-danger btn-sm"
                  onClick={() => handleDelete(row._id)}
                >
                  Delete <i class="far fa-trash-alt"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

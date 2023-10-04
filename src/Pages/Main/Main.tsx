import { useEffect, useState } from "react";
import { getUniversitesFromApi } from "../../Utils/ApiUtils.ts";
import { UniversityObj } from "../../Utils/Types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, CircularProgress } from "@mui/material";
const Main = () => {
  const [universites, setUniversites] = useState<UniversityObj[]>([]);
  useEffect(() => {
    getUniversites();
  }, []);

  const getUniversites = async () => {
    const results: UniversityObj[] = await getUniversitesFromApi();
    const _results: UniversityObj[] = results.slice(0, 20);
    setUniversites(_results);
  };
  return (
    <Box>
      {universites.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No. </TableCell>
                <TableCell align="left">University Name</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="right">alpha_two_code</TableCell>
                <TableCell align="right">number of domains</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {universites.map((university, idx) => (
                <TableRow
                  key={university.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {idx +1}
                  </TableCell>
                  <TableCell align="left">{university.name}</TableCell>
                  <TableCell align="left">{university.country}</TableCell>
                  <TableCell align="right">
                    {university.alpha_two_code}
                  </TableCell>
                  <TableCell align="right">
                    {university.domains.length}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Main;

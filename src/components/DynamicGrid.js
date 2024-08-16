// import React from "react";
// import { Grid, Paper, Typography } from "@mui/material";

// const testList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// const DynamicGrid = ({ playlist }) => {
//     return (
//         <Grid container spacing={3} style={{ padding: '20px' }}>
//             {testList.map((item, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                     <Paper style={{
//                         width: '30%',
//                         height: '30px', 
//                         padding: '20px', 
//                         textAlign: 'center',
//                         position: 'relative',
//                         transition: 'transform 0.3s, box-shadow 0.3s',
//                         cursor: 'pointer',
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = 'scale(1.05)';
//                             e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = 'scale(1)';
//                             e.currentTarget.style.boxShadow = 'none';
//                         }}
//                     >
//                         <Typography variant="h6">
//                             {item}
//                         </Typography>
//                     </Paper>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// export default DynamicGrid;

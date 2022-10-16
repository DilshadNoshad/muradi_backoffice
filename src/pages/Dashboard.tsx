
import { Box, Typography, IconButton } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductTable from '../components/tables/ProductTable';
import StatBox from '../components/Boxes/StateBox';
import ProgressCircle from '../components/graphs/ProgressCircle';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LineChart from '../components/graphs/LineChart';
import DownloadIcon from '@mui/icons-material/Download';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StoreIcon from '@mui/icons-material/Store';
import { theme } from '../theme';
import { mockTransactions } from '../data/MocData';
import BarChart from '../components/graphs/BarChart';
import PieChart from '../components/graphs/PieChart';
import Title from '../components/header/Title';
const Dashboard: React.FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "white",
        padding: "20px 15px",
        textAlign: 'start',
        color: theme.palette.text.secondary,

    }));
    return (
        <Box>
            {/* HEADER */}

            <Title title="Hi! Dilshad" subtitle="Welcome to your dashboard" />

            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Item><StatBox title="$500.00" subtitle="Total Earning" increase="+14%" icon={<PaymentsIcon />}>
                        <ProgressCircle progress="0.75" size="30" />
                    </StatBox>
                    </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Item><StatBox title="$961" subtitle="Total Order" increase="+14%" icon={<LocalMallIcon />}>
                        {/* <div style={{ height: 200, width: 200 }}>
                                <PieChart />
                            </div> */}
                        <ProgressCircle progress="0.50" size="30" />
                    </StatBox>
                    </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Item><StatBox title="$203k" subtitle="Total Income" increase="+14%" icon={<StoreIcon />}>



                        {/* <div style={{ minWidth: 0, width: 200, height: 200 }}>
                                <PieChart />
                            </div> */}

                        <ProgressCircle progress="0.75" size="30" />
                    </StatBox></Item>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Item><StatBox title="$103k" subtitle="Total Income" increase="+14%" icon={<StorefrontIcon />}>



                        {/* <div style={{ minWidth: 0, width: 200, height: 200 }}>
                                <PieChart />
                            </div> */}

                        <ProgressCircle progress="0.75" size="30" />
                    </StatBox></Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item>
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    fontWeight="600"
                                    color={"grey"}
                                >
                                    Revenue Generated
                                </Typography>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color={theme.palette.primary.main}
                                >
                                    $59,342.32
                                </Typography>
                            </Box>

                            <Box>
                                <IconButton>
                                    <DownloadIcon
                                        sx={{ fontSize: "26px", color: theme.palette.primary.main }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                            <LineChart isDashboard={true} />
                        </Box>

                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item>
                        <Box display="flex" justifyContent="center" alignItems="center" borderBottom={`3px solid ${theme.palette.primary.main}`} p="15px" >
                            <Typography color="grey" variant="h5" fontWeight="600">
                                Recent Transactions
                            </Typography>
                        </Box>
                        <Box height="254px" overflow="auto">
                            {mockTransactions.map((transaction, i) => (
                                <Box
                                    key={`${transaction.txId}-${i}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom={`1px solid ${theme.palette.primary.main}`}
                                    p="15px"
                                >
                                    <Box>
                                        <Typography
                                            color={theme.palette.secondary.main}
                                            variant="h6"
                                            fontWeight="600"
                                        >
                                            {transaction.txId}
                                        </Typography>
                                        <Typography color={"grey"}>
                                            {transaction.user}
                                        </Typography>
                                    </Box>
                                    <Box color="grey">{transaction.date}</Box>
                                    <Box p="5px 10px" color={theme.palette.primary.main} border={`1px solid ${theme.palette.primary.main}`} borderRadius="4px"
                                    >
                                        ${transaction.cost}
                                    </Box>
                                </Box>
                            ))}</Box></Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item>
                        <Typography variant="h5" fontWeight="600">
                            Campaign
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mt="25px"
                        >
                            <ProgressCircle size="130" progress="0.55" />
                            <Typography
                                variant="h5"
                                sx={{ mt: "15px" }}
                            >
                                $48,352 revenue generated
                            </Typography>
                            <Typography sx={{ textAlign: "center" }} >Includes extra misc expenditures and costs</Typography>
                        </Box></Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item> <Typography
                        variant="h5"
                        fontWeight="600"
                    >
                        Sales Quantity
                    </Typography>
                        <Box height="250px" >
                            <BarChart isDashboard={true} />
                        </Box></Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                        >
                            Total Revenue
                        </Typography>
                        <Box height="250px">
                            <PieChart />
                        </Box>
                    </Item>
                </Grid>

            </Grid>

            <ProductTable />
        </Box >



    )
}

export default Dashboard;
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    dashboardLayoutContainer: {
        "& .innerConatiner": {
            paddingLeft: "275px", marginTop: "35px"
        },

    },
}));

export default function DashboardLayout({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.dashboardLayoutContainer}>
            {/* <Topbar /> */}
            <div>
                <Sidebar />
                {/*  */}
                <div
                    id="layout-container"
                    class="nk-content"

                >
                    <Header />

                    <div className="wrapper">
                        <div className="contentContainer">
                            <div className="overflow-auto">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

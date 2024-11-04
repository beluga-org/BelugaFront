import Image from "next/image";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import {getAllUsers} from "@/http/user";

const Dashboard = async () => {

    const user = await getAllUsers();

    console.log(user);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>

                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    );
};

export default Dashboard;
import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/navbar";
import ListMobil from "@/Components/listMobil";

export default function homePage(props) {
    return (
        <>
            <Navbar user={props.auth} />
            <div
                className=" flex  min-h-screen items-center justify-center "
                style={{ backgroundColor: "#e3f6f5" }}
            >
                <Head title={props.title} />
                <div className="gap-4 flex lg:flex-row lg:flex-wrap flex-col justify-center p-5  w-full">
                    <ListMobil data={props.data} user={props.auth.user} />
                </div>
            </div>
        </>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({ auth, ...props }) {
    const dataMobil = props.data.filter(
        (item) => item.pemilik === auth.user.email
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div
                        className=" overflow-hidden shadow-sm sm:rounded-lg"
                        style={{ backgroundColor: "#272343" }}
                    >
                        <div className="p-6 text-white">You're logged in!</div>
                    </div>
                    <div
                        className=" overflow-hidden shadow-sm sm:rounded-lg mt-4"
                        style={{ backgroundColor: "#272343" }}
                    >
                        <div className="p-6 text-white">
                            Data Mobil anda : {dataMobil.length}
                        </div>
                    </div>

                    <Link
                        className=" btn  border-none text-black hover:bg-amber-400 h-full w-full mt-4 p-4 rounded-md"
                        href="/formMobil"
                        style={{ backgroundColor: "#bae8e8" }}
                    >
                        Dashboard Mobil Kamu
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

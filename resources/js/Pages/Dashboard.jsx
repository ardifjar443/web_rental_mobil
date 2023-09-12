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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-6 text-gray-900">
                            Data Mobil anda : {dataMobil.length}
                        </div>
                    </div>

                    <Link
                        className=" btn btn-primary h-full w-full mt-4 p-4 rounded-md"
                        href="/formMobil"
                    >
                        Dashboard Mobil Kamu
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

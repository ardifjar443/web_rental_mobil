import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Edit({ auth, mustVerifyEmail, status }) {
    console.log(status);
    const [foto, setFoto] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFoto(file);
    };
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("fotoProfil", foto); // Tambahkan gambar ke formData

        Inertia.post("/updateFotoProfil", formData); // Kirim formData
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 mb-10">
                    <div
                        className="p-4 sm:p-8  shadow sm:rounded-lg "
                        style={{ backgroundColor: "#272343" }}
                    >
                        <h1 className="mb-7 text-white text-xl">
                            Ganti Foto Profil
                        </h1>
                        <input
                            type="file"
                            className="block w-full  text-sm text-teal-500 
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-3xl file:border-0
                            file:text-sm file:font-semibold
                            file:bg-teal-100 file:text-teal-400
                            hover:file:bg-teal-200"
                            name="profile_image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <button
                            onClick={handleSubmit}
                            className="mt-5 btn bg-teal-100 hover:bg-teal-200 text-black "
                        >
                            Ganti Foto Profil
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div
                        className="p-4 sm:p-8  shadow sm:rounded-lg"
                        style={{ backgroundColor: "#272343" }}
                    >
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

const TambahMobil = (props) => {
    const [namaMobil, setNamaMobil] = useState("");
    const [deskripsi, setDesripsi] = useState("");
    const [harga, setHarga] = useState("");

    const handleSubmit = () => {
        const data = {
            namaMobil,
            deskripsi,
            harga,
        };

        Inertia.post("/tambahMobil", data);
    };

    return (
        <>
            <Head title="Tambah Mobil"></Head>
            <div>
                <Link className="btn btn-primary m-5" href="/">
                    Kembali
                </Link>
            </div>
            <div className=" min-h-screen flex flex-col justify-center items-center ">
                <div className="bg-white container flex flex-col p-5 gap-2 rounded-md">
                    <h1 className="text-center text-xl text-bold text-black ">
                        Input Mobil Baru
                    </h1>

                    <div>
                        {props.flash.message === "data sudah ditambahkan" &&
                            props.flash.message}
                    </div>

                    <input
                        type="text"
                        name="namaMobil"
                        placeholder="Nama Mobil"
                        className="input input-bordered "
                        onChange={(namaMobil) => {
                            setNamaMobil(namaMobil.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="deskripsi"
                        placeholder="Deskripsi"
                        className="input input-bordered"
                        onChange={(deskripsi) => {
                            setDesripsi(deskripsi.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="harga"
                        placeholder="Harga Mobil"
                        className="input input-bordered"
                        onChange={(harga) => {
                            setHarga(harga.target.value);
                        }}
                    />

                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <h1 className="text-white text-center">Daftar Mobil Anda</h1>
            <div className="flex lg:flex-row lg:flex-wrap flex-col justify-center p-5  ">
                {props.data.length === 0 ? (
                    <div className="bg-white flex container items-center justify-center p-5 rounded-md">
                        <p className="text-black ">Belum Ada Data</p>
                    </div>
                ) : (
                    props.data.map((data, index) => {
                        return (
                            <div
                                className="bg-white card w-full lg:w-96  shadow-xl gap-4 m-1 "
                                key={index}
                            >
                                <figure></figure>

                                <div className=" card-body ">
                                    <h2 className="card-title">
                                        {data.namaMobil}
                                    </h2>
                                    <p>{data.deskripsi}</p>
                                    <p>{data.harga}</p>
                                    <div className="card-actions justify-end"></div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default TambahMobil;

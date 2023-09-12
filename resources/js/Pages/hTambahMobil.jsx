import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

const TambahMobil = (props) => {
    const [namaMobil, setNamaMobil] = useState("");
    const [deskripsi, setDesripsi] = useState("");
    const [harga, setHarga] = useState("");
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("namaMobil", namaMobil);
        formData.append("deskripsi", deskripsi);
        formData.append("harga", harga);
        formData.append("image", image); // Tambahkan gambar ke formData

        Inertia.post("/tambahMobil", formData); // Kirim formData
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

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                        class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    />
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview Gambar"
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                    )}

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
                                className="bg-white card w-full lg:w-96  shadow-xl m-1 "
                                key={index}
                            >
                                <figure>
                                    <img
                                        src={`storage/${data.image}`}
                                        alt="Gambar Mobil"
                                        className="w-full h-32 object-cover"
                                    />
                                </figure>
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

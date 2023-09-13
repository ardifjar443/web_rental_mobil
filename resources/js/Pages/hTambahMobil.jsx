import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import ListMobil from "@/Components/listMobil";

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
        <div style={{ backgroundColor: "#e3f6f5" }}>
            <Head title="Tambah Mobil"></Head>
            <div>
                <Link
                    className="btn  m-5 border-none text-black hover:shadow-md"
                    href="/"
                    style={{ backgroundColor: "#ffd803" }}
                >
                    Kembali
                </Link>
            </div>
            <div className=" min-h-screen flex flex-col justify-center items-center ">
                <div className="bg-white container flex flex-col p-5 gap-2 rounded-2xl shadow-md">
                    <h1 className="text-center text-xl text-bold text-black ">
                        Input Mobil Baru
                    </h1>

                    <div>
                        {props.flash.message === "data sudah ditambahkan" &&
                            props.flash.message}
                    </div>
                    <label className="label">
                        <span className="label-text">Nama Mobil :</span>
                    </label>
                    <input
                        type="text"
                        name="namaMobil"
                        placeholder="Contoh : Avanza"
                        className="input   bg-white text-black border focus:border-lg focus:border-black "
                        onChange={(namaMobil) => {
                            setNamaMobil(namaMobil.target.value);
                        }}
                    />
                    <label className="label">
                        <span className="label-text">Deskripsi Mobil : :</span>
                    </label>
                    <input
                        type="text"
                        name="deskripsi"
                        placeholder="Contoh : mobil Hitam"
                        className="input   bg-white text-black border focus:border-lg focus:border-black "
                        onChange={(deskripsi) => {
                            setDesripsi(deskripsi.target.value);
                        }}
                    />
                    <label className="label">
                        <span className="label-text">
                            Harga Sewa Mobil per hari :
                        </span>
                    </label>
                    <div className="flex items-center p-2">
                        <span className="text-black">Rp.</span>
                        <input
                            type="text"
                            name="harga"
                            placeholder="Contoh : Rp.100.000"
                            className=" ms-5 input w-full  bg-white text-black border focus:border-lg focus:border-black "
                            onChange={(harga) => {
                                setHarga(harga.target.value);
                            }}
                        />
                    </div>
                    <label className="label">
                        <span className="label-text">Foto Mobil :</span>
                    </label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                        className="block w-full  text-sm text-amber-500 
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-amber-50 file:text-amber-400
      hover:file:bg-amber-100
    "
                    />
                    <div className="flex justify-center">
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview Gambar"
                                style={{ maxWidth: "50%" }}
                            />
                        )}
                    </div>

                    <button
                        className="btn  m-3 border-none bg-amber-300 hover:bg-amber-400 text-black"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div
                className="justify-center p-5 rounded-t-3xl shadow-md "
                style={{ backgroundColor: "white" }}
            >
                <h1 className="text-black text-center mb-9 text-2xl">
                    Daftar Mobil Anda
                </h1>
                <ListMobil data={props.data} user={props.auth.user} />
            </div>
        </div>
    );
};

export default TambahMobil;

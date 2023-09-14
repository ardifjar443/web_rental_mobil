import { Link } from "@inertiajs/react";

const ListMobil = (props) => {
    console.log(props.data);
    function formatRupiah(angka) {
        var formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        });

        return formatter.format(angka);
    }
    return (
        <>
            <div className="w-full flex justify-center items-center gap-4">
                {props.data.length === 0 ? (
                    <div className="bg-white flex container items-center justify-center p-5 rounded-md">
                        <p className="text-black ">Belum Ada Data</p>
                    </div>
                ) : !props.user ? (
                    props.data.map((data, i) => {
                        return (
                            <div
                                className=" card w-full lg:w-96 shadow-md  gap-4 "
                                key={i}
                                style={{ backgroundColor: "#fffffe" }}
                            >
                                <figure className=" p-10">
                                    <img
                                        src={`storage/${data.image}`}
                                        alt="Gambar Mobil"
                                        className=" h-full  object-cover p-5 "
                                    />
                                </figure>
                                <div className=" card-body ">
                                    <h2
                                        className="card-title text-3xl"
                                        style={{ color: "#272343" }}
                                    >
                                        {data.namaMobil}
                                        <span className="text-lg">
                                            id: {data.id}
                                        </span>
                                    </h2>

                                    <p style={{ color: "#272343" }}>
                                        {data.deskripsi}
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <p
                                            style={{ float: "left" }}
                                            className="text-xl text-black"
                                        >
                                            {formatRupiah(data.harga)}
                                        </p>

                                        <Link
                                            className="btn border-none hover:shadow-md text-black"
                                            href={`/detail/${data.id}`}
                                            style={{
                                                backgroundColor: "#ffd803",
                                                float: "right",
                                            }}
                                        >
                                            Liat Mobil
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    props.data.map((data, i) => {
                        return (
                            <div
                                className=" card w-full lg:w-96 shadow-md  gap-4 "
                                key={i}
                                style={
                                    data.pemilik === props.user.email
                                        ? { backgroundColor: "#272343" }
                                        : { backgroundColor: "#fffffe" }
                                }
                            >
                                <figure>
                                    <img
                                        src={`storage/${data.image}`}
                                        alt="Gambar Mobil"
                                        className=" h-full  object-cover"
                                    />
                                </figure>
                                <div className=" card-body ">
                                    <h2
                                        className="card-title text-3xl"
                                        style={
                                            data.pemilik === props.user.email
                                                ? { color: "#fffffe" }
                                                : { color: "#272343" }
                                        }
                                    >
                                        {data.namaMobil}{" "}
                                        <span className="text-lg">
                                            id: {data.id}
                                        </span>
                                    </h2>

                                    <p
                                        style={
                                            data.pemilik === props.user.email
                                                ? { color: "#fffffe" }
                                                : { color: "#272343" }
                                        }
                                    >
                                        {data.deskripsi}
                                    </p>

                                    <div className="flex items-center ">
                                        <p
                                            style={{ float: "" }}
                                            className={
                                                data.pemilik ===
                                                props.user.email
                                                    ? "text-xl text-white"
                                                    : "text-xl text-black"
                                            }
                                        >
                                            {formatRupiah(data.harga)}
                                        </p>

                                        <Link
                                            className="btn border-none hover:shadow-md text-black"
                                            href={`/detail/${data.id}`}
                                            style={{
                                                backgroundColor: "#ffd803",
                                                float: "right",
                                            }}
                                        >
                                            Liat Mobil
                                        </Link>
                                    </div>
                                    {data.pemilik === props.user.email && (
                                        <Link
                                            className="btn border-none hover:shadow-md text-black"
                                            href={`/detail/${data.id}`}
                                            style={{
                                                backgroundColor: "#ffd803",
                                            }}
                                        >
                                            Edit Mobil
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default ListMobil;

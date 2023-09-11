import { Link } from "@inertiajs/react";

const detail = ({ car }) => {
    return (
        <>
            <div>
                <p>{car.namaMobil}</p>
                <p>{car.deskripsi}</p>
                <Link href="/" className="btn btn-outline">
                    Kembali
                </Link>
            </div>
        </>
    );
};

export default detail;

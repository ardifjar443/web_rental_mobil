import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div
            className="pb-5 border-none"
            style={{ backgroundColor: "#e3f6f5" }}
        >
            <div
                className="navbar rounded-b-3xl shadow-lg "
                style={{ backgroundColor: "#fffffe" }}
            >
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl text-black ">
                        Rental Mobil
                    </a>
                    <a href="https://ardifjar443.github.io">Ardifjar443</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 z-[1] card card-compact dropdown-content w-52  shadow border border-3 border-black"
                            style={{ backgroundColor: "#fffffe" }}
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg text-black">
                                    8 Items
                                </span>
                                <span className="text-black">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button
                                        className="btn  text-black"
                                        style={{ backgroundColor: "#ffd803" }}
                                    >
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    src={
                                        user.user === null
                                            ? "img/profil.png"
                                            : user.user.fotoProfil === null
                                            ? "img/profil.png"
                                            : "/path/to/fotoProfils/" +
                                              user.user.fotoProfil
                                    }
                                    alt="profil"
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            style={{ backgroundColor: "#fffffe" }}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 border border-5 border-black"
                        >
                            {!user.user ? (
                                <>
                                    <li>
                                        <Link
                                            href="/login"
                                            className="justify-between text-black"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/register"
                                            className="justify-between text-black"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="justify-between text-black"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/formMobil"
                                            className="justify-between text-black"
                                        >
                                            Tambah Mobil
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/logout"
                                            className="justify-between text-black"
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

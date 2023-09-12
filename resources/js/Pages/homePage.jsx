import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/navbar";

export default function homePage(props) {
    console.log(props.auth);
    return (
        <>
            <Navbar user={props.auth} />
            <div className=" flex bg-lime-400 min-h-screen items-center justify-center ">
                <Head title={props.title} />
                <div className="gap-4 flex lg:flex-row lg:flex-wrap flex-col justify-center p-5  w-full">
                    {props.data
                        ? props.data.map((data, i) => {
                              return (
                                  <div
                                      className=" card w-full lg:w-96 bg-base-100 shadow-xl gap-4 "
                                      key={i}
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
                                          <div className="card-actions justify-end">
                                              <Link
                                                  className="btn btn-primary"
                                                  href={`/detail/${data.id}`}
                                              >
                                                  Liat Mobil
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </>
    );
}

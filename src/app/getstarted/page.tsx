'use client';
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center p-10 h-screen">
      <h2 className="text-3xl font-semibold text-error">Petunjuk Penggunaan!</h2>
      <div className="my-5 text-center">
        <p>Kamu hanya memiliki <b>3 detik</b> setiap cuplikan foto</p>
        <p className="mt-2">Photobox online ini hanya mengambil <b>3 foto</b> dalam satu sesi</p>
        <br />
        <p className="text-md font-semibold">Siapkan gaya terbaik kamu!!</p>
      </div>
      <button onClick={() => {
        router.push("/photosession");
      }} className="btn btn-accent btn-wide mt-10">Gaskeuunn</button>
    </div>
  )
}
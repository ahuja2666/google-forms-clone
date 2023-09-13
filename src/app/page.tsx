import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-16 my-20 border border-red-500">
        <div className="flex justify-between flex-wrap items-center">
          <div className="flex flex-col justify-between gap-6 items-start">
            <h2>Get insights quickly, with Google Forms</h2>
            <p>
              Easily create and share online forms and surveys, and analyze
              responses in real-time.
            </p>
            <button>Sign in</button>
          </div>
          <div>
            <Image
              src={"/main-image.png"}
              height={728}
              width={500}
              alt="main"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

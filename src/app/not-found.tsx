import Link from "next/link";

type Props = {};

function NotFoundPage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Link href="/main" className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md mt-2 hover:bg-gray-400 hover:text-white" >Go to home page</Link>
    </div>
  );
}

export default NotFoundPage;

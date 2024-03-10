import Link from "next/link";
import LoginCard from "./components/LoginCard";

export default async function Home() {
  return (
    <main>
      <LoginCard imageUrl="/logo.png">
        <Link href="/admin/books" className="btn btn-wide rounded-lg">
          Admin View
        </Link>
        <Link href="/books" className="btn btn-wide rounded-lg">
          User View
        </Link>
      </LoginCard>
    </main>
  );
}

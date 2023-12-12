"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserLinks = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link className="hover:text-red-400" href="/orders">
            Orders
          </Link>
          {session?.user.isAdmin && (
            <Link className="hover:text-red-400 ml-4" href="/add">
              Add Product
            </Link>
          )}
          <span
            className="ml-4 cursor-pointer hover:text-red-400"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/"); // Redirect to the dashboard page after signing out
              });
            }}
          >
            Logout
          </span>
        </div>
      ) : (
        <Link className="hover:text-red-400" href="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserLinks;

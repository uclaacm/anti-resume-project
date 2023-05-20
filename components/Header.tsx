import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/*
interface Session {
  user: {
    email: string;
  }
}
*/
interface HeaderProps {
  session: any;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header({ session, status }: HeaderProps) {
  const loading = status === 'loading';
  const { asPath } = useRouter();

  return (
    <header>
      <div className="h-16">
        <div className="flex items-center p-2 gap-2">
          {asPath !== '/' && (
            <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go back home
              </button>
            </Link>
          )}
          {asPath !== '/about' && (
            <Link href="/about">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                About
              </button>
            </Link>
          )}
        </div>
        <div className="flex justify-end">
          <div
            className={`fixed top-0 flex items-center gap-2 p-2 z-10 bg-red bg-opacity-50 backdrop-blur 
          ${!session && loading ? 'opacity-0' : ''}`}
          >
            {!session && (
              <>
                <p>You are not signed in</p>
                <a
                  href={'/api/auth/signin'}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn('google').catch((error) => {
                      console.error(error);
                    });
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                <div>
                  <p className="text-sm">Signed in as</p>
                  <p className="font-semibold">{session.user.email}</p>
                </div>
                <a
                  href={'/api/auth/signout'}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut().catch((error) => {
                      console.error(error);
                    });
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

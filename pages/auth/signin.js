import Header from '../../components/Header';
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';

function Signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center" key={provider.name}>
            <Image
              src="/boobleLogo.png"
              alt="booble logo"
              width={300}
              height={100}
            />
            <p className="text-sm italic my-10">For learning purpose</p>
            <button
              className="bg-red-400 rounded-lg text-white py-2 px-6 font-bold hover:bg-red-500 hover:shadow-md"
              onClick={() => {
                signIn(provider.id, { callbackUrl: '/' });
              }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Signin;

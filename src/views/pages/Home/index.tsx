import { useStateNuiCallback } from '@app/hooks/useStateNuiCallback';
import { SpinLoader } from '@views/components/spin-loader';

export function Home() {
  const { result, isError, isLoading } = useStateNuiCallback(
    'getUsers',
    {},
    new Array(100).fill('').map((_, index) => `User ${index + 1}`),
    1000,
  );

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <SpinLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-3xl text-red-700 font-black text-center">Error!</div>
    );
  }

  return (
    <div className="text-mainColor p-5 w-full h-full items-center justify-center">
      <ul className="flex flex-wrap gap-10">
        {result!.map((user) => (
          <li className="px-2 py-1 bg-black border border-solid border-zinc-700 rounded-[.125rem] ">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

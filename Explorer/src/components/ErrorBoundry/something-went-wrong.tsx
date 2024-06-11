import { useRouter } from "@tanstack/react-router";
import { TriangleAlertIcon } from "../icons/triangle-warning";

export default function SomethingWentWrong() {
  const router = useRouter();

  function goHome() {
    router.navigate({ to: "/" });
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 space-y-6">
      <div className="bg-background text-foreground p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="flex items-center justify-center">
          <TriangleAlertIcon className="h-12 w-12 text-red-500" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Oops, something went wrong!</h2>
          <p className=" text-gray-400">
            We're sorry, but an unexpected error has occurred. Please try again
            later.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="text-accentForeground rounded-lg px-4 py-2 bg-accent"
            onClick={goHome}
          >
            Go Home
          </button>
          <button
            className="text-foreground rounded-lg px-4 py-2 border-foreground border-2"
            onClick={window.location.reload}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

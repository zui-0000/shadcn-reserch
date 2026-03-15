import { RouterProvider } from "@tanstack/react-router";
import type { FC } from "react";
import { Suspense } from "react";
import { router } from "~/routes/router";

const suspenseFallback = <div>読み込み中...</div>;

export const App: FC = () => {
  return (
    <Suspense fallback={suspenseFallback}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

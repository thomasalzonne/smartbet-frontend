import { JSX } from "react";

// app/page.tsx
export default function HomePage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Bienvenue sur BetTracker
      </h1>
      <p className="text-gray-600">
        Suivez vos paris, analysez vos gains et optimisez vos stratégies.
      </p>
    </div>
  );
}
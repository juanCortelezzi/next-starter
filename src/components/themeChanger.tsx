import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <p>
        The Next-themes library let&apos;s us change the theme without flashing
        on the first load. The current themes is: <code>{theme}</code>
      </p>
      <div className="btn-group flex justify-center">
        <button
          className="btn btn-primary btn-md"
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className="btn btn-secondary btn-md"
          onClick={() => setTheme("night")}
        >
          Night
        </button>
        <button
          className="btn btn-accent btn-md"
          onClick={() => setTheme("mytheme")}
        >
          Custom
        </button>
      </div>
    </div>
  );
};

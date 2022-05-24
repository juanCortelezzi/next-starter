export const Header = () => (
  <header className="navbar rounded-lg shadow-md">
    <div className="flex-1">
      <button className="btn btn-ghost text-xl normal-case">Template</button>
    </div>
    <div className="flex-none">
      <button className="btn btn-ghost btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
);

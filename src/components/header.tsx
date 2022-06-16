type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => (
  <header className={`navbar mx-0 mb-5 p-0 sm:mb-10 ${className && className}`}>
    <div className="navbar-start">
      <button className="btn btn-ghost ml-[-1rem] text-xl normal-case">
        Template
      </button>
    </div>
    <div className="navbar-end mr-[-1rem]">
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

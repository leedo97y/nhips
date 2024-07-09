const Footer = () => {
  return (
    <footer className="bottom-0 w-[100vw] h-20 flex flex-col justify-center items-center dark:bg-GRAY_EXTRADARK text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">
          Copyright 2024. doyeonlee All rights reserved.
        </span>
      </div>
    </footer>
  );
};

const FixedFooter = () => {
  return (
    <footer className="fixed bottom-0 w-[100vw] h-20 flex flex-col gap-2 justify-center items-center bg-FOOTER_BG_LIGHT dark:bg-GRAY_EXTRADARK md:text-xs text-[10px] dark:text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">
          Copyright 2024. doyeonlee All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export { FixedFooter, Footer };

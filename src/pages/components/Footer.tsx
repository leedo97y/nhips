const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-GRAY_EXTRADARK h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2023. doyeonlee All rights reserved.`}</span>
      </div>
    </footer>
  );
};

export default Footer;

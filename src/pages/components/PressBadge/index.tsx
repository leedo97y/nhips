const PressBadge = (props: { name: string }) => {
  return (
    <a
      href={`/ranking/${props.name}`}
      className="md:w-[100px] w-[70px] text-center bg-BASIC rounded-full md:p-1 p-[2px] hover:animate-pulse"
    >
      <span className=" font-SAM3 text-GRAY_EXTRADARK md:text-lg text-sm">
        {props.name === "YH"
          ? "연합뉴스"
          : props.name === "CA"
            ? "채널A"
            : props.name === "HAN"
              ? "한겨레"
              : props.name}
      </span>
    </a>
  );
};

export default PressBadge;

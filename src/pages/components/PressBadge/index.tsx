const PressBadge = (props: any) => {
  return (
    <a href={`/press/${props.name}`} className="w-[100px] text-center bg-BASIC rounded-full p-1">
      <span className=" font-SAM3 text-GRAY_EXTRADARK text-lg ">
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

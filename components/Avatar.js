// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:justify-center h-full w-full xl:items-center xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;

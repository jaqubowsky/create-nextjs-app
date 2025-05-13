import Image from "next/image";

type IconName = "google";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  alt?: string;
}

export function Icon({ name, size = 24, className = "", alt = "" }: IconProps) {
  return (
    <Image
      src={`/${name}.svg`}
      width={size}
      height={size}
      alt={alt || `${name} icon`}
      className={className}
    />
  );
}

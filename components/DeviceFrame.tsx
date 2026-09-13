import Image from "next/image";

type Device = "laptop" | "tablet" | "phone";

interface DeviceFrameProps {
  device: Device;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

const SCREEN_ASPECT: Record<Device, string> = {
  laptop: "aspect-[16/10]",
  tablet: "aspect-[4/3]",
  phone: "aspect-[9/19]",
};

const BEZEL_RADIUS: Record<Device, string> = {
  laptop: "rounded-xl",
  tablet: "rounded-[22px]",
  phone: "rounded-[32px]",
};

const BEZEL_PADDING: Record<Device, string> = {
  laptop: "p-[6px] sm:p-2",
  tablet: "p-2.5 sm:p-3",
  phone: "p-2 sm:p-2.5",
};

export default function DeviceFrame({
  device,
  src,
  alt,
  width,
  height,
  priority,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 480px, 60vw",
}: DeviceFrameProps) {
  return (
    <div className={`${className}`}>
      <div
        className={`bg-brand shadow-pop ${BEZEL_RADIUS[device]} ${BEZEL_PADDING[device]}`}
      >
        {(device === "tablet" || device === "phone") && (
          <div className="mb-1.5 flex justify-center sm:mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-soft" aria-hidden="true" />
          </div>
        )}
        <div
          className={`relative overflow-hidden rounded-[10px] bg-surface ${SCREEN_ASPECT[device]}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        </div>
      </div>
      {device === "laptop" && (
        <div className="mx-auto h-[7px] w-[70%] rounded-b-xl bg-brand-soft sm:h-2" aria-hidden="true" />
      )}
    </div>
  );
}

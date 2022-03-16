import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

interface IMyAnchorToLogoProps extends ImageProps {}

const MyAnchorToLogo = forwardRef<HTMLAnchorElement, ImageProps>(
  ({ ...props }: IMyAnchorToLogoProps, ref) => {
    return (
      <a ref={ref}>
        <Image {...props} />
      </a>
    );
  }
);

MyAnchorToLogo.displayName = "MyAnchorToLogo";

export { MyAnchorToLogo };

import { SVGProps, createElement } from "react";

type IconName = "copy" | "loading";

type Props = {
  className?: string;
  name: IconName;
};

export default function Icon({ name, className }: Props) {
  const defaultClassName = `h-4 w-4 fill-current ${className}`;

  const props = {
    className: defaultClassName,
  };

  switch (name) {
    case "copy":
      return createElement(CopyIcon, props);
    case "loading":
      return createElement(LoadingIcon, props);
    default:
      return null;
  }
}

const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M272 0h124.1C408.8 0 421 5.1 430 14.1L497.9 82c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path>
    </svg>
  );
};

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0v64c106 0 192 86 192 192 0 35-9.4 67.8-25.7 96l55.4 32z"></path>
    </svg>
  );
};

import logo from "./logo.svg";

export const CompanyLogo = ({ width, height, className }) => {
  return (
    <img
      alt=""
      className={className}
      src={logo}
      width={width}
      height={height}
    />
  );
};

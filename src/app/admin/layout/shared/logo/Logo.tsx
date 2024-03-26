import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logo/codang.jpg"
        alt="logo"
        height={70}
        width={120}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;

import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "60px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/filesx/logo2.png"
        alt="logo"
        height={60}
        width={180}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;

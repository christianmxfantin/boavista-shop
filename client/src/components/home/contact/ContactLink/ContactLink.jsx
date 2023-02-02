import { useState } from "react";
import { useTheme } from "@emotion/react";
import { LinkCard, LinkData } from "../ContactLink/ContactLink.styles";
import { Link } from "@mui/material";
import { Icon as LinkIcon } from "../../../ui/Icon";

export const ContactLink = ({ href, icon, data }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Link href={href} target="_blank" rel="noreferrer">
        <LinkCard
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          sx={{
            color: !isHover
              ? theme.palette.secondary.A100
              : theme.palette.secondary[500],
          }}
        >
          <LinkIcon name={icon} size={40} />
          <LinkData variant="h5">{data}</LinkData>
        </LinkCard>
      </Link>
    </>
  );
};

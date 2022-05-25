import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon as LinkIcon } from "../../ui/Icon";

const LinkCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: `${theme.spacing(4)}`, //32px
}));

const LinkData = styled(Typography)(({ theme }) => ({
  //styles
}));

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
            color: `${
              !isHover
                ? theme.palette.secondary.A100
                : theme.palette.secondary[500]
            }`,
          }}
        >
          <LinkIcon name={icon} size={40} />
          <LinkData
            variant="h5"
            sx={{
              fontWeight: 300,
              marginLeft: `${theme.spacing(2)}`, //16px
            }}
          >
            {data}
          </LinkData>
        </LinkCard>
      </Link>
    </>
  );
};

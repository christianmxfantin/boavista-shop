import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Container as LinkCard,
  Link,
  Typography as LinkData,
} from "@mui/material";
import { Icon as LinkIcon } from "../../ui/Icon";

export const ContactLink = ({ href, icon, data }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Link href={href} target="_blank" rel="noreferrer">
        <LinkCard
          sx={{
            display: "flex",
            alignItems: "center",
            margin: `${theme.spacing(4)}`, //32px
          }}
        >
          <LinkIcon
            name={icon}
            color={
              !isHover
                ? theme.palette.secondary.A100
                : theme.palette.secondary[500]
            }
            size={40}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
          <LinkData
            variant="h5"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            sx={{
              color: `${
                !isHover
                  ? theme.palette.secondary.A100
                  : theme.palette.secondary[500]
              }`,
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

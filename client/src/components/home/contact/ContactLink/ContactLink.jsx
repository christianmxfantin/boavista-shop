import { LinkCard, LinkData } from "../ContactLink/ContactLink.styles";
import { Link } from "@mui/material";
import { Icon as LinkIcon } from "../../../ui/Icon";

export const ContactLink = ({ href, icon, data }) => {
  return (
    <>
      <Link href={href} target="_blank" rel="noreferrer">
        <LinkCard>
          <LinkIcon name={icon} size={40} />
          <LinkData variant="h5">{data}</LinkData>
        </LinkCard>
      </Link>
    </>
  );
};

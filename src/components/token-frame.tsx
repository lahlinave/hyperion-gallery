import { useEffect } from "react";
import { tokenDetails } from "./token";

export const TokenFrame = ({ tokenId, minHeight = 275 }: { tokenId: string; minHeight?: number }) => {
  const id = `tokenFrame${tokenId}`
  const token = tokenDetails(tokenId);
  return (
  <img src={token.imageUrl} width={'100%'} />
    // <iframe id={id} allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"} allowFullScreen
    //         frameBorder={"0"}
    //         height={"100%"} sandbox={"allow-scripts"} src={token.live}
    //         width={"100%"}
    //         onLoad={(e)=>{e.currentTarget.contentWindow?.focus()}}
    //         style={{ "minHeight": minHeight }}
    // title={'#'+tokenId}></iframe>

  )
}

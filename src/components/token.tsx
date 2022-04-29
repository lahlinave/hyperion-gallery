import Link from "next/link";
import { Card } from "react-bootstrap";
import config from "../config";
import { tokenMap } from "../../tokenmap";


export const tokenDetails = (tokenId:string)=>{
  
  const imageId = tokenMap[tokenId]
  return {
    imageUrl: `${config.fileUrlImage}/${imageId}${config.fileUrlImageExtension}`,
    imageUrl4k: `${config.fileUrlHighResImage}/${imageId}${config.fileUrlHighResImageExtension}`,
    thumbnail: `${config.fileUrlThumbnails}/${imageId}${config.fileUrlThumbnailsExtension}`,
    metadata: `${config.fileUrlMetadata}/${tokenId}${config.fileUrlMetadataExtension}`,
  }
}

export const Token = ({tokenId}:{tokenId:string})=>{

  const token = tokenDetails(tokenId);
  
  return (
    <Card className="text-center" border="light">
      
      {/*<Link href={{pathname:`/token`,query:{'id':encodeURIComponent(tokenId)} }  } as={`/token/?id=${encodeURIComponent(tokenId)}`}>*/}
        <a href={`/token/?id=${encodeURIComponent(tokenId)}`}><Card.Img variant="top" src={token.thumbnail} /></a>
      {/*</Link>*/}
      <Card.Body>
        <Card.Title>#{tokenId}</Card.Title>
        <Card.Text>
          <Link href={`/token/` } as={`/token/?id=${encodeURIComponent(tokenId)}`}>
            <a className={'Token-link'}>Details</a>
          </Link> |{" "}
          <a href={token.imageUrl4k} className={'Token-link'} download={'true'}>Image</a> |{" "}
        </Card.Text>
      </Card.Body>
    </Card>
    // <>Come back soon</>
  )
}

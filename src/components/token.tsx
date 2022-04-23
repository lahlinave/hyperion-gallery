import Link from "next/link";
import { Card } from "react-bootstrap";
import config from "../config";
const images = [82,20,52,106,12,9,86,74,34,104,81,59,65,58,38,84,98,101,110,62,88,50,57,29,75,17,76,90,3,80,89,39,96,72,45,48,33,22,95,7,49,77,71,23,47,11,78,51,87,19,15,25,2,111,109,36,30,66,63,73,105,92,99,42,32,68,10,93,91,55,35,41,16,94,64,70,28,46,40,6,56,8,5,67,1,97,14,100,102,69,83,108,26,43,27,103,44,21,31,18,24,13,54,4,79,60,61,107,53,85,37]
export const tokenDetails = (tokenId:string)=>{
  const imageId = images[parseInt(tokenId)-1]
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

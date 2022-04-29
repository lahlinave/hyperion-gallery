const configBase = {
  // Testnet values
  testnet: {
    rpcEndpoint: "https://rpc.castor-1.stargaze-apis.com/",
    restEndpoint: "https://rest.castor-1.stargaze-apis.com/",
    chainId: "castor-1",
    // Custom values here
    sg721: "", // UPDATE ME to your testnet contract
    mintPriceStars: 3333, // UPDATE ME to Your Mint Price
    totalNumMints: 111, // UPDATE ME to Your total mints
    testnet: true,
    soldOut: false,

  },
  // Production Values
  production: {
    rpcEndpoint: "https://rpc.stargaze-apis.com/",
    restEndpoint: "",
    chainId: "stargaze-1",
    // Custom values here
    sg721: "stars12qltyf0vmpwlfn2g2ghd26uzjtfpmxu9f4fwjvgwhrk9je0xg73qwhvarf", // UPDATE ME to your production contract

    // minter: "", // UPDATE ME to your production contract
    mintPriceStars: 3333, // UPDATE ME to Your Mint Price
    totalNumMints: 111, // UPDATE ME to Your total mints

    testnet: false,
    soldOut: true,
  },
  useTestnet: false, // Set to false on production

  defaults: {
    ipfsMetadataCid: 'bafybeifa7ljdoj7ih773wuyug64oimfpghjoj7pap6vcjvs2ov5czfiboy',
    ipfsImageCid: 'bafybeico4tdojaezk6mf27tvpb4wya4kl7zrgi5yuizgme2ina2z6ixmbm',
    ipfsLiveCid: '',
    fileUrlThumbnails: "/images/thumbs",
    fileUrlThumbnailsExtension: '.jpg',
    fileUrlMetadata: "/metadata",
    fileUrlMetadataExtension: '.json',
    fileUrlHighResImage: "https://cloudflare-ipfs.com/ipfs/bafybeico4tdojaezk6mf27tvpb4wya4kl7zrgi5yuizgme2ina2z6ixmbm",
    fileUrlHighResImageExtension: ".png",
    fileUrlImage: "/images/regular",
    fileUrlImageExtension: ".jpg",
    liveViewUrl: "-",
    showRarity:false,
  }
};

export type Config = typeof configBase.testnet & typeof configBase.production & typeof configBase.defaults;

const config = {
  ...configBase.defaults, ...(configBase.useTestnet
    ? configBase.testnet
    : configBase.production)
} as Config;
config.testnet = configBase.useTestnet;
Object.freeze(config);

export default config;

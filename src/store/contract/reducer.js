import { types } from "./actions";

const initialState = {
  collectionInfo: {},
  nftInfo: {},
  myCollections: [],
  allCollections: [],
  userNfts: [],
};

export default (appState = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTRACT_DEPLOYED:
      return { ...appState, collectionInfo: { ...payload } };
    case types.NFT_FETCHED:
      return { ...appState, nftInfo: { ...payload } };
    case types.COLLECTIONS_FETCHED:
      return { ...appState, myCollections: [...payload] };
    case types.COLLECTIONS_ALL_FETCHED:
      return { ...appState, allCollections: [...payload] };
    case types.USER_NFTS_FETCHED:
      return { ...appState, userNfts: [...payload] };
    default:
      return appState;
  }
};

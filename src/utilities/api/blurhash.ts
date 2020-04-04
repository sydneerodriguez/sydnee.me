export interface Blurhash {
  [asset: string]: {
    hash: string;
    height: number;
    width: number;
  };
}

export const getBlurhashPath = () =>
  `${process.env.BASE_URL}api/blurhash.json`

export const loadBlurhash = async (): Promise<Blurhash> => {
  const response = await fetch(getBlurhashPath())
  const json = await response.json()
  return json
}

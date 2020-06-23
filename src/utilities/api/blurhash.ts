export interface Blurhash {
  [asset: string]: {
    fh: number;
    fw: number;
    sh: number;
    sw: number;
    hash: string;
    sha1: string;
  };
}

export const getBlurhashPath = () =>
  `/api/blurhash.json`

export const loadBlurhash = async (): Promise<Blurhash> => {
  const response = await fetch(getBlurhashPath())
  const json = await response.json()
  return json
}

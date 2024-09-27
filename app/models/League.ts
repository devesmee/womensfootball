export interface League {
  id: number;
  name: string;
  logo: string;
  position: Position;
}

interface Position {
  lat: number;
  lng: number;
}

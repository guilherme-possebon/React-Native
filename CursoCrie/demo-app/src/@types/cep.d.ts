export interface ICep {
  cep: string;
  city: string;
  location: Location;
  neighborhood: null;
  service: string;
  state: string;
  street: null;
}

interface Location {
  coordinates: Coordinates;
  type: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

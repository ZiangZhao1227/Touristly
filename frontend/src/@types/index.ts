  export interface Name {
      fi: string;
      en: string;
      sv: string;
      zh: string;
  }

  export interface SourceType {
  }

  export interface Lat {
  }

  export interface Lon {
  }

  export interface Address {
      street_address: string;
      postal_code: string;
      locality: string;
      neighbourhood: string;
  }

  export interface Location {
      lat: Lat;
      lon: Lon;
      address: Address;
  }

  export interface LicenseType {
  }

  export interface Image {
      url: string;
      copyrightHolder: string;
      licenseType: LicenseType;
      media_id: string;
  }

  export interface Description {
      intro: string;
      body: string;
      images: Image[];
  }

  export interface Tag {
      id: string;
      name: string;
  }

  export interface RootObject {
      id: string;
      name: Name;
      sourceType: SourceType;
      info_url: string;
      modifiedAt: Date;
      location: Location;
      description: Description;
      tags: Tag[];
      extra_searchwords: string[];
      openingHoursUrl: string;
  }

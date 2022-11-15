export interface Name {
  fi: string;
  en: string;
  sv: string;
  zh: string;
}

export interface SourceType {}

export interface Lat {}

export interface Lon {}

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

export interface LicenseType {}

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
}

export interface ActivityObject {
  id: string;
  updated: string;
  descriptions: {
    en: {
      name: string;
      description: string;
      siteUrl: string;
      storeUrl: string;
    };
    additionalProp2: {
      name: string;
      description: string;
      siteUrl: string;
      storeUrl: string;
    };
    additionalProp3: {
      name: string;
      description: string;
      siteUrl: string;
      storeUrl: string;
    };
  };
  company: {
    name: string;
    businessId: string;
    email: string;
    phone: string;
  };
  open: {
    additionalProp1: {
      open: true;
      from: string;
      to: string;
    };
    additionalProp2: {
      open: true;
      from: string;
      to: string;
    };
    additionalProp3: {
      open: true;
      from: string;
      to: string;
    };
  };
  media: [
    {
      id: string;
      kind: string;
      copyright: string;
      name: string;
      alt: string;
      smallUrl: string;
      originalUrl: string;
      largeUrl: string;
    }
  ];
  address: {
    streetName: string;
    postalCode: string;
    locality: string;
    neighbourhood: string;
  };
  companyAddress: {
    streetAddress: string;
    postalCode: string;
    locality: string;
    neighbourhood: string;
  };
  tags: string[];
  siteUrl: string;
  storeUrl: string;
  priceEUR: {
    from: number;
    to: number;
    pricingType: string;
  };
  availableMonths: [string];
  meantFor: [string];
  duration: string;
  durationType: string;
}

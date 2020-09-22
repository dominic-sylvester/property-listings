import { Listing, ListingType } from '../../../types';
import { ObjectID } from 'mongodb';

export interface ListingsData {
  total: number;
  result: Listing[];
}

export interface PriceQuery {
  min: number;
  max: number;
}

export interface ListingsQuery {
  country?: string;
  admin?: string;
  city?: string;
  price?: Object;
  type?: Object;
}

export interface Filter {
  price?: PriceQuery;
  type?: [ListingType];
}

export interface ListingsArgs {
  page: number;
  limit: number;
  location?: string;
  filter?: Filter;
}

export interface ListingArgs {
  id: string;
}

export interface CreateListingInput {
  title: string;
  description: string;
  image: string;
  type: ListingType;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBaths: number;
  numOfBedrooms: number;
  propertySize: number;
}

export interface CreateListingArgs {
  input: CreateListingInput;
}

export interface EmailAgentListingInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  listingId: string;
}

export interface EmailAgentListingArgs {
  input: EmailAgentListingInput;
}

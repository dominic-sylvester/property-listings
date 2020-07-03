import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { LISTINGS } from "../../../graphql/queries";
import { ListingsSkeleton, Listings, EmptyMessage } from "../../../components";
import { PAGE_LIMIT, PAGE } from "../../../utils/constants";
import { ErrorMessage } from "../../../components/ErrorMessage";
import queryString from "query-string";

interface Props {
  location: string;
}

interface IVariables {
  page: number;
  limit: number;
  location: string;
  price?: Object;
}

const SearchListings: React.FC<Props> = ({ location }) => {
  const { search } = useLocation();

  const params = queryString.parse(search);

  let variables: IVariables = {
    page: PAGE,
    limit: PAGE_LIMIT,
    location,
  };

  if (params.maxPrice && params.minPrice) {
    variables = {
      ...variables,
      price: { min: Number(params.minPrice), max: Number(params.maxPrice) },
    };
  }

  const { data, loading, error } = useQuery(LISTINGS, {
    variables,
  });

  if (error) return <ErrorMessage />;

  if (loading) return <ListingsSkeleton numbers={12} />;

  const { listings } = data;

  if (listings.total === 0) {
    return (
      <EmptyMessage
        message="No Results Found"
        description="Try searching for another location."
      />
    );
  }

  return <Listings listings={listings.result} />;
};

export default SearchListings;

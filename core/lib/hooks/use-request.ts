import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import useSWRInfinite, { SWRInfiniteResponse } from 'swr/infinite';
import useSWRImmutable from 'swr/immutable';

interface IRequest extends SWRConfiguration {
  shouldFtech: boolean;
}

interface IResponse extends SWRResponse {
  isLoading: boolean;
}

const useRequest = (
  url: string,
  options: IRequest = { shouldFtech: true }
): IResponse => {
  /**
   * Sometimes we need to fetch data based on a state
   */
  const shouldFtech =
    typeof options.shouldFtech !== 'undefined' ? options.shouldFtech : true;

  /**
   * SWR uses the URL as key to fetch and cache data also prevent request dublication
   */
  const { data, mutate, error, isValidating } = useSWR(
    shouldFtech ? url : null
  );
  return { data, isLoading: !error && !data, isValidating, error, mutate };
};

/**
 * Sometimes the data will never change so it's not good practice to revalitae it again
 */

const useImmutableRequest = (
  url: string,
  options: IRequest = { shouldFtech: true }
): IResponse => {
  const shouldFtech =
    typeof options.shouldFtech !== 'undefined' ? options.shouldFtech : true;

  const { data, mutate, error, isValidating } = useSWRImmutable(
    shouldFtech ? url : null
  );
  return { data, isLoading: !error && !data, error, isValidating, mutate };
};

/**
 * Request with pagination
 */

const usePaginatedRequest = (url: string): SWRInfiniteResponse => {
  const { data, error, size, setSize, isValidating, mutate } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && previousPageData?.data?.list?.length === 0)
        return null;
      return `/${url}?page=${index}`;
    }
  );
  return { data, error, size, setSize, isValidating, mutate };
};

export { useRequest, useImmutableRequest, usePaginatedRequest };

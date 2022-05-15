import http from 'core/utils/http';

const fetcher = async (url: string, options = {}) => {
  const res = await http.get(url, {
    ...options,
  });

  return res.data;
};

export default fetcher;

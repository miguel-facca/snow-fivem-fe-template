import { useEffect, useState } from 'react';

import { isEnvBrowser, sleep } from '@app/utils/misc';

const resourceName = (window as any).GetParentResourceName
  ? (window as any).GetParentResourceName()
  : 'zs-boilerplate';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface NuiCallbackResponse<T> {
  result: T | null;
  isLoading: boolean;
  isError: boolean;
}

export function useStateNuiCallback<T, Data>(
  path: string,
  data?: Data,
  mockData?: T,
  delay?: number,
): NuiCallbackResponse<T> {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isEnvBrowser() && mockData) {
          if (delay) {
            await sleep(delay);
          }
          setResult(mockData);
        } else {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: data ? JSON.stringify(data) : undefined,
          };

          const response = await fetch(
            `https://${resourceName}/${path}`,
            options,
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const responseData: T = await response.json();
          setResult(responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data, delay, mockData, path]);

  return { result, isLoading, isError };
}

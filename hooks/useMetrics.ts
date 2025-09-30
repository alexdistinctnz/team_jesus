import useSWR, { mutate } from 'swr';

interface Metrics {
  peopleReached: number;
  amountRaised: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useMetrics() {
  const { data, error, isLoading } = useSWR<Metrics>('/api/metrics', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
    revalidateOnFocus: true,
  });

  const updateMetrics = async (donationAmount: number) => {
    // Optimistic update
    if (data) {
      const newMetrics = {
        peopleReached: data.peopleReached + (donationAmount * 1000),
        amountRaised: data.amountRaised + donationAmount,
      };
      mutate('/api/metrics', newMetrics, false);
    }

    // Send to server
    try {
      const response = await fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!response.ok) {
        throw new Error('Failed to update metrics');
      }

      const updated = await response.json();
      mutate('/api/metrics', updated);
    } catch (err) {
      // Revert on error
      mutate('/api/metrics');
      throw err;
    }
  };

  return {
    metrics: data,
    isLoading,
    error,
    updateMetrics,
  };
}
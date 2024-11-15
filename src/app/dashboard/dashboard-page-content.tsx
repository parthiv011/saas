'use client';

import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../utils/apiClient';
import { LoadingSpinner } from '@/components/loading-spinner';

export const DashboardPageContent = () => {
  const { data: categories, isPending: isLoadingCategories } = useQuery({
    queryFn: async () => {
      const res = await apiGet('/api/category');
      return res;
    },
    queryKey: ['user-event-categories'],
  });

  if (isLoadingCategories) {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <ul className="grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => {
        <li key={category.id}></li>;
      })}
    </ul>
  );
};

import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../utils/apiClient';

export const DashboardPageContent = () => {
  const { data } = useQuery({
    queryFn: async () => {
      const res = await apiGet('/api/category');
      // console.log(data);
      return res;
    },
    queryKey: ['user-event-categories'],
  });
};

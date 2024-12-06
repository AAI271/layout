import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Pagination from '../../components/Pagination/Pagination';
import { fetchPlanets } from '../../services/planetsService';
import { Planet } from '../../types/planets';
import TableSkeleton from '../../components/Table/TableSkeleton';

const Planets = () => {
    const { page } = useParams<{ page?: string }>();
    const [data, setData] = useState<Planet[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true); 

    const navigate = useNavigate();
  
    const currentPage = page ? parseInt(page, 10) : 1;
  
    useEffect(() => {
      const loadPlanets = async () => {
        try {
          const response = await fetchPlanets(currentPage);
          setData(response.results);
          setTotalPages(Math.ceil(response.count / 10));
        } catch (error) {
          console.error('Error fetching people:', error);
        }
        finally{
            setLoading(false)
        }
      };
      loadPlanets();
    }, [currentPage]);
  
    const handleRowClick = () => {
      console.log('row clicked!')
    };
  
    const handlePageChange = (page: number) => {
      if (page !== currentPage) {
        navigate(`/people/${page}`);
      }
    };

  return (
    <div>
      <h2>planets</h2>
      {loading ? (
        <TableSkeleton />
      ) : (
        <>
          <Table data={data} onRowClick={handleRowClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Planets;

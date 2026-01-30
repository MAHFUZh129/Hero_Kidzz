import DetailsSkeleton from '@/components/skeleton/DetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <DetailsSkeleton></DetailsSkeleton>
        </div>
    );
};

export default loading;
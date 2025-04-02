const Shimmer = () =>
{
    return (
        <div className="flex flex-col space-y-4 p-4 max-w-xs mx-auto">
            {/* Shimmer Effect for Image */}
            <div className="h-64 bg-gray-300 animate-pulse rounded-lg"></div>
            {/* Shimmer Effect for Title */}
            <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
            {/* Shimmer Effect for Overview */}
            <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
            <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
            {/* Shimmer Effect for Release Date and Rating */}
            <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded w-1/4"></div>
            </div>
        </div>
    );
};

export default Shimmer;

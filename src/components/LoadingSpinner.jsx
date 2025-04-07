const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#492D25]"></div>
    </div>
  );
};

export default LoadingSpinner;
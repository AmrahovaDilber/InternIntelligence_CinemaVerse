const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto text-[#e8ab29] text-[40px] font-semibold mb-12">
      {children}
    </div>
  );
};

export default Title;

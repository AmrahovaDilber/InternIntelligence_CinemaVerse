import { companyType, movieDetailType } from "../types/type";

interface MovieCompaniesProps {
  moviedetails: movieDetailType;
}

const MovieCompanies: React.FC<MovieCompaniesProps> = ({ moviedetails }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Production Companies:</h2>
      <div className="flex flex-wrap gap-4">
        {moviedetails.production_companies?.map((company:companyType) => (
          <div key={company.id} className="flex items-center gap-2">
            {company.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                alt={`${company.name} logo`}
                className="w-12 h-12 object-contain"
              />
            )}
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieCompanies;

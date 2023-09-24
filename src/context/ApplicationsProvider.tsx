import { PropsWithChildren, createContext, useContext, useState } from "react";
import { applications as applicationsList } from "../data";
import { debounce } from "../helpers";

interface IApplicationContext {
  applications: IApplication[];
  selectedApplication: IApplication;
  selectApplication: (id: number) => void;
  selectCategory: (category: string) => void;
  searchApplication: (searchTerm: string) => void;
}

const defaultContext = {
  applications: applicationsList,
  selectedApplication: applicationsList[0],
  selectApplication: () => {},
  selectCategory: () => {},
  searchApplication: () => {},
};

const ApplicationsContext = createContext<IApplicationContext>(defaultContext);

export const useApplicationsContext = () =>
  useContext<IApplicationContext>(ApplicationsContext);

const ApplicationsProvider = ({ children }: PropsWithChildren) => {
  const [applications, setApplications] =
    useState<IApplication[]>(applicationsList);

  const [selectedApplication, setSelectedApplication] = useState(
    applicationsList[0]
  );

  // SELECT CATEGORY OF APPLICATIONS
  const selectCategory = (category: string) => {
    setApplications(
      applicationsList.filter(
        (application) => application.category === category
      )
    );
  };

  // SELECT APPLICATION
  const selectApplication = (id: number) => {
    setSelectedApplication(
      applicationsList.filter((application) => application.id === id)[0]
    );
  };

  // SEARCH APPLICATION
  const searchApplication = debounce((searchTerm: string) => {
    const searchResult = applicationsList.filter((application) =>
      application.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setApplications(searchTerm.length > 0 ? searchResult : applicationsList);
  }, 500);

  return (
    <ApplicationsContext.Provider
      value={{
        selectApplication,
        applications,
        searchApplication,
        selectCategory,
        selectedApplication,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationsProvider;

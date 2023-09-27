import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { applications as applicationsList } from "../data";
import { debounce } from "../helpers";

interface IApplicationContext {
  applications: IApplication[];
  selectedApplication: IApplication;
  selectedType: string;
  selectedTypeCount: number;
  selectApplication: (id: number) => void;
  selectCategory: (category: string) => void;
  searchApplication: (searchTerm: string) => void;
  setSelectedType: (type: string) => void;
}

const defaultContext = {
  applications: applicationsList,
  selectedApplication: applicationsList[0],
  selectedType: "Applied",

  selectedTypeCount: applicationsList.filter(
    (applicaion) => applicaion.type === "Applied"
  ).length,

  selectApplication: () => {},
  selectCategory: () => {},
  searchApplication: () => {},
  setSelectedType: () => {},
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

  const [selectedType, setSelectedType] = useState("Applied");
  const [selectedTypeCount, setSelectedTypeCount] = useState(
    applicationsList.filter((applicaion) => applicaion.type === "Applied")
      .length
  );

  useEffect(() => {
    if (selectedType) {
      const newApplicationsList = applicationsList.filter(
        (application) => application.type === selectedType
      );

      setApplications(newApplicationsList);
      setSelectedTypeCount(newApplicationsList.length);
    }
  }, [selectedType]);

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
        applications,
        selectedApplication,
        selectedType,
        selectedTypeCount,
        selectApplication,
        searchApplication,
        selectCategory,
        setSelectedType,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationsProvider;

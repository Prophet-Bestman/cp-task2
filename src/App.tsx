import ApplicationsProvider from "./context/ApplicationsProvider";
import MainLayout from "./layouts/MainLayout";
import { ProgramApplicationView } from "./pages";

function App() {
  return (
    <ApplicationsProvider>
      <MainLayout>
        <ProgramApplicationView />
      </MainLayout>
    </ApplicationsProvider>
  );
}

export default App;

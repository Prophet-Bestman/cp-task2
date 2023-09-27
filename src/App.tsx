import { ApplicationsProvider } from "./context";
import { MainLayout } from "./layouts";
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

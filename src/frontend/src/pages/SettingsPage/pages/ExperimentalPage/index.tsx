// New file: src/frontend/src/pages/SettingsPage/pages/ExperimentalPage/index.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ExperimentalPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-x-hidden">
      <div className="flex w-full flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Experimental Features</CardTitle>
            <CardDescription>
              This section contains experimental features that are still in development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">Experimental Features</h1>
            <p className="mt-2">These features are under active development and may change or be removed in future versions.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperimentalPage;
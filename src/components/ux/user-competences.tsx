import { useProfile, type Competence } from "@/hooks/useProfile";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";

const UserCompetences = () => {
  const { competences, setCompetences } = useProfile();
  const [competenceName, setCompetenceName] = useState<string>("");
  const handleAddCompetence = (value: string) => {
    if (value)
      setCompetences([{ name: value, date: new Date().toLocaleDateString() }]);
    setCompetenceName("");
  };
  return (
    <div className="w-full flex-col gap-2 flex items-center">
      <div className="w-full flex flex-wrap gap-2">
        {competences.map((competence, index) => {
          return <Competence competence={competence} key={index} />;
        })}
      </div>
      <div className="w-full flex flex-col gap-2 mb-2">
        <Label htmlFor="competence">Ajouter une compétence</Label>
        <div className="grid grid-cols-10 gap-2">
          <Input
            value={competenceName}
            onChange={(e) => setCompetenceName(e.target.value)}
            className="w-full col-span-6"
            id="competence"
            placeholder="Ajouter une compétence..."
            type="text"
          />
          <Button
            onClick={() => handleAddCompetence(competenceName)}
            className="col-span-4"
            variant="default"
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCompetences;

const Competence = ({ competence }: { competence: Competence }) => {
  console.log(competence);

  return (
    <div className="relative w-content p-3 border border-border rounded-sm flex items-center justify-between gap-2">
      {competence.name}
    </div>
  );
};

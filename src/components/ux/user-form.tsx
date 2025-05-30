import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import UserCompetences from "./user-competences";

const UserForm = () => {
  return (
    <div className="w-full gap-3 flex flex-col sm:w-2/3 max-w-96 my-12 p-5 rounded-lg border border-border bg-transparent">
      <div className="flex mb-5 flex-col items-start">
        <h2 className="text-xl font-medium text-foreground">
          Formulaire d'entrée de données
        </h2>
        <p className="text-sm text-muted-foreground">
          Ce formulaire vous permet de rentré vos informations en tant que
          dévéloppeur front-end | back-end | full-stack | devOps...
        </p>
      </div>
      <div className="flex items-start flex-col gap-1">
        <Label htmlFor="username">Votre nom</Label>
        <Input id="username" type="text" placeholder="john doe..." />
      </div>
      <UserCompetences />
      <div className="flex items-start flex-col gap-1">
        <Label htmlFor="username">Votre biographie</Label>
        <Input
          id="username"
          type="text"
          placeholder="Je suis dévéloppeur fullStack..."
        />
      </div>
      <Button>Enrégistrer vos informations</Button>
    </div>
  );
};

export default UserForm;

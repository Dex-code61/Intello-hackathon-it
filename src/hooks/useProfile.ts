import type { LucideProps } from "lucide-react";
import { create } from "zustand";

export interface Social {
  name: string;
  link: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
export interface Competence {
  name: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  date: string;
}
export interface ProfileType {
  username: string | null;
  avatar: string | null;
  bio: string | null;
  socials: Social[] | [];
  competences: Competence[] | [];
  setBio: (bio: string) => void;
  setSocials: (socials: Social[]) => void;
  setCompetences: (competences: Competence[]) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: string) => void;
  setAllInfo: (
    username: string,
    avatar: string,
    bio: string,
    socials: Social[] | []
  ) => void;
  getAllInfo: () => {
    username: string;
    avatar: string;
    bio: string;
    socials: Social[];
  };
}

export const useProfile = create<ProfileType>()((set) => ({
  username: "",
  avatar: "",
  socials: [],
  bio: "",
  competences: [],
  setBio: (bio: string) => set(() => ({ bio })),
  setSocials: (socials: Social[]) => set(() => ({ socials: [...socials] })),
  setCompetences: (competences: Competence[]) => set(() => ({ competences })),
  setUsername: (username: string) => set(() => ({ username })),
  setAvatar: (avatar: string) => set(() => ({ avatar })),
  setAllInfo: (username, avatar, bio, socials) =>
    set(() => ({ username, avatar, socials: [...socials], bio })),
  getAllInfo: (): {
    username: string;
    avatar: string;
    bio: string;
    socials: Social[];
  } => {
    const username = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");
    if (username && avatar) {
      return {
        username,
        avatar,
        bio: useProfile.getState().bio || "",
        socials: useProfile.getState().socials,
      };
    }
    return { username: "", avatar: "", bio: "", socials: [] };
  },
}));

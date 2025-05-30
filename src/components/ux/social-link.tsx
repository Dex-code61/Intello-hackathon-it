import type { LucideProps } from "lucide-react";
import React from "react";

const SocialLink = ({
  link,
}: {
  link: {
    name: string | null;
    link: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
}) => {
  return (
    <div className="rounded-full group border border-border bg-muted p-2">
      {link.icon ? (
        <link.icon
          size={18}
          className="text-muted-foreground group-hover:text-foreground transition-all delay-150"
        />
      ) : (
        <div className="text-base font-bold text-muted-foreground group-hover:text-foreground transition-all delay-150">
          {" "}
          {link?.name?.split("")[0] || "S"}{" "}
        </div>
      )}
    </div>
  );
};

export default SocialLink;

import type { FC } from "react";
import { ChevronRightIcon } from "@untitled-theme/icons-react";

const breadcrumb = [
  { name: "top", url: "/" },
  { name: "second page", url: "/second-page" },
  { name: "third page", url: "/third-page" },
];

export const Breadcrumb: FC = () => {
  return (
    <nav>
      <ol className="flex gap-5">
        {breadcrumb.map((item) => (
          <li key={item.url} className="flex gap-1 items-center">
            {item.name}
            <ChevronRightIcon />
          </li>
        ))}
      </ol>
    </nav>
  );
};

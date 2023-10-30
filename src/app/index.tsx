import React from "react";

import { ReactComponent as Icon } from "@/shared/assets/delete_icon.svg";
import { Button } from "@/shared/ui/Button";

export function App() {
  return (
    <div>
      <div>Test</div>
      <Button variant="text">
        <Icon /> Btn
      </Button>
    </div>
  );
}

import React from "react";

import { Button } from "shared/ui/Button";
import { ReactComponent as Icon } from "shared/ui/Button/assets/plus.svg";

export function App() {
  return (
    <div>
      <div>Test</div>
      <Button variant="back-to-top">
        <Icon width={24} height={24} />
      </Button>
    </div>
  );
}

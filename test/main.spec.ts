import { bootstrap } from "../main";

(() => {
    const up = bootstrap();
    console.assert(up, "test completed");
})();
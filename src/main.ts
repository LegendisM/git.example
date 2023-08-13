import { TIME_TRACKER_KEY } from "./common/constant/time-tracker.constant";

export const bootstrap = (): boolean => {
    console.log("up");
    return true;
}

(async () => {
    console.time(TIME_TRACKER_KEY);
    const up = bootstrap();
    console.timeEnd(TIME_TRACKER_KEY);
})();
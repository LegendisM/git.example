export const bootstrap = (): boolean => {
    console.time('bootstrap');
    console.log("up");
    console.timeEnd("bootstrap");
    return true;
}

bootstrap();
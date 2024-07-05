export const handler = async (event) => {

    console.log("Event = " + JSON.stringify(event));

    if (event.throwError) {
        throw new Error("throwing error")
    }

}
